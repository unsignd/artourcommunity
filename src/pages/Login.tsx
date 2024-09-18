import React, { useState } from 'react';
import { usePalette, useTheme } from '@unsignd/uuuui';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div<{
    $backgroundColor: string;
  }>`
    width: 100vw;
    max-width: 2400px;
  
    margin-top: 100px;
  
    display: flex;
    flex-direction: column;
  
    background-color: ${(props) => props.$backgroundColor};
  `;

  const TextWrapper = styled.div`
  margin: 80px 0;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    width: 100%;
    height: 13.5px;

    position: absolute;
    bottom: -80px;
    left: 0;

    display: flex;
    justify-content: center;

    background-repeat: repeat-x;
    background-size: contain;
    background-image: url('/assets/decorations/wave_down_3.svg');

    content: '';
    z-index: 2;
  }
`;

const Text = styled.p<{
  $color: string;
}>`
  font-size: 16px;

  color: ${(props) => props.$color};
`;

const Heading = styled.p<{
  $color: string;
}>`
  font-size: 32px;
  font-weight: 500;

  color: ${(props) => props.$color};
`;

const QuoteWrapper = styled.div`
  width: 100%;
  max-width: 100vw;

  position: relative;

  background-color: #fefcec;

  &::after {
    width: 100%;
    height: 13.5px;

    position: absolute;
    bottom: -13.5px;
    left: 0;

    display: flex;
    justify-content: center;

    background-repeat: repeat-x;
    background-size: contain;
    background-image: url('/assets/decorations/wave_down_2.svg');

    content: '';
    z-index: 2;
  }
`;

const QuoteText = styled(Text)`
  padding: 40px 80px 32.5px 80px;

  text-align: center;
  font-size: 16px;

  white-space: pre-wrap;
`;

interface LoginProps {
    onLogin: (username: string, password: string) => void;
  }

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const { palette } = usePalette();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Extract error message from server
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token); // Store the token
      localStorage.setItem('username', username);
      navigate('/profile'); // Redirect to profile page after login
    } catch (error: any) {
      setError(error.message); // Set error message if login fails
    }
  };

  return (
    <Container $backgroundColor={palette[theme]['base.100']}>
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <Heading  $color={palette[theme]['base.500']}>Login</Heading>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
    </Container>
  );
};