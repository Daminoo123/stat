import React, { Component } from 'react'
import '../App.css';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    }
    this.person={
      name:'Amine',
      job:'student',
      img : 'https://toppng.com/uploads/preview/happy-person-11545688398rslqmyfw4g.png'
    }
  }
    componentDidMount(){
      setInterval(() => {
        this.setState(prevstate=>({
          count:prevstate.count+0.5
        }))
        
      }, 1000);
    }
  render() {
    return (
      <div>
        <h2 className='name'>{this.person.name}</h2> 
        <h2 className='job'>{this.person.job}</h2>
        <img className='image' src={this.person.img} />
       <p className='count'>{this.state.count}</p> 

      </div>
    )
  }
}

