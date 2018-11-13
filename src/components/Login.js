import React, { Component } from 'react';
import ReactDom from 'react-dom';


class Login extends Component{

    constructor(props, context){
        super(props, context)
    }

    render(){
        return(
            <div>
                <form>
                    <div ClassName="form-group">
                        <input type="text" className="form-control" id="username" placeholder="Correo electronico"/>
                    </div>
                    <div class="form-group">
                        <input type="password" ClassName="form-control" id="pwd" placeholder="Contraseña"/>
                    </div>
                    <div class="form-group form-group-btn">
                        
                        <button ClassName="btn btn-success btn-lg"  onClick={ this.IniciarSecion}>Validar</button>
                        
                    </div>
                </form>
            </div>
        );

    }

}


export default Login;