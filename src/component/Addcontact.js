import React, { Component } from 'react';
import Axios from 'axios';
class Addcontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:"",
            phone:"",
         }
    }
    ajoutcontact=()=>{
        Axios.post(`http://localhost:4000/addprod`,{...this.state}).catch(er=>console.log(er))
    }
    
    render() { 
        return ( <div className="form">
            <input type="text" placeholder="name" onChange={(e)=>this.setState({
                name:e.target.value
            })} />
            <input type="text"  placeholder="email"onChange={(e)=>this.setState({
                email:e.target.value
            })} />
            <input type="text" placeholder="telephone"onChange={(e)=>this.setState({
                phone:e.target.value
            })} />
            <button onClick={this.ajoutcontact}>Ajouter</button>

        </div> );
    }
}
 
export default Addcontact ;