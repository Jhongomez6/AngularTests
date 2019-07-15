import { EventEmitter } from '@angular/core';

export class Jugador2 {

  hp: number;
  hpCambia = new EventEmitter<number>();
  constructor(){
    this.hp=100;
  }

  gotDamage(damage:number){
    if(damage >= this.hp){
      this.hp = 0;
    }
    else{
      this.hp = this.hp -damage;
    }

    this.hpCambia.emit(this.hp);
  }
}
