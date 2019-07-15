import { Jugador2 } from './jugador2';


describe("Jugador 2 emit", () =>{
  let jugador = new Jugador2();

  beforeEach(()=> {
    jugador = new Jugador2();
  });

  it("Debe de emitir un evento cuando reciba daño", () =>{

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp =>{
      nuevoHP =hp;
    })

    jugador.gotDamage(200);
    expect(nuevoHP).toBe(0);
  })

  it("Debe de emitir un evento cuando reciba daño y sobrevivir si es menos de 100", () =>{

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp =>{
      nuevoHP =hp;
    })

    jugador.gotDamage(50);
    expect(nuevoHP).toBe(50);
  })

})
