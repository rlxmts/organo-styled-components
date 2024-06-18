import styled from "styled-components";

const Card = styled.div`
    width: 180px;
    text-align: center;
    `
    
const ContainerImg = styled.div`

    height: 60px;
    position: relative;
    border-radius: 20px 20px 0 0 ;
    img{
        width: 60px;
        border-radius: 50%;
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const ContainerTextos = styled.div`
 background-color: #FFF;
 padding: 3rem 1rem;
 border-radius: 0 0 20px 20px;

 h4, h5{
    font-size: 1.5rem;
    font-weight: 300;
    font-family: "Arial", sans-serif;
    }

h5{
    font-size: 1rem;
    margin-top: 1rem;
}
`

const Colaborador = ({cor, foto, nome, cargo, alt})=> {
    return(
        <Card>
            <ContainerImg style={ {backgroundColor : cor} } >
                <img src={foto} alt={alt}/>
            </ContainerImg>
            <ContainerTextos>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </ContainerTextos>
        </Card>
    )
}

export default Colaborador;