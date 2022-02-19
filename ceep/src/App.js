import React, { Component } from "react";
import ListaDeNotas from "./conponents/List-Notas";
import FormNotas from "./conponents/from-notas";
import FormularioCadastro from "./conponents/from-notas";
import "./assets/App.css";
import './assets/index.css';
import Head from "./conponents/Head";

class App extends Component {
  constructor(){
    super();
    this.state={
      notas:[]
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo,texto};
    const novoArrayDeNotas = [... this.state.notas, novaNota];
    const novoStado= {
      notas:novoArrayDeNotas
    }
    this.setState(novoStado)
  }
  render() {
    return (
      <section>
        <Head></Head>
        <FormularioCadastro  criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
