import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './component/Home';
import JoinPage from './component/JoinPage';
import LoginPage from './component/LoginPage';
import MyInfo from './component/MyInfo';
import Posting from './component/Posting';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <Link to="/">Home</Link>
        <Link to="/join">join</Link>
        <Link to="/login">login</Link>
        <Link to="/MyInfo">myinfo</Link>
        <Link to="/posting">posting</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/MyInfo" element={<MyInfo />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </div>
  );
}
export default App;
