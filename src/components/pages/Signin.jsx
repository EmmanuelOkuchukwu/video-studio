import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import styled from 'styled-components';
import { AuthService } from '../../services/authService';
import { useHistory } from 'react-router-dom';

export default function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSignin = (evt) => {
        evt.preventDefault();
        const formData = {
            username: username,
            password: password
        }
        AuthService.onSignin(formData)
            .then(() => {
                console.log('Logged In!');
                history.push('/admin-dashboard');
            })
            .catch(error => console.log(error));
    }
    return (
        <SigninComponent>
            <Navbar />
            <div className="main-signin-area">
                <SigninForm>
                    <div className="icon">
                        <i className="fas fa-user-circle fa-5x" />
                    </div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="username" value={username} onChange={evt => setUsername(evt.target.value)} placeholder="Enter your Username" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" value={password} onChange={evt => setPassword(evt.target.value)} placeholder="Enter your Password" /><br />
                    <SigninButton onClick={handleSignin}>Signin</SigninButton>
                </SigninForm>
            </div>
        </SigninComponent>
    );
};

const SigninComponent = styled.main`
  display: flex;
  flex-direction: column;
  .main-signin-area {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SigninForm = styled.form`
  background-color: ${props => props.theme.MainThemeColor};
  height: 400px;
  width: 360px;
  border-radius: 4px;
  .icon {
    text-align: center;
    margin: 15px 0;
  }
  input {
    //padding: 10px;
    margin: 15px 10px;
    width: 334px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
  label {
    margin: 10px;
  }
`;

const SigninButton = styled.div`
  margin: 10px 10px;
  background-color: ${props => props.theme.SecondaryTheme};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
