import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';

function App() {
  return (
    <div>
      <Header />
      <div style={{ margin: '10px 20px' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/topic/:topicNameKey" element={<Content />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
