import { incrementar } from "./numeros";


describe("Pruebas nde números", () =>{

  it("Debe retornar 100, sí el numero ingresado es mayor a 100", () =>{
      const res= incrementar(300);
      expect( res).toBe(100);
  });

  it("Debe retornar el numero ingresado como parametro más 1, si no es mayor a 100", () =>{
    const res= incrementar(50);
    expect( res).toBe(51);
  });
})
