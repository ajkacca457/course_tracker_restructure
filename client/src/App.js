import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import SharedLayout from './components/SharedLayout';
import Error from './pages/Error';
import CourseList from './pages/CourseList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path='/courses' element={<CourseList/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
