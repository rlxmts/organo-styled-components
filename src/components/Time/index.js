
import styled from "styled-components";
import Colaborador from "../Colaborador";

const SecaoTime = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.5rem;
    background-color: #e2ffe2;
`
const Titulo = styled.h2`
    font-size: 2.5rem;
    font-weight: 300;
    position: relative;

    &:before{
        content: '';
        width: 25px;
        height: 4px;
        background-color:${(props) => props.corborda};
        display:block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
    }
`
const ColaboradoresBox = styled.div`
    display:flex;
    justify-content: center;
    align-itens: center;
    gap: 2rem;
    flex-wrap: wrap;

`

const Time = ({titulo, corSecundaria, corPrimaria, colaboradores}) => {
    return(
        (colaboradores.length > 0) ? <SecaoTime style={ {backgroundColor : corSecundaria} }>
            <Titulo corborda={corPrimaria}>{titulo}</Titulo>
            <ColaboradoresBox>
                {colaboradores.map( colaborador => 
                    < Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        alt={colaborador.nome}
                        foto={colaborador.imagem}
                        cargo={colaborador.cargo}
                        cor={corPrimaria}
                    />
                )}
            </ColaboradoresBox>
        </SecaoTime>
    : ''
    )
}

export default Time;