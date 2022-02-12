import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="flex flex-wrap justify-between">
        {Array.of("Trabalho", "Trabalho", "Estudos", 1, 1, 1).map(
          (categoria, index) => {
            return (
              <div className="flex-auto w-64 max-w-full">
                <li className="" key={index}>
                  <div>{categoria}</div>
                  <CardNota />
                </li>
              </div>
            );
          }
        )}
      </ul>
    );
  }
}

export default ListaDeNotas;
