import React, { Component } from 'react';
import ReactDom from 'react-dom';

import '../index.css';

import FormNewToDo from './FormNewToDo';
import NTareas from './NTareas';
import { Tareas } from '../ToDo.json';

console.log(Tareas);

class Listas extends Component{

    constructor(){
        super();
        this.state = {
            Tareas
        };
        this.AgregarTarea = this.AgregarTarea.bind(this);
    }

    AgregarTarea(tarea){
        this.setState({
            Tareas: [...this.state.Tareas, tarea]
        })
    }

    EliminarTarea(index){
        if(window.confirm('Desea eliminar esta tarea')){
            this.setState({
                Tareas: this.state.Tareas.filter((e, i) => {
                    return i !== index
                })
            })
        }
    }

    CerrarSecion(){
        window.location="./Login.html";
        //this.props.history.push('https://www.youtube.com/');         
    }

    render(){
        //Funcion login 
        //if true o false 

        const VariableTaresa = this.state.Tareas.map((tarea, i) => {

            return(
                <div className="col-md-4" key={i}>
                    <div className="card">
                        <div className="card-header">
                            <h1 className="h1Titulo2">{ tarea.title }</h1>
                            <p className="badge2"> { tarea.prioridad } </p>
                        </div>
                        <div className="card-body"> 
                            { tarea.descripcion }
                        </div>  
                        <div className="classnombre">
                            { tarea.resposable }
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={ this.EliminarTarea.bind(this, i) }>Eliminar</button>
                        </div>
                    </div>
                </div>
            )  
            
        })

        return(
            <div>                
                

                <div className="badge">
                    <NTareas AtributoTareas={ this.state.Tareas.length }></NTareas>
                </div>   

                <div>
                    <FormNewToDo OnAddTodo={ this.AgregarTarea }></FormNewToDo>
                </div>             
                

                <div className="container">
                    <div className="row mt-4">
                        { VariableTaresa }
                    </div>
                </div>

                


            </div>
        );
    }
}

export default Listas;