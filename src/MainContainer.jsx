import React from 'react'; 
import { Component } from 'react'
import ContentContainer from './ContentContainer.jsx'
const endpoint = 'https://dog.ceo/api/breeds/image/random/25'

class MainContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: [] 
    };
  };

  componentDidMount() {
    return fetch(endpoint)
     .then(response => response.json())
     .then(jsonData => {
       const dogList = jsonData.message
       this.setState({ dogs: dogList })
     })
     .catch(error => console.log(error)) 
   }; 

  

render(props){ 
  
  const dogImages = this.state.dogs.map((item, index) => {
    return <img key={index} src={item} alt={""}></img>
  }); 

   return( 
     <div> 
      <ContentContainer 
        className="Content-Container" 
        dogImages={dogImages} 
      /> 
     </div> 
    )
  };
}; 




export default MainContainer; 