import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="flex justify-start flex-wrap ">
        {this.props.notas.map((categoria, index) => {
          return (
            <div className="flex-initial w-64 max-w-full" key={index}>
              <li>
                <CardNota categoria={categoria} />
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
