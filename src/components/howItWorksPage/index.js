import React, { Component } from 'react'
import LogoFutureNinja from '../../img/logo.png'
import styled from 'styled-components'



const PageDivision= styled.div `
   display: flex;
   font-family: 'Roboto';
   text-align: center;
`

const LogoBanner = styled.img `
   width: 400px;
   height: 350px;
   margin: 2vw 4vw;
`

const Banner= styled.section `
   display: flex;
   height: 53vh;
   width: 100%;
   background-color: #F5F3FB;

   @media (min-width: 1290px) {
      height: 30%;
   }
`

const BotaoServicos = styled.button `
   position: absolute;
   left: 62vw;
   top: 1.99vh;
   height: 4.9vh;
   width: 16.5%;
   border: none;
   background-color: #F5F3FB;
   border-radius: 200px;
   color: #8E6CD2; 
   font-style: normal;
   font-weight: bold;
   text-align: center;
   text-transform: uppercase;

   &:hover {
   background-color: #C2C1C7;
   }
`

const BotaoCadastro = styled.button `
   position: absolute;
   right: 5vw;
   top: 1.99vh;
   height: 4.9vh;
   width: 16.5%;
   font-weight: bold;
   color: #F5F3FB;
   background-color: #8E6CD2;
   border-radius: 200px;
   text-align: center;
   text-transform: uppercase;
   border: none;
`

const TextoCard = styled.button `
   border: none;
   background-color: #DFD8E9;
   color: #8E6CD2; 
   position: absolute;
   height: 38px;
   width: 15vw;
   left: 9vw;
   bottom: 21.8vw;
   font-style: normal;
   font-weight: 600;
   font-size: 17px;
   line-height: 16px;
   text-align: center;
   letter-spacing: 0.45px;
   border-radius: 3px;
   text-transform: uppercase;
`

const Footer = styled.footer `
   height: 40px;
   background-color: #F5F3FB;
   display: flex;
   width: 100%;
   position: fixed;
   bottom: 0;
` 

const Logos = styled.section `
   display: flex;
   position: absolute;
   left: 40%;
   bottom: 3vw;
   margin: 1vw 1vw 1vw 1vw;
`

const BlocoTexto = styled.section `
   position: absolute;
   left: 9vw;
   width: 80vw;
   height: 11vw;
   bottom: 8vw;
   padding: 3px;
   margin-bottom: 20px;
   margin-top: 10px;
   background-image: linear-gradient(white, #F5F5F5);
   display: flex;
   justify-content: center;
   align-items: center;
`

const Texto = styled.p`
   color: #404040;
   font-weight: 550;
   font-size: 17px;
   font-style: regular;
   text-align: justify;
   padding: 5px;
   margin-left: 6px;
   margin-right: 6px;
`

const Logo = styled.img `
    width: 60px;
    height: 60px;
    margin-right: 0.2em;
`

const LinkAndName = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Link = styled.a `
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    
    &:active {
        color: red;
    }

    &:focus {
        color: red;
    }

    &:link{
        color: #ffffff;
    }

    &:visited {
        color: #ffffff;
    }
`

class HowItWorksPage extends Component {  
  constructor(props){
    super(props)

    this.state = {
    }
  }


  render() {
    return (
      <PageDivision>
        <BotaoServicos onClick={() => {this.props.changePage('JOBS_PAGE')}}> Encontrar Serviços </BotaoServicos>
        <BotaoCadastro onClick={() => {this.props.changePage('SEARCH_PAGE')}}> Criar Serviços</BotaoCadastro>
        <Banner>
          <LogoBanner onClick={() => {this.props.changePage('HOME_PAGE')}} src={LogoFutureNinja}/>
        </Banner>
        <TextoCard> Como Funciona? </TextoCard>
        <Logos>
          {/* <Link href="https://www.facebook.com/">
               <LinkAndName>
                  <Logo src={require('../../img/facebook.png')} />
               </LinkAndName>
            </Link>
            <Link href="https://www.instagram.com/">
               <LinkAndName>
                  <Logo src={require('../../img/instagram.png')} />
               </LinkAndName>
            </Link>
            <Link href="https://www.gmail.com/">
               <LinkAndName>
                  <Logo src={require('../../img/logoEmail.png')} />
               </LinkAndName>
            </Link>
            <Link href="https://www.twitter.com/">
               <LinkAndName>
                  <Logo src={require('../../img/twitter.png')} />
               </LinkAndName>
            </Link> */}
        </Logos>
        <BlocoTexto> 
          <Texto>Sabemos o quanto é difícil achar um profissional de confiança para desenvolver serviços que não temos muito domínio. Assim nasce a Future Ninjas com a proposta de facilitar o encontro da tarefa e a resolução: você e um profissional ninja. Você não precisa se preocupar com nada: basta inscrever o seu serviço e um dos nossos ninjas entrará em contato em até 24hrs. O agendamento e pagamento será feito tudo dentro da nossa plataforma garantindo mais segurança para ambas as partes. E sempre ao final do serviço não se esqueça de avaliar seu ninja.</Texto>
        </BlocoTexto>
        <Footer/>
      </PageDivision>
    )}
}