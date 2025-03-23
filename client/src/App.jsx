import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Navbar from './headerfixed/Navbar';
import PrivateRoute from './private/PrivateRoute';



const App = () => {
  return (
    <BrowserRouter>
    {/* navbar */}
    <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
    </div>
    <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        < Route element={<PrivateRoute />} >
         <Route path="/profile" element={<Profile />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App