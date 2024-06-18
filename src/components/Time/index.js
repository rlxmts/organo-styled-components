
import styled from "styled-components";

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
const Colaboradores = styled.div`
`

const Time = ({titulo, corSecundaria, corPrimaria}) => {
    return(
        <SecaoTime style={ {backgroundColor : corSecundaria} }>
            <Titulo corborda={corPrimaria}>{titulo}</Titulo>
            <Colaboradores>
                
            </Colaboradores>
        </SecaoTime>
    )
}

export default Time;