// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Practice from './pages/Practice';
import Resources from './pages/Resources';
import Interviews from './pages/Interviews';
import NotFound from './pages/NotFound';

import DSA from './pages/resources/DSA';
import Core from './pages/resources/Core';
import HR from './pages/resources/HR';
import NonTech from './pages/resources/NonTech';
import Sheets from './pages/resources/Sheets';
import Projects from './pages/resources/Projects';
import Webdev from './pages/resources/Webdev';
import Resume from './pages/resources/Resume';

import InterviewSession from './pages/interview/InterviewSession';
import SheetDetails from './pages/practive/SheetDetails';

export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/practice/:sheetId" element={<SheetDetails />} />

      <Route path="/interviews" element={<Interviews />} />
      <Route path="/interview/start" element={<InterviewSession />} />

      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/dsa" element={<DSA />} />
      <Route path="/resources/core" element={<Core />} />
      <Route path="/resources/hr" element={<HR />} />
      <Route path="/resources/nontech" element={<NonTech />} />
      <Route path="/resources/sheets" element={<Sheets />} />
      <Route path="/resources/projects" element={<Projects />} />
      <Route path="/resources/webdev" element={<Webdev />} />
      <Route path="/resources/resume" element={<Resume />} />

      {/* Catch-all route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}
