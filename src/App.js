import React, {Component} from'react';
import Historial from "./components/Historial";
import Opciones from "./components/Opciones";
import datos from "./data.json";
import Swal from "sweetalert2";
import "./index.css";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      historial:[],
      contador:0,
      contadorDeCambios: " ",
    };
  
  }
  handleClick= (event) =>{
    const id= event.target.id;
    if (this.state.contador > 6) {
    Swal.fire("Fin de la historia");
        
    }else if (this.state.contadorDeCambios !== "A" && id === "A"){
        this.setState({contador: this.state.contador + 1, contadorDeCambios : 'A', historial:this.state.historial.concat('A') });
    
    }else if (this.state.contadorDeCambios === "A" && id === "A"){
        this.setState({contador: this.state.contador + 2, contadorDeCambios : 'A',historial:this.state.historial.concat('A') });

    }else if (id === "B"){
        this.setState({contador: this.state.contador + 2, contadorDeCambios : 'B',historial:this.state.historial.concat('B') });

    }else if (this.state.contadorDeCambios === "A" && id === "B"){
        this.setState({contador: this.state.contador + 3, contadorDeCambios : 'B',historial:this.state.historial.concat('B') });

    }
}

  render(){
    return(
      <div className="App">
        <header className="layout">

          <h1 className="historia">{datos[this.state.contador].historia}</h1>

          <Opciones 
          handleClick ={this.handleClick}
          opcionA={datos[this.state.contador].opciones.a}
          opcionB={datos[this.state.contador].opciones.b}
          />

          <Historial 
           contadorDeCambios ={this.state.contadorDeCambios}
           historial= {this.state.historial}
          />

        </header>
      
      </div>
    );
  }
}

export default App;
