import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signIn.css';
import esferaRaios from '../../assets/esferaRaios.jpg'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  alert("clicou");
}

    return (
     <>
    <div className="container">
      <div className="login">
        <form className="formSignIn" onSubmit={handleSubmit} >
          <div className="floatLabel">
          <input type="text" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label for="email">email</label>
          </div>
          <div className="floatLabel">
          <input type="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          <label for="password">senha</label>
          </div>
          <div>
          <button type="submit">Entrar</button>
          </div>
          <div>
    <Link to="/register">Criar uma conta</Link>

          </div>
        </form>
      </div>
    </div>
    <div>
    </div>
     </>
    );
  }
  
  export default SignIn;
  