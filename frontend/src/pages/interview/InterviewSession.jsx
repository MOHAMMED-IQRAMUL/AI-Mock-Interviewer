import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaMicrophone, FaStop, FaPlay } from "react-icons/fa";

const SONAR_API = "https://api.perplexity.ai/chat/completions";
const SONAR_KEY = import.meta.env.VITE_SONAR_API_KEY;

const InterviewSession = () => {
  const { interviewType, difficulty, topic } = useLocation().state || {};
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [summaryReport, setSummaryReport] = useState(null);
  const [listening, setListening] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [speechRate, setSpeechRate] = useState(1);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speak = (text) => {
    if (!window.speechSynthesis || !text) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = speechRate;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  };

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return alert("Speech Recognition not supported");

    const rec = new SR();
    rec.lang = "en-US";
    rec.continuous = false;

    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setUserInput((prev) => `${prev} ${transcript}`);
    };

    recognitionRef.current = rec;
    rec.start();
  };

  const systemPrompt = `
You are a professional but friendly AI interviewer. 
Start with a brief intro and ask the candidate to introduce themselves.
Then proceed with a structured interview on topic "${topic}", type "${interviewType}", difficulty "${difficulty}".
Avoid off-topic or repeated questions. Keep it short and human-like.
Your are AI MOCK BOT.
`;

  const callSonar = async (newMsgs) => {
    const payload = {
      model: "sonar-pro",
      response_format: { type: "text" },
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map(m => ({ role: m.role, content: m.content })),
        ...newMsgs,
      ]
    };

    const res = await fetch(SONAR_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SONAR_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Sonar API error: " + await res.text());

    const data = await res.json();
    const reply = data.choices?.[0]?.message?.content || "⚠️ No response from AI.";
    return reply.trim().slice(0, 500); // limit response
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    const userMsg = { role: "user", content: userInput.trim() };
    setMessages(prev => [...prev, userMsg]);
    setUserInput("");
    setLoading(true);

    try {
      const aiResponse = await callSonar([userMsg]);
      const aiMsg = { role: "assistant", content: aiResponse };
      setMessages(prev => [...prev, aiMsg]);
      if (autoPlay) speak(aiResponse);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "assistant", content: "⚠️ AI error — please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  const finishInterview = async () => {
    const summaryPrompt = {
      role: "user",
      content: `Summarize the interview in JSON: {"summary":"...","score":"X/10","areasToImprove":["...","..."]}
Here is the chat:\n${messages.map(m => `${m.role}: ${m.content}`).join("\n")}`
    };

    setLoading(true);
    try {
      const aiResponse = await callSonar([summaryPrompt]);
      const jsonMatch = aiResponse.match(/{[\s\S]*}/);
      const json = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
      setSummaryReport(json || { summary: "Parsing failed", score: "N/A", areasToImprove: [] });
    } catch (err) {
      console.error("Summary error:", err);
      setSummaryReport({ summary: "Error generating summary", score: "N/A", areasToImprove: [] });
    } finally {
      setShowReport(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <motion.div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {!showReport ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              {interviewType} Interview ({difficulty})
            </h2>

            <div className="h-80 overflow-y-auto bg-gray-100 p-4 rounded">
              {messages.map((m, i) => (
                <div key={i} className={`my-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-block p-2 rounded max-w-[80%] ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                    {m.content}
                    {m.role === "assistant" && (
                      <button className="ml-2 text-xs text-blue-700 underline" onClick={() => speak(m.content)}>
                        <FaPlay className="inline mr-1" /> Play
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {loading && <p className="italic">AI is thinking...</p>}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                className="flex-grow border rounded p-2"
                placeholder="Your response..."
              />
              <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
              <button
                onClick={startListening}
                className={`px-4 py-2 rounded text-white ${listening ? "bg-red-500" : "bg-green-500"}`}
              >
                {listening ? <FaStop /> : <FaMicrophone />}
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={autoPlay} onChange={() => setAutoPlay(!autoPlay)} />
                Auto Play TTS
              </label>
              <label>
                Speech Rate:
                <input
                  type="range"
                  min="0.5" max="2" step="0.1"
                  value={speechRate}
                  onChange={e => setSpeechRate(parseFloat(e.target.value))}
                />
              </label>
            </div>

            <div className="text-right mt-4">
              <button
                onClick={finishInterview}
                className="bg-purple-600 text-white px-6 py-2 rounded"
              >
                Finish Interview
              </button>
            </div>
          </>
        ) : (
          <div className="text-gray-800">
            <h3 className="text-xl font-bold mb-2">Interview Summary</h3>
            <p><strong>Score:</strong> {summaryReport?.score}</p>
            <p><strong>Summary:</strong> {summaryReport?.summary}</p>
            <p><strong>Areas to Improve:</strong></p>
            <ul className="list-disc ml-6">
              {summaryReport?.areasToImprove.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default InterviewSession;
