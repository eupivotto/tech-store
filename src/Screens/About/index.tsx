import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/Navbar"

import { ContainerBody, ContainerInfo } from "./styles"



export const About = () => {
    return(
        <>
        <NavBar/>
        <ContainerBody>

        <ContainerInfo>
        <h1>Sobre Nós</h1>
        <p>Na Tech Store, estamos apaixonados por tecnologia e tudo o que ela pode oferecer para tornar nossas vidas mais fáceis, conectadas e divertidas. Somos uma loja online especializada em produtos da área tech, oferecendo uma ampla variedade de gadgets e dispositivos de última geração para atender às suas necessidades tecnológicas.
        Nossa missão é proporcionar a melhor experiência de compra para entusiastas de tecnologia, oferecendo produtos de alta qualidade das marcas mais renomadas do mercado. Quer você seja um aficionado por jogos, um profissional em busca de dispositivos de alto desempenho ou alguém que simplesmente aprecia a inovação, aqui na Tech Store, temos algo especial para cada um.</p>
        </ContainerInfo>

        </ContainerBody>
        <Footer />
        </>
    )
}