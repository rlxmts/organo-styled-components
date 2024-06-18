import styled from "styled-components";
import CampoDeTexto from "../CampoDeTexto";
import { Botao } from "../Botao";
import ListaSuspensa from "../ListaSuspensa";

const Form = styled.form`
    background-color: #F2F2F2;
    width: 100%;
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

const Formulario = ()=> {

    function cadastrarColaborador(e){
        e.preventDefault();
    }

    return(
        <Form onSubmit={cadastrarColaborador}>
            <CampoDeTexto label="Nome" obrigatorio={true} placeholder="Digite seu nome" />
            <CampoDeTexto label="Cargo" obrigatorio={true} placeholder="Digite seu cargo" />
            <CampoDeTexto label="Imagem" obrigatorio={true} placeholder="https://..." />
            <ListaSuspensa />
            <Botao>Criar Card</Botao>
        </Form>
    )
}

export default Formulario;