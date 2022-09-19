const { Type, conn } = require('../../src/db.js');


describe('Type model', () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
    console.log('%s listening');
  });   

  describe('Validators', () => {
    it('should not create the type if it is not a valid type', async() => {
        expect.assertions(1);
        try {
          await Type.create({name: 'light'})
        } catch (error) {
          expect(error.message).toBeDefined();
        }
      });
     it('should not create the type if name is not send', async () => {
      expect.assertions(1);
      try {
        await Type.create({name:''});
      } catch (error) {
        expect(error.message).toBeDefined();
      }
    });
     it('should create the type if the required property is ok', async () => {
      const typeCreated = await Type.create({
        name: 'normal'
      })
      expect(typeCreated.toJSON()).toEqual({
        "id": 1,
        "name": 'normal'
      });
    });
  })

 afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  })
});