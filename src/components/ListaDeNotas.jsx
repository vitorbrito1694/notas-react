import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="flex justify-start flex-wrap ">
        {this.props.notas.map((nota, index) => {
          return (
            <div className="flex-initial w-64 max-w-full" key={index}>
              <li>
                <CardNota titulo={nota.titulo} texto={nota.texto} />
              </li>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
