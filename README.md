🚀 MERN Auth Project
This is a MERN stack authentication app that allows users to sign up, sign in (with email/password or Google), update profile, and securely manage their session using JWT and Redux.

🛠️ Tech Stack
MongoDB – NoSQL database
Express.js – Backend server
React.js – Frontend framework
Node.js – Runtime environment
JWT – For authentication
Redux Toolkit – State management
Tailwind CSS – Styling
Mongoose – MongoDB object modeling
Google OAuth – For Google sign-in




✨ Features
User Registration & Login (email + password)
Google Sign-In (OAuth)
Update Profile (username, email, password)
JWT-based authentication & protected routes
Redux for global user state
Logout and Delete Account
Fully responsive UI


🔐 Authentication
Firebase Authentication is used for handling:
Google Sign-In
Secure token management
Traditional email & password authentication is handled with custom JWT in the backend.
Features:
Sign up / Sign in
Sign out
Delete account (handled securely via backend with token verification)
Update profile (username, email, password)



root/
├── api/        # Express server
├── client/     # React frontend
├── .gitignore
├── README.md


📌 Notes
This project was created as part of my MERN stack learning journey.
It demonstrates user authentication, protected routes, and state management using Redux.
Suggestions and contributions are welcome!
Feel free to fork or contribute!
