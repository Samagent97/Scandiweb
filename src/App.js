import styled  from 'styled-components';
import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation';
import Cardlist from './components/Card/Cardlist';
import Carousel from './components/Carousel/Carousel';


const ContainerList = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left:0rem;
  padding-right:0rem;


  align-items: center;
  &:hover {
    opacity: 1;
`


export default class App extends Component {
  render() {
    return (
      <div>

        <Navigation />
        <Carousel />
        <ContainerList>
        <Cardlist />
        <Cardlist />
        </ContainerList>
      </div>
      
    )
  }
}

