import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const URI = 'http://localhost:5000/api/auth/register'; // dirección para el registro de usuarios

export default function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/signin'); // Envia al login
  };

  const store = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URI, { name, password, adress, telephone, email }); // Ajusta los campos según tu modelo
      navigateLogin();
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      // Manejo de errores, como mostrar un mensaje al usuario
    }
  };

  return (
    <div className='register-form'>
      <h2>Sign Up</h2>
      <form onSubmit={store}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' required />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' required />
        <input value={adress} onChange={(e) => setAdress(e.target.value)} type="text" placeholder='Address' required />
        <input value={telephone} onChange={(e) => setTelephone(e.target.value)} type="text" placeholder='Telephone' required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' required />
        <input type="submit" className='btn.login' value='Register' />
      </form>
    </div>
  );
}
