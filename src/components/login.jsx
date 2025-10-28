// import React, { useState } from 'react';
// import '../styles/components/login.css';

// import catchacoachImage from '../assets/catchacoach-app3.png';
// import logoImage from '../assets/logo.svg';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // Add show password state

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login attempt:', { email, password, rememberMe });
//     // Add your login logic here
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <div className="login-container">
//       {/* Left Side - Form */}
//       <div className="login-form-section">
//         <div className="login-form-container">
//           <h1 className="login-title">Login</h1>
//           <p className="login-subtitle">
//             Login to your account <br></br>and let's get your daily activities done!
//           </p>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit} className="login-form">
//             {/* Email Field */}
//             <div className="form-group">
//               <label htmlFor="email" className="form-label">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                   <polyline points="22,6 12,13 2,6"/>
//                 </svg>
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email address"
//                 className="form-input"
//                 required
//               />
//             </div>

//             {/* Password Field */}
//             <div className="form-group">
//               <label htmlFor="password" className="form-label">
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
//                   <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
//                 </svg>
//                 Password
//               </label>
//               <div className="password-input-container">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="password-input"
//                   required
//                 />
//                 <button 
//                   type="button"
//                   className="password-toggle"
//                   onClick={togglePasswordVisibility}
//                   aria-label={showPassword ? "Hide password" : "Show password"}
//                 >
//                   {showPassword ? (
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//                       <line x1="1" y1="1" x2="23" y2="23"/>
//                     </svg>
//                   ) : (
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                       <circle cx="12" cy="12" r="3"/>
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button type="submit" className="login-button">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="login-image-section">
//         <div className="image-container">
//           <img 
//             src={catchacoachImage} 
//             alt="CatchACoach App" 
//             className="login-image"
//           />
//           <div className="logo-overlay">
//             <img 
//               src={logoImage} 
//               alt="CatchACoach Logo" 
//               className="centered-logo"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/login.css';

import catchacoachImage from '../assets/catchacoach-app3.png';
import logoImage from '../assets/logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    
    // Add your actual authentication logic here
    if (email && password) {
      // Navigate to dashboard on successful login
      navigate('/dashboard');
    } else {
      alert('Please enter both email and password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      {/* Left Side - Form */}
      <div className="login-form-section">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>
          <p className="login-subtitle">
            Login to your account <br></br>and let's get your daily activities done!
          </p>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="login-form">
            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="form-input"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="password-input"
                  required
                />
                <button 
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="login-image-section">
        <div className="image-container">
          <img 
            src={catchacoachImage} 
            alt="CatchACoach App" 
            className="login-image"
          />
          <div className="logo-overlay">
            <img 
              src={logoImage} 
              alt="CatchACoach Logo" 
              className="centered-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;