import React,{ Component} from "react";
import Swal from "sweetalert2";


class Opciones extends Component {
    constructor() {
        super();
        this.state = {contador:0};
    }
    
    
    render() {
        console.log(this.props);
    return (
        <div className="opciones">
        <div className="opcion">
            <button id="A" className="botones" onClick={(event)=>this.props.handleClick(event)}> A
            </button>
            <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
            <button id="B" className="botones" onClick={(event)=>this.props.handleClick(event)}> B
            </button>
            <h2>{this.props.opcionB}</h2>
        </div>
        </div>
    );
    }
}

export default Opciones;
