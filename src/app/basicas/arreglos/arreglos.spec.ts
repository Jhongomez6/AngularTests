import { getRobots } from "./arreglos";


  xdescribe("Prueba de arreglos", ()=>{

    it("Debe retornar al menos 3 robots", () =>{
      const res = getRobots();
      expect(res.length).toBeGreaterThanOrEqual(3)
    })
    xit("Debe de existir Megaman y Ultron", ()=>{
      const res = getRobots();
      expect(res).toContain("Megaman");
      expect(res).toContain("Ultron");
    })
  })
