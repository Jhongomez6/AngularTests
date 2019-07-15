import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {  from, empty, throwError } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio  = new MedicosService(null);
    beforeEach( () => {
        componente  = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos', () => {

      spyOn( servicio, 'getMedicos').and.callFake( () =>{
        return from([['Medico1', 'Medico2', 'Medico3']]);
      })

      componente.ngOnInit();
      expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('IDebe de llamar al servidor para agregar un médico', () => {

      const spy = spyOn( servicio, 'agregarMedico').and.callFake( medico =>{
        return empty();
      })

      componente.agregarMedico();
      expect(spy).toHaveBeenCalled();
    });

    it("Debe de agregar un nuevo médico al arreglo de médicos",() =>{
      const medico = { id: 1, nombre: 'juan'};
      spyOn( servicio, "agregarMedico").and.returnValue(from([medico]))
      componente.agregarMedico();
      expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    })

    it( 'Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {

      const miError = 'Nose pudo agregar el médico';

      spyOn( servicio, 'agregarMedico' ).and
              .returnValue( throwError( miError ) );

      componente.agregarMedico();

      expect( componente.mensajeError ).toBe( miError );
  });


    it("Debe de llamar al servidor para borrar un médico", () =>{
     spyOn(window, 'confirm').and.returnValue(false);
      const espia  = spyOn(servicio, 'borrarMedico').and.returnValue(empty())
      componente.borrarMedico('1');
      expect(espia).not.toHaveBeenCalledWith('1');

    })

});
