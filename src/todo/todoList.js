import React, { Component } from 'react'

export default class todoList extends Component {
  render() {
    return (
        <ul>
        {
        this.props.items.map((value, index)=>{
            return (
           <React.Fragment key={index}>
           <li>{value}</li>     
           </React.Fragment>
           )
            })
        }
        </ul> 
        );
  }
}
