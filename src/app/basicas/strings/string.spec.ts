import { mensaje } from "./string";



describe('Pruebas de Strings', ()=>{

  it('Debe de regresar un string', () =>{
   const respuesta = mensaje('Fernando');
   expect( typeof respuesta ).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () =>{
    const nombre = 'Juan'
    const respuesta = mensaje(nombre);
    expect( respuesta).toContain(nombre);
   });

});

