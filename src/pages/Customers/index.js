import './customers.css';
import {useState} from 'react'
import Title from '../../components/Title';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

import {FcBusinessman} from 'react-icons/fc';

export default function Customers(){
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [endereco, setEndereco] = useState('');

    async function handleAdd(e){
        e.preventDefault();
        if(nomeFantasia !== '' && cnpj!== '' && endereco!== ''){
            await firebase.firestore().collection('customers')
            .add({
                nomeFantasia: nomeFantasia,
                cnpj:cnpj,
                endereco:endereco
            })
            .then(()=>{
                setNomeFantasia('');
                setCnpj('');
                setEndereco('');
                toast.info('Empresa cadastrada com sucesso!');
            })
            .catch((error)=>{
                console.log(error);
                toast.error('Ocorreu um erro ao cadastrar essa empresa');
            })
        }else{
            toast.error('Preencha todos os campos!');
        }
    }

    return(
        <>
        <div>
            <Header />
            <div className="content">
                <Title name="Clientes">
                    <FcBusinessman size={25} />
                </Title>
                <div className="profileContainer">
                    <form className="formProfile customers" onSubmit={handleAdd}>
                        <label>Nome Fantasia</label>
                        <input type="text" value={nomeFantasia} onChange={(e) => setNomeFantasia(e.target.value)} />
                        <label>CNPJ</label>
                        <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        <label>Endereço</label>
                        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        <button type="submit">Cadastrar</button>

                    </form>
                </div>
            </div>
        </div>
        <p>página de clientes</p>
        </>
    )
}