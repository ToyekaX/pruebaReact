import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Login from './components/Login';
import Listas from './components/Listas';
import { Tareas } from './ToDo.json';

console.log(Tareas);

class App extends Component{


    constructor (props){
        super(props);
        this.IniciarSecion = this.IniciarSecion.bind(this);
        this.CerrarSecion = this.CerrarSecion.bind(this);
        this.state = {isLoggedIn: false};
    }


    IniciarSecion(){
        this.setState({isLoggedIn: true});  
    }

    CerrarSecion(){
        this.setState({isLoggedIn: false});
    }

    

    render(){
        //Funcion login 
        //if true o false 

        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if(isLoggedIn){
            button = <Listas></Listas>
        } else {
            button = <Login></Login>
        }

        return(
            <div>     
            <nav className="navbar navbar-dark bg-dark">
                <h1 className="h1Titulo">Tareas</h1>                
                <button  onClick={ this.CerrarSecion}>Salir</button>
                <button  onClick={ this.IniciarSecion}>Entrar</button>
                
            </nav>     
                {button}               
            </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('root'));