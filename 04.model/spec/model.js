/*
 * NOTE!
 * Before development be sure to replace `xdescribe` with
 * `describe`. This will tell the test runner to start
 * running this tests. This change is to be commited and
 * remain unchanged for the duration of academy.
 */

describe('Model', () => {
  describe('constructing the Model', () => {
    it('should be defined', () => {
      expect(Model).toBeDefined();
    });

    it('should be possible to instantiate it', () => {
      const model = new Model();

      expect(model instanceof Model).toBeTruthy();
    });
  });

  describe('uuid', () => {
    it('should have an uuid', () => {
      const model = new Model();

      expect(model.uuid).toBeDefined();
    });

    it('should have a different uuid for each instance', () => {
      const models = [];

      for (let i = 0; i < 20; i++) {
        models.push(new Model());
      }

      const uuids = new Set(models.map((model) => model.uuid));

      expect(models.length).toBe(uuids.size);
    });
  });

  describe('setters and getters', () => {
    let model;

    beforeEach(() => {
      model = new Model();
    });

    it('should have the set method', () => {
      expect(model.set).toBeDefined();
    });

    it('should have the get method', () => {
      expect(model.get).toBeDefined();
    });

    it('should return `undefined` when getting undefined properties', () => {
      expect(model.get('name')).not.toBeDefined();
    });

    it('should set the attribute when using `set`', () => {
      model.set('name', 'Name');
      expect(model.get('name')).toBe('Name');
    });

    it('should allow use of existing method/property names as attributes', () => {
      model.set('set', 'setString');
      model.set('get', 'getString');

      expect(model.get('set')).toBe('setString');
      expect(model.get('get')).toBe('getString');
    });
  });

  describe('initial values', () => {
    let model;
    let options;

    beforeEach(() => {
      options = {
        name: 'Andrei',
        job: 'Developer',
        hypeLevel: 100
      };

      model = new Model(options);
    });

    it('should use initial values for the model if provided', () => {
      Object.keys(options).forEach((key) => {
        const value = options[key];

        expect(model.get(key)).toBe(value);
      });
    });

    it('should make a (shallow) copy of the initial values', () => {
      options.name = 'Sefo';

      expect(model.get('name')).toBe('Andrei');
    });

    it('should not override existing methods', () => {
      const otherModel = new Model({get: true});

      expect(typeof otherModel.get === 'function').toBeTruthy();
      expect(otherModel.get('get')).toBe(true);
    });
  });

  describe('extending Model', () => {
    let model;
    let options;

    beforeEach(() => {
      class MyModel extends Model {
        constructor(options) {
          super(options);

          this.set('isMine', true);
        }
      }

      options = {
        name: 'model'
      };

      model = new MyModel(options);
    });

    it('should attach initial properties if super was called', () => {
      expect(model.get('name')).toEqual('model');
    });
  });
});
