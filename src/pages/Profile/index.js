import { useState, useContext } from "react";
import "./profile.css";
import semFoto from "../../assets/semFoto.png";
import Header from "../../components/Header";
import Title from "../../components/Title";
import firebase from "../../services/firebaseConnection";

import { AuthContext } from "../../contexts/auth";

import { FcSettings, FcUpload } from "react-icons/fc";

export default function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [nome, setNome] = useState(user && user.nome);
  const [email, setEmail] = useState(user && user.email);
  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null)

  async function handleSave(e){
      e.preventDefault();
      if(imageAvatar === null && nome !== ''){
        await firebase.firestore().collection('users')
        .doc(user.uid)
        .update({
            nome: nome
        })
        .then(()=>{
            let data = {
                ...user,
                nome:nome
            };
            setUser(data);
            storageUser(data);

        })
      }
  }

  return (
    <>
      <div>
        <Header />
        <div className="content">
          <Title name="Meu perfil">
            <FcSettings size={24} />
          </Title>
          <div className="profileContainer">
            <form className="formProfile" onSubmit={handleSave}>
              <label className="labelAvatar">
                <span>
                  <FcUpload size={24} />
                </span>
                <input type="file" />
                <br />
                {avatarUrl === null ? (
                  <img
                    src={semFoto}
                    width="250"
                    height="250"
                    alt="Foto de perfil do usuário"
                  />
                ) : (
                  <img
                    src={avatarUrl}
                    width="250"
                    height="250"
                    alt="Foto de perfil do usuário"
                  />
                )}
              </label>
              <label>Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <label>E-mail</label>
              {/* não pode mudar o email */}
              <input type="email" value={email} disabled={true} />
              <button type="submit">Salvar</button>
            </form>
          </div>
          <div className="profileContainer">
              <button className="btn btn-danger" onClick={()=> signOut()}> Sair</button>
          </div>
        </div>
      </div>
    </>
  );
}
