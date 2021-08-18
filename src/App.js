// @components
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';

// @pages
import Home from './pages/Home/Home'

// @style
import './App.css';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
