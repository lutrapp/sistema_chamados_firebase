import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import './header.css';
import semFoto from '../../assets/semFoto.png';
import {FcHome, FcCustomerSupport, FcSettings, FcBusinessman, FcBusinesswoman}  from 'react-icons/fc';

export default function Header(){
    const {user} = useContext(AuthContext);

    return(
        <>
        <div className="sideBar">
            <div>                 
            <img className="img-fluid" src={user.avatarUrl===null? semFoto : user.avatarUrl} alt="imagem do usuário"/>
            </div>
            <Link to='/dashboard' className="linkPages">
            <FcCustomerSupport size={24} />
            Chamados
            </Link>
            <Link to='/customers' className="linkPages">
            <FcBusinessman size={24} />
            {/* <FcBusinesswoman size={24} /> */}
            Clientes
            </Link>
            <Link to='/profile' className="linkPages">
            <FcSettings size={24} />
            Configurações
            </Link>
        </div>
        </>
    )
}