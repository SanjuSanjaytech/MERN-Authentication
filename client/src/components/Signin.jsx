
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

  const Signin = () => {
    const { loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(signInFailure(data.message));
          return;
        }
        dispatch(signInSuccess(data));
        navigate('/profile');
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    };
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" id="email" 
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.email}
          />
          <input 
            type="password" id="password"
             placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.password}
          />
          <button 
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
          >
            { loading ? 'Loading...' : 'Sign In'}
          </button>
          < OAuth />
        </form>
        <p className="text-center text-gray-600 mt-4">
          Have an account? <Link to="/signup" className="text-blue-500 font-semibold">Sign Up</Link>
        </p>
      </div>
      <p className="text-red-500">{error ? error || 'Something went wrong' : ''}</p>
    </div>
  );
};

export default Signin;
