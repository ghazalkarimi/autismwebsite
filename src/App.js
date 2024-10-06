import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNav from './components/topNav';
import SideNav from './components/sideNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css';
import './css/addstyles.css';
import Profile from './pages/profile';
import Footer from './components/footer';
import Home from './pages/home';
import CreatePost from './pages/createPost';
import PostDetails from './pages/postDetails';
import SearchResult from './pages/searchResult';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav/>
        <div id="layoutSidenav">
          <SideNav />
          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/createpost" element={<CreatePost />} />
                  <Route path="/searchresult" element={<SearchResult />} />
                  <Route path="/postdetails" element={<PostDetails />} />
                </Routes>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
