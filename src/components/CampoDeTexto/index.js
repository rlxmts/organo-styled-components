import styled from "styled-components";

const ContainerCampo = styled.div`

    label{
        display:block;
        font-family: "arial", sans-serif;
        font-size: 1rem;
        margin-bottom: .5rem;
        font-weight: 600;
    }
    
    input{
        padding: 1rem;
        border: none;
        outline: none;
        width:100%;
        border-radius: 5px;
    }
`

const CampoDeTexto = ({label, placeholder, obrigatorio, valor, aoAlterado})=> {  

    const aoDigitado = (e)=> {
        aoAlterado(e.target.value);
    }
    return(
        <ContainerCampo>
            <label>{label}</label>
            <input 
                value={valor}
                onChange={aoDigitado}
                type="text" 
                placeholder={placeholder} 
                required={obrigatorio} 
            />
        </ContainerCampo>
    )
}

export default CampoDeTexto;