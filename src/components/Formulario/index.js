import styled from "styled-components";
import CampoDeTexto from "../CampoDeTexto";
import { Botao } from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";

const Form = styled.form`
    background-color: #F2F2F2;
    width: 90%;
    max-width: 700px;
    margin: 3rem auto;
    border: 1px solid #DCDCDC;
    border-radius: 20px;
    padding: 3rem 1.5rem;
    box-shadow: 3px 3px 10px #0000004f;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`

const Formulario = (props)=> {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    
    function cadastrarColaborador(e){
        e.preventDefault();
        props.aoCadastrar({
            nome, 
            cargo, 
            imagem, 
            time
        })
    }
    
    return(
        <Form onSubmit={cadastrarColaborador}>
            <CampoDeTexto 
                label="Nome" 
                obrigatorio={true} 
                placeholder="Digite seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoDeTexto 
                label="Cargo" 
                obrigatorio={true} 
                placeholder="Digite seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoDeTexto 
                label="Imagem" 
                obrigatorio={true} 
                placeholder="https://..."
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} 
            />
            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                times={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>Criar Card</Botao>
        </Form>
    )
}

export default Formulario;