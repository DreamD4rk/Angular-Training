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
    console.log('holex');

    //map() funciona solo con arrays
    //map() itera: Realizar [cierta acción] varias veces.
    //map() creo un nuevo array con el resultado
    const auxMap = [1, 2, 3, 4, 5].map((num) => num * 2);
    console.log('auxMap:', auxMap);
    //resultado: auxMap [2, 4, 6, 8, 10]

    //forEach() solo recorre el arraay, nada más.
    const auxForEach = [1, 2, 3, 4, 5].forEach((num) => num * 2);
    console.log('auxForEach:', auxForEach);

    //find() busca el objeto, funciona en JSON's, devuelve objeto entero
    const auxFind = [1, 2, 3, 4, 5].find((num) => num === 3);
    console.log('auxFind:', auxFind);
    //resultado: auxFind: 3

    //findIndex() solo busca el índice del array
    const auxFindIndex = [1, 2, 3, 4, 5].findIndex((num) => num === 4);
    console.log('auxFindIndex:', auxFindIndex);
    //resultado auxFindIndex: 3

    //indexOf() recibe un arrray o cadena string
    //usualmente no va funcion flecha
    //cuado buscamos una palabra entera con indexof() muestra la primera letra de la palabra
    //si no, muestra -1
    const auxIndexOf = [1, 2, 3, 4, 5].indexOf(5);
    console.log('auxIndexOf:', auxIndexOf);
    //resultado: auxIndexOf: 0

    //filter() devuelve un nuevo array desde el resultado
    //si no encuentra nada al filtrar devuelve un array vacío
    // si piden filtrar una info de un objeto va así en la función flecha:
    //ejemplo: .filter(per.country  === 'Lima')
    const auxFilter = [1, 2, 3, 4, 5].filter((num) => num % 2 === 0);
    console.log('auxFilter:', auxFilter);
    //resultado auxFilter: [2, 4]

    //join() no recibe funcion flecha, solo 1 parámetro. Sirve como un separador
    const auxJoin = [1, 2, 3, 4, 5].join('-');
    console.log('auxJoin: ', auxJoin);
    //resultado auxJoin: 1-2-3-4-5

    //split() convierte una cadena en array,
    const auxSplit = 'hola, mundo, test'.split(',');
    console.log('auxSplit:', auxSplit);
    //resultado: auxSplit: ["hola", " mundo", " test"]
  }

  //esto es una función en TS
  //en TS se debe definir el tipo de dato
  //si está en PUBLIC se puede llamar desde cualquier lado
  //si está en PRIVATE solo se puede usar en el mismo componente
  public getName(name: string): string {
    return 'hi' + name;
  }

  /**funcion flecha, usualmente se pone "const" al comienzo
  const getName = (name: string) => {return 'hi' + name;}
  -Cuando la funcion flecha retorna mas de 2 lineas de codigo se abre llaves {}
  -Cuando retorna solo 1 linea va así:
  const getName = (name: string) => "hi" + name
  -Si no tiene parámetros de entreda va así:
  const getName = () => "hi"
  -Otro ejemplo de función flecha:
  const mult = num => num*2
  **/
}
