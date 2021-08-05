import './dashboard.css'
import { useState } from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FcComments, FcPlus } from 'react-icons/fc';
import { FiSearch, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Dashboard(){
    const [chamados, setChamados] = useState([1]);
    return (
        <>
        <div>
        <Header />
        <div className="content">
            <Title name="Atendimentos">
                <FcComments size={25} />
            </Title>
            {chamados.length === 0 ? (

            <div className="container dashboard">
                <span>Nenhum chamado registrado...</span>
                <Link to="/new" className="btn btn-success new">
                <FcPlus size={25} className="" />
                Novo chamado
                </Link>
            </div>
            ):(
                <>
                   <Link to="/new" className="btn btn-success new">
                <FcPlus size={25} className="" />
                Novo chamado
                </Link>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Cliente</th>
                            <th scope="col">Assunto</th>
                            <th scope="col">Status</th>
                            <th scope="col">Cadastrado em</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Cliente">Fulano</td>
                            <td data-label="Assunto">Suporte</td>
                            <td data-label="Status">
                                <span className="badge">Em andamento</span>
                            </td>
                            <td data-label="Cadastrado">03/08/21</td>
                            <td data-label="Ação">
                                <button className="action" style={{backgroundColor:'blue'}}>
                                    <FiSearch color="#fff" size={17} />
                                </button>
                                <button className="action" style={{backgroundColor:'#f6a935', border:'none'}}>
                                    <FiEdit2 color="#fff" size={17} />
                                </button>
                            </td>

                        </tr>
                    </tbody>
                </table>
                </>
            )}

        </div>
        </div>
        </>
    )
}