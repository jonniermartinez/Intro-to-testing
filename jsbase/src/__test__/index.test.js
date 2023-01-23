const randomStrigs = require('../index');


describe('Probar funcionalidades de nuestra ramdomSrings', ()=>{
    test('probar la funcionalidad', () => {
        expect(typeof (randomStrigs())).toBe('string');
    });
    test('Comprobar que no existe una ciudad',() => {
        expect(randomStrigs()).not.toMatch(/Cordoba/);
    });
    
})