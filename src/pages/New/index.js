import "./new.css";
import { useState, useEffect, useContext } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { FcPlus } from "react-icons/fc";

import firebase from "../../services/firebaseConnection";
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";

export default function New() {
  const [loadCustomers, setLoadCustomers] = useState(true);
  const [customers, setCustomers] = useState([]);
  const [customerSelected, setCustomerSelected] = useState(0);

  const [assunto, setAssunto] = useState("Suporte");
  const [status, setStatus] = useState("Aberto");
  const [observacao, setObservacao] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadCustomers() {
      await firebase
        .firestore()
        .collection("customers")
        .get()
        .then((snapshot) => {
          let lista = [];

          snapshot.forEach((doc) => {
            lista.push({
              id: doc.id,
              nomeFantasia: doc.data().nomeFantasia,
            });
          });

          if (lista.length === 0) {
            console.log("nenhuma empresa encontrada");
            setCustomers([{ id: "1", nomeFantasia: "NENHUMA" }]);
            setLoadCustomers(false);
            return;
          }

          setCustomers(lista);
          setLoadCustomers(false);
        })
        .catch((error) => {
          console.log("deu algum erro", error);
          setLoadCustomers(false);
          setCustomers([{ id: "1", nomeFantasia: "" }]);
        });
    }

    loadCustomers();
  }, []);

  async function handleRegister(e) {
    e.preventDefault();
    await firebase
      .firestore()
      .collection("chamados")
      .add({
        created: new Date(),
        cliente: customers[customerSelected].nomeFantasia,
        clienteId: customers[customerSelected].id,
        assunto: assunto,
        status: status,
        observacao: observacao,
        userId: user.uid,
      })
      .then(() => {
        toast.success("Chamado criado com sucesso!");
        setObservacao("");
        setCustomerSelected(0);
      })
      .catch((err) => {
        toast.error("Ops, algo deu errado. tente novamente!");
        console.log(err);
      });
  }

  // assunto
  function handleChangeAssunto(e) {
    setAssunto(e.target.value);
  }

  // status
  function handleChangeStatus(e) {
    setStatus(e.target.value);
  }

  // troca de cliente
  function handleChangeCustomers(e) {
    // console.log("index do cliente selecionado", e.target.value);
    // console.log('cliente selecionado', customers[e.target.value]);
    setCustomerSelected(e.target.value);
  }

  return (
    <>
      <div>
        <Header />
        <div className="content">
          <Title name="Novo chamado">
            <FcPlus size={25} />
          </Title>
          {/* <div className="profileContainer"> */}
          <form className="formProfile" onSubmit={handleRegister}>
            <div className="form-control">
              <label>Cliente</label>
            </div>

            {loadCustomers ? (
              <input
                type="text"
                disabled={true}
                value="Carregando clientes..."
              />
            ) : (
              <select value={customerSelected} onChange={handleChangeCustomers}>
                {customers.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {item.nomeFantasia}
                    </option>
                  );
                })}
              </select>
            )}

            <div className="form-control">
              <label>Assunto</label>
            </div>
            <select value={assunto} onChange={handleChangeAssunto}>
              <option value="Suporte">Suporte</option>
              <option value="Visita Técnica">Visita Técnica</option>
              <option value="Financeiro">Financeiro</option>
            </select>

            <div className="status form-control">
              <label>Status</label>
            </div>
            <div>
              <input
                type="radio"
                name="status"
                value="Aberto"
                id="aberto"
                onChange={handleChangeStatus}
                checked={status === "Aberto"}
              />
              <label
                htmlFor="aberto"
                style={{ fontSize: "1em", fontWeight: "normal" }}
              >
                Aberto
              </label>
              <input
                type="radio"
                name="status"
                value="Progresso"
                id="progresso"
                onChange={handleChangeStatus}
                checked={status === "Progresso"}
              />
              <label
                htmlFor="progresso"
                style={{ fontSize: "1em", fontWeight: "normal" }}
              >
                Progresso
              </label>
              <input
                type="radio"
                name="status"
                value="Atendido"
                id="atendido"
                onChange={handleChangeStatus}
                checked={status === "Atendido"}
              />
              <label
                htmlFor="atendido"
                style={{ fontSize: "1em", fontWeight: "normal" }}
              >
                Atendido
              </label>
            </div>
            <div className="form-control">
              <label>Observação</label>
            </div>
            <textarea
              className="form-control"
              type="text"
              placeholder="Descreva aqui seu problema (opcional)"
              onChange={(e) => setObservacao(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
