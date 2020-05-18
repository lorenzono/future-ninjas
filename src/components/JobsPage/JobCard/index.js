import React from 'react'
import styled from 'styled-components'
import JobImg from '../../../img/job-offer.png'



const DivisionCard = styled.div `
    background: #FAFAFA;
    width: 70%;
    height: 40vh;
    box-shadow: 0 0.2em 0.3em rgba(0, 0, 0, 0.3);
`

const ImgJob = styled.img `
    width: 100%;
    height: 60%;
`

const Title = styled.h3 `
    margin: 0;
    margin-left: 0.7em;
    height: 7%;
    @media (min-width: 1600px) {
        margin-top: 1%;
    }
    @media (min-width: 1920px) {
        font-size: 18pt;
    }
    @media (min-width: 2560px) {
        margin-top: 3%;
        font-size: 24pt;
    }
`

const Subtitle = styled.p `
    margin: 0;
    margin-left: 0.9em;
    height: 10%;
    @media (min-width: 1920px) {
        font-size: 15pt;
    }
    @media (min-width: 2560px) {
        font-size: 18pt;
    }
`

const AceptButton = styled.button `
    background-color: #8E6CD2;
    border-radius: 25px;
    border: none;
    color: #FFFFFF;
    width: 60%;
    height: 14%;
    display: block;
    margin: 0 auto;
    margin-top: 4%;
    @media (min-width: 1920px) {
        font-size: 15pt;
        border-radius: 200px;
    }
    @media (min-width: 2560px) {
        font-size: 18pt;
        border-radius: 200px;
        height: 12%;
        margin-top: 7%;
    }
`



export default class JobCard extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      price: '',
    }
  }


  render(){
    return (
      <DivisionCard>
        <ImgJob src={JobImg}></ImgJob>
        <Title>{this.props.title}</Title>
        <Subtitle>R${this.props.price}</Subtitle> 
        <AceptButton>CANDIDATAR-SE</AceptButton>
      </DivisionCard>
    )
  }
}