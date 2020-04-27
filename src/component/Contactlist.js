import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
class Contactlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact:[{name:"",
            email:"",
            phone:""}
        ]
          }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/afficheprod').then(res=>this.setState({
            contact:res.data
        })).catch(err=>console.log(err))
        console.log(this.state.contact)
    }
    
    
    RemoveContact=(id)=>{
        Axios.delete('http://localhost:4000/deleteprod/'+id).catch(err=>console.log(err))
    }
    render() { 
        return ( <div className="bloc">
            {this.state.contact.map((el)=><div className="contact" key={el.id}>
        <span>NAME={el.name}</span>
        <span>EMAIL={el.email}</span>
        <span>PHONE NUMBER={el.phone}</span>
        <div>
            <Link to={`/edit/${el._id}`}>Edit</Link>
            <button onClick={()=>this.RemoveContact(el._id)}>Delete</button>
        </div>
            </div>)}

            </div>
         );
    }
}
 
export default Contactlist ;