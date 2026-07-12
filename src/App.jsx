import { Toaster } from "@/components/ui/toaster"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from '@/components/ScrollToTop';

import Home from '@/pages/Home';
import ExperienceDetail from '@/pages/ExperienceDetail';
import ProjectDetail from '@/pages/ProjectDetail';
import CourseDetail from '@/pages/CourseDetail';
import PublicationDetail from '@/pages/PublicationDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/publication/:id" element={<PublicationDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
