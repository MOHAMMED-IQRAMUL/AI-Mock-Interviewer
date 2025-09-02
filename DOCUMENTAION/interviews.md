# Interviews Module

Entry: `/interview/start` → `src/pages/interview/InterviewSession.jsx`

Inputs:
 
* location.state: { interviewType, difficulty, topic }

Flow:

1. User sends text or uses mic → message added to local state
2. API call to Perplexity Sonar with system + conversation messages
3. Assistant reply appended; optional TTS playback
4. Finish → request JSON summary, parse and render

Error handling:
 
* Displays a fallback assistant message on API errors
* Guards when SpeechRecognition unsupported

Extensibility ideas:
 
* Persist transcript to localStorage or backend
* Add timers and structured rounds
* Add code-editor round with separate service
