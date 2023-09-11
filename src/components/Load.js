import React, { Component } from 'react'
import loading from "./310.gif";

export class Load extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img src={loading} alt='loading'/>
        
      </div>
    )
  }
}

export default Load
