import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';


export default function Dashboard(){
    const { signOut }= useContext(AuthContext);
    return (
        <>
        <Header />
        <h1>Página dashboard</h1>
        <button onClick={()=> signOut()} className="btn btn-danger ">Fazer logout</button>
        </>
    )
}