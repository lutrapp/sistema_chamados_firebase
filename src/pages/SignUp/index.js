import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

import '../SignIn/signIn.css'

function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

function handleSubmit(e) {
  e.preventDefault();
  if(nome!=='' && email!=='' && password!==''){
    signUp(email, password, nome)
  }
}

    return (
     <>
    <div className="container">
      <div className="login">
        <form className="formSignIn" onSubmit={handleSubmit} >
          <h1 className="text-uppercase text-warning">Cadastro</h1>
          <div className="floatLabel">
          <input type="text" id="nome" required value={nome} onChange={(e)=>setNome(e.target.value)} />
          <label for="nome">seu nome</label>
          </div>
          <div className="floatLabel">
          <input type="text" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <label for="email">email</label>
          </div>
          <div className="floatLabel">
          <input type="password" id="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
          <label for="password">senha</label>
          </div>
          <div>
          <button type="submit">{loadingAuth ? 'Carregando...' : 'Criar Conta'}</button>
          </div>
          <div>
              <Link to="/" className="linkLogin">Já tem uma conta? Entrar</Link>
            </div>
        </form>
      </div>
    </div>
    <div>
    </div>
     </>
    );
  }
  
  export default SignUp;
  
  