
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

  const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        setError(false);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        const data = await res.json();

        if ( data.success) {
          alert('Signup successful');

          setFormData({ username: "", email: "", password: "" });
          
        } else {  
          alert(data.message || 'Signup failed');
        }
        setLoading(false);
        if (data.success === false) {
          setError(true);
          return;
        }
        navigate('/signin');
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" id="username"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.username}
          />
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
            { loading ? 'Loading...' : 'Sign Up'}
          </button>
          < OAuth />
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account? <Link to="/signin" className="text-blue-500 font-semibold">Sign In</Link>
        </p>
      </div>
      <p className="text-red-500">{error ? 'Something went wrong' : ''}</p>
    </div>
  );
};

export default Signup;
