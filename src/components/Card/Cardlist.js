import React, { Component } from 'react'
import styled from 'styled-components';
import imageData  from './imagedata';

const CardView = styled.section`
display:flex;
padding:rem;
 padding-left:14rem;
padding-right:0rem;
width: 50rem;
overflow-x: ;

padding: 0px;

 
`
const Card = styled.div `
background-color: #8D8F9A;
justify-content:center;
width: 10rem;
height: 10rem;
margin:0.3rem;
border-radius: 0.44rem;
padding: 4rem;

`

// const Cardlist = (props) =>{
//   const cardComponent = imageData.map((user,i)=>{
//     return (
//       <Card 
//         key={imageData.id}
//         image ={imageData.image}



//       />
//     )
//   })
// }

import React, { Component } from 'react'

export default class Cardlist extends Component {
  render() {
    return (
      <>
        <div className='Card-container'>
          <div className='Card-body'>
            
          </div>
          
          
        </div>

      </>
    )
  }
}



// export default Cardlist