import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  //si el atributo está en PUBLIC se puede llamar desde cualquier lado
  //si el atributo está en PRIVATE solo se puede usar en el mismo componente
  title = 'Andy';

  constructor() {
    //operador splice() recibe 2 parámetros
    //primero creé el array principal 'A', luego otro donde se mostrará el resultado
    //(en caso quieras mostrar el resultado.. si no solo muestra A.splice(1,1).
    //modifica el array principal y devuelve lo que está eliminando
    //usualmente se usa SPLICE con DELETE en las tablas
    const A = ['a', 'b', 'c', 'd', 'e'];
    const auxSplice = A.splice(2, 1);
    console.log('auxSplice:', A, auxSplice);
    //resultado: auxSplice: ["a", "b", "d", "e"]  ["c"]

    //operador Reduce recibe una funcion flecha
    //suma y devuelve un array
    const auxReduce = [1, 2, 3, 4, 5].reduce(
      (prev, value, index) => prev + value,
      0
    );
    console.log('auxReduce', auxReduce);
    //resultado: auxReduce: 15

    //JSON Operadores
    const auxJSON = {
      id: 1,
      nombre: 'juan',
      apellido: 'rojas',
    };

    //ENTRIES, KEY, VALUES

    //entries, recibe un objeto json y devuelve un array
    //devuelve el id en un array, el nombre en otro array y el apellido en otro
    const auxentries = Object.entries(auxJSON);
    console.log('auxentries', auxentries);
    //resultado:
    /** [Array[2], Array[2], Array[2]]
        0: Array[2]
          0: "id"
          1: 1
        1: Array[2]
          0: "nombre"
          1: "juan"
        2: Array[2]
          0: "apellido"
          1: "rojas"      **/

    //keys, devuelve un array pero sin los valores del objeto x(1,juan, rojas)x
    const auxKeys = Object.keys(auxJSON);
    console.log('auxKeys', auxKeys);
    //resultado:
    /**
          ["id", "nombre", "apellido"]
            0: "id"
            1: "nombre"
            2: "apellido"     */

    //value, devuelve solo los valores como array
    const auxValues = Object.values(auxJSON);
    console.log('auxValues', auxValues);

    //spread operator, rest operator
    //spread agrega y/o completa un array. Se ponen !3 puntitos!
    const b = [1, 2, 3, 4, 5, 6];
    const c = [...b, 7, 8, 9, 10];
    console.log('Spread: ', c);

    this.getRest(1, 2, 'holi');

    //creando un objeto nuevo
    const person = {
      id: 1,
      name: 'andy',
      pais: {
        idPais: 1,
        cod: 'Lima',
      },
    };
    //un ejemplo de desestructuracion de un objeto json y/o arrays
    const { pais /*id*/ } = person;
    console.log('pais:', pais);

    const data = {
      0: {
        id: 1,
        name: 'juan',
        age: 24,
      },
      1: {
        id: 2,
        name: 'ande',
        age: 8,
      },
    };

    //convirtiendo el objeto en un array y sumar las edades
    //despues del values() y el reduce() se puede poner mas operadores, segun los requerimientos
    const resp = Object.values(data).reduce(
      (prev, value) => prev + value.age,
      0
    );
    console.log('resp', resp);

    //tarea: convertir a un array filtrar las personas mayores a 10, mostrar solo los
    //id's
    //resultado: [1]
    //resolucion de la tarea:
    const resp1 = Object.values(data)
      .filter((p) => p.age > 10)
      .map((p) => p.id);
    console.log('resp1: ', resp1);
  }
  //rest operator, recibe N parametros del objeto..
  getRest(...params: any[]) {
    console.log('rest: ', params);
  }
}
