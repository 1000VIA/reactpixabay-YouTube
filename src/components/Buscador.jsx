import React, { Component, Fragment } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = evet => {
    evet.preventDefault();

    //Tomamos el valor del input
    const termino = this.busquedaRef.current.value;

    //Lo enviammos al componente Principal
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.obtenerDatos}>
          <div className="row">
            <div className="form-group col-md-8">
              <input
                ref={this.busquedaRef}
                type="text"
                className="form-control form-control-lg"
                placeholder="Busca tu Imagen. Ejemplo: Futbol"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="submit"
                className="btn btn-lg btn-danger btn-block"
                value="Buscar..."
              />
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default Buscador;
