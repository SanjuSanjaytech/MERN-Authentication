import React from 'react';

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to the Authentication Project</h1>
      <p className="text-lg leading-7 text-justify">
        This authentication project is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
        The frontend is built with React.js and styled using Tailwind CSS for a modern, responsive UI.
        The backend uses Express.js and Node.js to handle API requests, and MongoDB is used as the database to store user data securely.
        <br /><br />
        Authentication includes features like user sign-up, sign-in, Google OAuth login, profile update, JWT-based session management, and protected routes.
        Redux Toolkit is used for managing global state like user login state, and data is stored securely with hashed passwords using bcrypt.
        <br /><br />
        This project is a great foundation for building secure user-based applications, and it follows best practices for frontend-backend integration.
      </p>
    </div>
  );
};

export default Home;
