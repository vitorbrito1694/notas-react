import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="flex flex-wrap">
        {this.props.notas.map((categoria, index) => {
          return (
            <div className="flex-1 w-64 max-w-full" key={index}>
              <li>
                <div>{categoria}</div>
                <CardNota />
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
