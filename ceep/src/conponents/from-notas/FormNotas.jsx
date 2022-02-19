import React, { Component } from "react";
import "./stylos.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this. nota= "";
  }

  handlerMudarTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  handlerMudarNota(evento){
    evento.stopPropagation();
    this.nota = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.nota)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handlerMudarTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handlerMudarNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;