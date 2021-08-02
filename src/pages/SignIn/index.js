import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/auth';
import "./signIn.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();

    if(email !=='' && password !==''){
      signIn(email,password);
    }
  }

  return (
    <>
      <div className="container">
        <div className="login">
          <form className="formSignIn" onSubmit={handleSubmit}>
          <h1 className="text-uppercase text-warning">Login</h1>
            <div className="floatLabel">
              <input
                type="text"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">email</label>
            </div>
            <div className="floatLabel">
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">senha</label>
            </div>
            <div>
              <button type="submit">{loadingAuth ? 'Carregando...' : 'Acessar'}</button>
            </div>
            <div>
              <Link to="/register" className="linkLogin">Criar uma conta</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
