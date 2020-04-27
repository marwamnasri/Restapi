import React, { Component } from 'react';
import Axios from 'axios';
class Editcontact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:"",
            email:"",
            phone:"",
            contact:[]
         }
    }
    componentDidMount(){
        Axios.get('http://localhost:4000/afficheprod').then(res=>this.setState({
            contact:res.data
        }))
        this.state.contact.map(e=>(e._id===this.props.match.params.id) &&
        this.setState({
            name:e.name,
            email: e.email,
            phone:e.phone

        })
          
        )
    }
    modifiercontact=()=>{
    Axios.put(`http://localhost:4000/modifyprod/`+ this.props.match.params.id,{name:this.state.name, email:this.state.email, phone:this.state.phone})
    }
    render() { 
        return ( <div className="edit">
            <input type="text" placeholder="name" onChange={(e)=>this.setState({
                name:e.target.value
            })} />
            <input type="text"  placeholder="email"onChange={(e)=>this.setState({
                email:e.target.value
            })} />
            <input type="text" placeholder="telephone"onChange={(e)=>this.setState({
                phone:e.target.value
            })} />
            <button onClick={this.modifiercontact}>Modifier</button>

        </div>
         );
    }
}
 
export default Editcontact ;