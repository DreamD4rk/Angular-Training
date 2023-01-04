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
