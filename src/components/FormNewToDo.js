import React, { Component } from 'react';


class FormNewToDo extends Component{

    constructor(){
        super();
        this.state = {
            title: '',
            resposable: '',
            descripcion: '',
            prioridad: 'Baja'
        };
        this.FuncionValidar = this.FuncionValidar.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this);
    }

    FuncionValidar(e) {
        console.log(e.target.value, e.target.name)
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })

        console.log(this.state)

        if(e.target.value == ""){
            console.log('Vacio')
        }
        else{
        }
        
    }

    handelSubmit(e){
        e.preventDefault();
        this.props.OnAddTodo(this.state);
        console.log(this.state);
    }

    render()
    {
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handelSubmit}>
                    <div className="form-gorup">
                        <input
                            type="text"
                            name="title"
                            onChange={ this.FuncionValidar}
                            className="form-control"
                            placeholder="Titulo"
                        />                        
                    </div>
                    <div className="form-gorup">
                        <input
                            type="text"
                            name="resposable"
                            onChange={ this.FuncionValidar}
                            className="form-control"
                            placeholder="Responsable"
                        />                       
                    </div>

                    <div className="form-gorup">
                         <input
                            type="text"
                            name="descripcion"
                            onChange={ this.FuncionValidar}
                            className="form-control"
                            placeholder="Descripcion"
                        />                  
                    </div>
                    <div>
                        <select
                            name="prioridad"
                            className="form-control"
                            onChange={ this.FuncionValidar}                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        );
    }

}

export default FormNewToDo;