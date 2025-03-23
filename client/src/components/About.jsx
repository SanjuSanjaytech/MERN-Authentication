import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">About This Project</h1>
      <p className="text-lg leading-7 text-justify">
        This project was created as a full-stack authentication system to understand and implement secure user management in web applications.
        It supports essential features like user registration, login, logout, Google OAuth integration, and profile updates.
        <br /><br />
        The main goal behind this project was to practice building a complete MERN (MongoDB, Express, React, Node) application with real-world functionality.
        I also aimed to explore tools like Redux Toolkit for state management and Tailwind CSS for responsive UI design.
        <br /><br />
        The backend is protected using JWT (JSON Web Tokens), and user passwords are securely hashed using bcrypt before being saved in MongoDB.
        <br /><br />
        In future versions, I plan to add features like password reset, email verification, role-based access control, and possibly storing images using cloud services like Firebase or Cloudinary.
      </p>
    </div>
  );
};

export default About;
