import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../../img/logomarca.png'
import LogoType from '../../../img/logotipo.png'



const Header = styled.div `
    width: 100%;
    height: 9vh;
    background-color: #F5F3FB;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImgLogo = styled.img `
    width: 3em ;
    height: 7vh;
    @media (min-width: 1600px) {
        width: 4em ;
        height: 7vh;
    }
    @media (min-width: 2560px) {
        width: 6em ;
        height: 7vh;
    }
`

const TypeLogo = styled.img `
    width: 6em ;
    height: 7vh;
    @media (min-width: 1600px) {
        width: 7em ;
        height: 7vh;
    }
    @media (min-width: 1920px) {
        width: 8em ;
        height: 7vh;
    }
    @media (min-width: 2560px) {
        width: 12em ;
        height: 7vh;
    }
`

const DivisionLogo = styled.div `
    display: flex;
    align-items: center;
    justify-content: start;
    margin-left: 4em;
`

const BotaoCadastro = styled.button`
    height: 5vh;
    width: 16.7%;
    font-weight: bold;
    color: #F5F3FB;
    background-color: #8E6CD2;
    border-radius: 200px;
    text-align: center;
    text-transform: uppercase;
    border: none;
    margin-right: 5.7em;
`


function HeaderJobsPage(props) {
  return (
    <Header>
      <DivisionLogo onClick={() => {props.changePage('HOME_PAGE')}}>
        <ImgLogo src={LogoImg}></ImgLogo>
        <TypeLogo src={LogoType}></TypeLogo>
      </DivisionLogo>
      <BotaoCadastro onClick={() => {props.changePage('SEARCH_PAGE')}}>Criar Serviços</BotaoCadastro>
    </Header>
  )
}



export default HeaderJobsPage