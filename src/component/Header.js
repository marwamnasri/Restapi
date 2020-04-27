import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
   <Link to='/Contact' className="btn1" ><span>Afficher Liste</span></Link>
   <Link to='/Ajout' className="btn2"><span>Ajouter contact</span></Link>
        </div> );
    }
}
 
export default Header ;