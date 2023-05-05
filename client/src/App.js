import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import SharedLayout from './components/SharedLayout';
import Error from './pages/Error';
import CourseList from './pages/CourseList';
import { ToastContainer } from 'react-toastify';
import ProtectRoute from './components/ProtectRoute';
import AddCourse from './pages/AddCourse';
import SharedLayoutDashboard from './components/SharedLayoutDashboard';
import Report from './pages/Report';
import Information from './pages/Information';
import SingleCourse from './components/SingleCourse';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={1000} limit={1} theme='colored' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path='/dashboard' element={<ProtectRoute>
            <SharedLayoutDashboard />
          </ProtectRoute>}>
            <Route index path='/dashboard' element={<CourseList />} />
            <Route index path='/dashboard/courses/:id' element={<SingleCourse />} />
            <Route path='/dashboard/add-course' element={<AddCourse />} />
            <Route path='/dashboard/report' element={<Report />} />
            <Route path='/dashboard/info' element={<Information />} />
          </Route>

          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
