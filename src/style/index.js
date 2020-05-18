import React from 'react'
import styled from 'styled-components'

// Arquivo de configuração de estilo do projeto
// Criado com a intenção de modificar as características ajustando apenas as variáveis que não são elementos que serão exportados


// Configurações globais
// Área útil: parte centralizada que contém o conteúdo da página. Ela é relativa ao tamanho da página. Quanto maior o tamanho da página, menor pode ser a proporção da área útil,
// que dispõe de mais espaço para ocupar
// Vi sobre calc. Ex: height: calc(100vh - 64px);

const smallDivisionWidth = '80%' // Tamanho da área útil da página quando a largura da janela é maior que mediaQueryMaxWidth
const largeDivisionWidth = '90%' // Tamanho da área útil quando a largura é menor ou igual a mediaQueryMaxWidth
const mediaQueryMaxWidthOne = 900 // Largura máxima, em pixels, para manter o tamanho da área útil maior
const mediaQueryMaxWidthTwo = 768


const primary = '#8864D0'
const primaryVariant = '#6202EE'
const secondary = '#b9c386'
const secondaryVariant = '#bdc97d'
const black = ''
const blackVariant = ''
const white = '#f5f3fb'
const whiteVariant = ''

function pickColor(color) {
  switch (color) {
    case 'primary':
    default:
      return primary
    case 'secondary':
      return secondary
    case 'black':
      return black
    case 'white':
      return white
  }
}

function enhanceColor(color) {
  switch (color) {
    case 'primary':
    default:
      return primaryVariant
    case 'secondary':
      return secondaryVariant
    case 'black':
      return blackVariant
    case 'white':
      return whiteVariant
  }
}




// Configuração do Header

const headerHeight = 60 // Altura, em pixels, da barra superior

export const Header = styled.header` // Área total
  height: ${headerHeight}px;
  width: 100%; // Requisito para o Header ocupar horizontalmente toda a barra superior
  background-color: ${props => pickColor(props.color)};
  z-index: 1;
    // Por algum motivo, o transform cria mais uma camada, que deixa o { Button } na frente do Header. O z-index impede isso. Mensagem do Chrome ao utilizar transform:
    // "Layer was separately composited because it could not be squashed." 
  position: fixed; // Fixa o Header sempre no topo, mas é necessário pular o espaço
`


export const HeaderDivision = styled.div` // Área útil do Header
  height: 100%; // Requisito para utilizar toda a área disponível verticalmente se a imagem não ocupar toda a área
  width: ${smallDivisionWidth};
  margin: auto; // Centraliza a área útil
  display: flex; // Permite configurações da flexbox
  justify-content: space-between; // Separa o logo do bloco de itens de navegação

  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    width: ${largeDivisionWidth};
  }
`


export const HeaderNavItems = styled.nav` // Bloco que contém os itens de navegação
  display: ${props => props.display ? 'flex' : 'none'}; // Permite dispor cada item na horizontal

  @media (max-width: ${mediaQueryMaxWidthTwo}px) {
    display: ${props => props.display ? 'none' : 'flex'};
  }
`


export const NavMenu = styled.nav`
  position: fixed;
    // Parece que absolute fica em cima do fixed, não importa o z-index. Eu estava usando absolute com top 0 para top 100%.
    // Edit: o z-index "não importava" porque essa div era filha do header. Então coloquei como fixed filha do body.
  top: ${props => props.show ? headerHeight : -90}px;
  right: 0;
  transition: top 0.5s;
  background-color: ${props => pickColor(props.color)};
  display: ${props => props.display ? 'flex' : 'none'}; // Permite dispor cada item na horizontal
  flex-direction: column;
  border-bottom-left-radius: 15px;

  @media (max-width: ${mediaQueryMaxWidthTwo}px) {
    display: ${props => props.display ? 'none' : 'flex'};
  }
`


const navItemsPadding = (headerHeight / 4) + 'px'
const headerItemsPadding = '0 1.5vw' // Distância entre os itens de navegação na barra
const isSelected = props => props.selected // Não sei o mecanismo, mas, por tentativa e erro, essa função permite que apenas os itens não escolhidos ativem o :hover e :focus

export const HeaderLink = styled.div` // Item de navegação (link)
  // height: 100%; // Requisito para utilizar toda a área disponível verticalmente
  display: flex; // Permite configurações da flexbox
  color: ${props => props.selected ? 'green' : pickColor(props.color)};
  font-weight: bold; // Torna as palavras dos itens de navegação em negrito
  text-transform: uppercase;
  padding: ${props => props.padding ? navItemsPadding : headerItemsPadding};
  cursor: pointer;

  ${isSelected}:hover, ${isSelected}:focus {
    color: ${props => enhanceColor(props.color)};
  }
`


const logoHeight = 50 // Altura do logo
const logoPadding = (headerHeight - logoHeight) / 2 // Centraliza o logo verticalmente

export const NavPicture = styled.img` // Imagem do logo
  height: ${logoHeight}px;
  padding: ${logoPadding}px 0;
`


export const NavTitle = styled.div` // Título dos itens de navegação
  text-align: center; // Centraliza o texto na horizontal caso o texto quebre de linha, mas essa quebra não é recomendada!
  align-self: center; // Centraliza na vertical
`


const NavIconSize = headerHeight / 3
export const viewBox = '0 0 512 512'

export const NavSvg = styled.svg`
  width: ${NavIconSize}px;
  padding: 0 ${NavIconSize}px;
  cursor: pointer;
  fill: ${props => pickColor(props.color)};

  :hover, :focus {
    fill: ${props => enhanceColor(props.color)};
  }
`

// Elaboração do ícone SVG

const pathArray = [0, 1, 2]
const pathStart = 'm464.883 '
const pathConstant = 64.2
const pathVariable = 144.6
const pathEnd = '67h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z'
export const NavIcon = pathArray.map(path => <path key={path} d={pathStart + (pathConstant + pathVariable * path) + pathEnd} />)


export const Space = styled.div` // Espaço necessário para que os componentes fiquem embaixo da barra superior, que está fixada no topo
  height: ${headerHeight}px; // Altura necessária para passar a barra superior
`




// Configuração do Main

export const Main = styled.main`
  background-color: ${props => pickColor(props.color)};
`


export const MainDivision = styled.div`
  width: ${smallDivisionWidth};
  margin: auto;
  padding: 3vh 0;
  display: flex;

  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    width: ${largeDivisionWidth};
    flex-direction: column;
  }
`


export const MainSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    width: 100%;
    padding-block-end: 2vh;
    text-align: center;
  }
`


export const MainHeading = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding-block-end: 1vh;
`


export const MainParagraph = styled.div`
  font-size: 20px;
`


export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  max-width: 95%;
  height: 50px;
  background-color: ${props => pickColor(props.backgroundColor)};
  margin: 10px 20px;
  color: ${props => pickColor(props.color)};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 100px;
  cursor: pointer;
  
  :hover, :focus {
    background-color: ${props => enhanceColor(props.backgroundColor)};
    transform: scale(1.05);
  }

  :active {
    transform: scale(1);
  }

  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    align-self: center;
  }
`


export const ButtonImage = styled.img`
  height: 80%;
  margin-left: 0.5vw;
`


export const PictureSection = styled.section`
  width: 50%;
  display: flex;
  
  @media (max-width: 900px) {
    width: 100%;
  }
`


export const MainPicture = styled.img`
  width: 80%;
  margin: auto;
  max-width: 500px;
`




// Tips Section

export const Section = styled.section`
	background-color: #141414;
`

export const SectionDivision = styled.div`
	width: ${smallDivisionWidth};
	margin: auto;
	padding: 3vh 0;
	display: flex;
  flex-direction: column;
  
  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    width: ${largeDivisionWidth};
  }
`

export const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
	color: ${props => enhanceColor(props.color)};
	padding-block-end: 2vh;
	text-align: center;
`


export const CardDivision = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Work Sans", sans-serif;
  
  @media (max-width: ${mediaQueryMaxWidthTwo}px) {
    flex-direction: column;
  }

`


export const Card = styled.div`
  max-width: 200px;
  padding: 2.25%;
  margin: 0 2vw;
  background-color: #262626;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  // flex-basis: 100%;
  
  @media (max-width: ${mediaQueryMaxWidthTwo}px) {
    max-width: 600px;
    flex-direction: row;
    margin: 1vh auto;
  }

`


export const CardPictureDiv = styled.div` // Não consigo lidar com responsividade e manter as imagens quadradas
  width: 100%;
  background-color: #363636;
  display: flex;
  justify-content: center;
  margin-block-end: 2vh;

  ::after {
    content: "";
    padding-top: 100%;
  }

  @media (max-width: ${mediaQueryMaxWidthTwo}px) {
    display: none;
  }
`


export const CardPicture = styled.img`
  max-width: 90%;
`


export const CardTitle = styled.div`
  font-weight: bold;
  color: ${props => enhanceColor(props.color)};
  text-align: center;
  padding-block-end: 1vh;
`


export const CardParagraph = styled.div`
  color: white;
  text-align: justify;
`







export const Footer = styled.footer`
  background-color: ${props => pickColor(props.color)};
`

export const FooterDivision = styled.div`
  width: ${smallDivisionWidth};
	margin: auto;
	padding: 3vh 0;
  font-weight: bold;
	display: flex;
  justify-content: space-around;
  
  @media (max-width: ${mediaQueryMaxWidthOne}px) {
    width: ${largeDivisionWidth};
  }
`


export const FooterTitle = styled.div`
  font-size: 20px;
  letter-spacing: 0.25px;
  color: ${props => pickColor(props.color)};
	padding-block-end: 1vh;
`


export const FooterLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${props => pickColor(props.color)};
  align-items: flex-start;
  padding: 1vh 0;
  cursor: pointer;
`


export const ExternalLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 1vh 0;

  
  @media (max-width: 480px) {
    justify-content: center;
  }
`


export const Logo = styled.img`
  width: 40px;
  height: 40px;
`

export const Span = styled.span`
  margin-left: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`


export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  padding-bottom: 5px;
`

export const CheckboxLabel = styled.label`
  font-weight: normal;
  padding-bottom: 5px;

  :hover {
    color: ${enhanceColor('primary')}
  }

  ::before {
    content: '⭕';
  }
`

const generalInput = `
  width: 100%;
  border-radius: 20px;
  color: ${enhanceColor('primary')};
  background-color: ${pickColor('white')};
  border: none;
  font: 400 14px Ubuntu;
  padding: 8px;
  display: block;
`

export const Input = styled.input`
  ${generalInput}
`

export const TextArea = styled.textarea`
  ${generalInput}
`

export const HiddenCheckbox = styled.input`
  appearance: none;
  margin: 0;

  :checked ~ ${CheckboxLabel}::before {
    content: '✔️';
  }
`

export const InputDiv = styled.div`
  margin-bottom: 20px;
`