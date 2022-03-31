import React, {Component} from'react';

class Historial extends Component {
    constructor() {
      super();
      this.state = {};
    }

      componentDidUpdate(prevProps,prevState){
        if (prevState.contador !== this.state.contador) {
          this.state.historial.push(this.state.contadorDeCambios);
        }
      }

    render() {
      return (
        <div className="recordatorio">
          <h4>Seleccion Anterior : {this.props.contadorDeCambios}</h4>
          <h5>Historial de opciones elegidas: </h5>
          <ul>
             {this.props.historial.map((elemento,index) => <li key={index}>{elemento}</li>)}
          </ul>
        </div>
      );
    };
  };

  export default Historial;



  