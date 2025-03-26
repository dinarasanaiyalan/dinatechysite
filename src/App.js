import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const topics = ["Variable", "Keywords", "Operator","Control Statements"];

  return (
    <div>
      <Header />
      <div style={{ margin: '10px 20px' }}>
        <Router>
          <h3>Topics</h3>
          <ul className='menu-list'>
            {topics
              .map((t, index) => (
                <li key={index}>
                  <Link to={`/topic/${t}`}>{t}</Link>
                </li>
              ))}
          </ul>
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
