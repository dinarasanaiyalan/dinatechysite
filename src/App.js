import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from './component/Articles';
import { TopicsProvider } from './component/JavaNotes';
import LandingPage from './component/LandingPage';

function App() {

  return (
    <div>
      <TopicsProvider>
        <div style={{ margin: '10px 20px' }}>
          <Router>
            <Header />
            <Routes>
              <Route path="*" element={<LandingPage />} />
              <Route path="/content" element={<Content />} />
              <Route path="/topic/:topicNameKey" element={<Content />} />
              <Route path="/articles" element={<Articles />} />
            </Routes>
          </Router>
        </div>
      </TopicsProvider>
    </div>
  );
}

export default App;
