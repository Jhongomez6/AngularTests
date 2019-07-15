import { Jugador } from './clase';



describe ("Pruebas de clase", ()=>{

  const jugador = new Jugador();

  beforeAll(() => {
  });

  beforeEach(() => {
    jugador.hp = 100;
  });

  afterAll(() => {
    console.log("afterAll");
  });

  afterEach(() => {
    console.log("afterEach");
  });


      it("Debe retornar 80 de hp, si recibe 20 de daño", ()=>{
        const resp = jugador.gotDamage(20);
        expect(resp).toBe(80);
      });

      it("Debe retornar 80 de hp, si recibe 50 de daño", ()=>{
        const resp = jugador.gotDamage(50);
        expect(resp).toBe(50);
      });

      it("Debe de retornar 0 de hp, si recibe 100 de dano o más", ()=>{
        const resp = jugador.gotDamage(100);
        expect(resp).toBe(0);
      });
  })
