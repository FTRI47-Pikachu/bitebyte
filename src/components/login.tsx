import React, { useState, FormEvent } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Header from './header';

const Login: React.FC = ({ setUserId }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Post to the backend
    try {
      const response = await fetch('/api/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if(response.ok) {
        const data = await response.json();
        setUserId(data.userId);
        console.log("Login sucsess data:",data);
        navigate('/homepage');
      } else {
        const errorData = await response.json();
          setError(errorData.error);
      }
    } catch (error) {
      console.error("Error during login.")
    }    
  };

  return (
    <div className="login-signup-container">
      
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='button-container'>
          <button type="submit">Sign In</button>
          </div>
        
      </form>
       <p>Don't have an account yet?  <Link to="/signup">Sign up</Link> Here!</p>
       
    </div>
  );
};

export default Login;
