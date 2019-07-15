import { usuarioIngresado } from "./booleanos";


describe("Prueba de booleanos", () =>{

  it("Debe retornar true", ()=>{
    const res = usuarioIngresado();

    expect(res).toBeTruthy();
    expect(res).not.toBeFalsy();
  })
})
