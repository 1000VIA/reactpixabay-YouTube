import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;

    //Leer sila página es 1, ya no ir hacia atras
    if (pagina === 1) return null;

    //Resta uno a la pagina actual
    pagina -= 1;

    //agregar el cambio al state

    this.setState(
      {
        pagina
      },
      () => {
        this.consultandoApi();
        this.scroll();
      }
    );
    // console.log(pagina);
  };

  paginaSiguiente = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;

    //Sumar uno a la pagina actual
    pagina += 1;

    //agregar el cambio al state

    this.setState(
      {
        pagina
      },
      () => {
        this.consultandoApi();
        this.scroll();
      }
    );
    // console.log(pagina);
  };

  consultandoApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=13686780-fc1d18fee3c0d5d48ba142d9c&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ imagenes: data.hits }));
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino,
        pagina: 1
      },
      () => {
        this.consultandoApi();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
