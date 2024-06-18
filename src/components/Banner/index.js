import styled from "styled-components";

const Imagem = styled.img`
    width: 100%;
`

const Banner = ()=> {
    return(
            <Imagem src="/img/banner.png" alt="banner do site organo."/>
    )
}

export default Banner;