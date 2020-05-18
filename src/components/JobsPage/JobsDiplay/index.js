import React from 'react'
import styled from 'styled-components'
import JobCard from '../JobCard/index'
import axios from 'axios'

const MainDivision = styled.div`
  background-color: #D4C7EB;
  display: flex;
  height: fit-content;
  padding: 1em;
`

const FilterArea = styled.div`
  background-color: #F5F3FB;
  width: 20%;
  height: 86.5vh;
  border-radius: 15px;
  margin-right: 1em; 
  display: flex;
  justify-content: initial;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1600px) {
    height: 87.5vh;
  }
  @media (min-width: 1920px) {
    height: 88vh;
  }
  @media (min-width: 2560px) {
    height: 88.9vh;
  }
`

const JobsArea = styled.div`
  background-color: #F5F3FB;
  width: 80%;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  padding: 1em 0.5em;
  @media (min-width: 1600px) {
    height: 83.9vh;
  }
  @media (min-width: 1920px) {
    height: 85vh;
  }
  @media (min-width: 2560px) {
    height: 86vh;
    font-size: 18pt;
  }
`

const Title = styled.h4`
  text-align: center;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const StyledLabel = styled.label`
  margin-bottom: 0.3em;
`

const StyledInput = styled.input`
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  text-indent: 0.5em;
  margin-bottom: 1em;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const StyledSelect = styled.select`
  border: 1px solid #D4D4D4;
  box-sizing: border-box;
  border-radius: 6px;
  height: 2.5em;
  width: 100%;
  text-indent: 0.5em;
  margin-bottom: 1em;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

const DivisionSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  @media (min-width: 1920px) {
    font-size: 15pt;
  }
  @media (min-width: 2560px) {
    font-size: 18pt;
  }
`

export default class JobsDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.alphaAsc = 'ALPHA_ASC'
    this.alphaDesc = 'ALPHA_DESC'
    this.priceAsc = 'PRICE_ASC'
    this.priceDesc = 'PRICE_DESC'
    this.dateAsc = 'DATE_ASC'
    this.dateDesc = 'DATE_DESC'
    this.state = {
      minValue: '',
      maxValue: '',
      title: '',
      description: '',
      allJobs: [],
      order: this.alphaAsc
    }
  }

  componentDidMount() {
    this.getAllJobs()
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get('https://us-central1-future-apis.cloudfunctions.net/futureNinjas/jobs')
      this.setState({ allJobs: res.data.jobs })
    } catch {
      alert('erro')
    }
  }

  sortJobs = (a, b) => {
    switch (this.state.order) {
      case (this.alphaAsc):
      default:
        return a.title < b.title ? -1 : 1
      case (this.alphaDesc):
        return a.title > b.title ? -1 : 1
      case (this.priceAsc):
        return a.value - b.value
      case (this.priceDesc):
        return b.value - a.value
      case (this.dateAsc):
        return a.dueDate - b.dueDate
      case (this.dateDesc):
        return b.dueDate - a.dueDate
    }
  }

  handleAllJobs = jobs => (
    jobs
      .filter(job => Number(job.value) >= this.state.minValue)
      .filter(job => this.state.maxValue ? Number(job.value) <= this.state.maxValue : true)
      .filter(job => job.title.toLowerCase().includes(this.state.title.toLowerCase()))
      .filter(job => job.description.toLowerCase().includes(this.state.description.toLowerCase()))
      .sort(this.sortJobs)
  );

  render() {
    return (
      <MainDivision>
        <FilterArea>
          <Title>FILTROS</Title>
          <DivisionSearch>
            <StyledLabel>Valor Mínimo</StyledLabel>
            <StyledInput name="minValue" type='number' placeholder='R$ 00,00' value={this.state.minValue} onChange={this.handleInputChange} />
            <StyledLabel>Valor Máximo</StyledLabel>
            <StyledInput name="maxValue" type='number' placeholder='R$ 1.000,00' value={this.state.maxValue} onChange={this.handleInputChange} />
            <StyledLabel>Título</StyledLabel>
            <StyledInput name="title" placeholder='Título' value={this.state.title} onChange={this.handleInputChange} />
            <StyledLabel>Descrição</StyledLabel>
            <StyledInput name='description' placeholder='Digite a descrição' value={this.state.description} onChange={this.handleInputChange} />
            <StyledLabel>Ordenar por:</StyledLabel>
            <StyledSelect name="order" value={this.state.order} onChange={this.handleInputChange}>
              <option value={this.alphaAsc}>Alfabética - Crescente</option>
              <option value={this.alphaDesc}>Alfabética - Decrescente</option>
              <option value={this.priceAsc}>Preço - Crescente</option>
              <option value={this.priceDesc}>Preço - Decrescente</option>
              <option value={this.dateAsc}>Prazo - Crescente</option>
              <option value={this.dateDesc}>Prazo - Decrescente</option>
            </StyledSelect>
          </DivisionSearch>
        </FilterArea>
        <JobsArea>
          {this.handleAllJobs(this.state.allJobs)
            .map(job => <JobCard key={job.id} title={job.title} price={job.value} />)
          }
        </JobsArea>
      </MainDivision>
    )
  }
}
