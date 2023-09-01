import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
    const [atividade, setAtividade] = useState( );
    const [lista, setLista] =  useState ([]);
    const [identidade, setIdentidade] = useState(1);

    const salvar = (e) =>{
        e.preventDefault();
        setLista([...lista, {
            atividade : atividade
        }]);
        setIdentidade(identidade + 1)
        alert("lalala :P")
        console.log(lista)
    };
    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>
            <form onSubmit={salvar}>
                <input type="text" onChange={(e)=>
                {setAtividade(e.target.value)}}/>
                <button> bleh </button>
            </form>
            {lista.map((ativ)=>
            <div key={ativ.identidade}>
                <p>{ativ.atividade}</p>
            </div>
            )}
        </div>
    );
}