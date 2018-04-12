class Collection {

  constructor(models) {
    if (models && !Array.isArray(models)) {
      throw Error('Constructor parameter must be an array');
    }
    if (models) {
      this.models = [...models];
    } else {
      this.models = [];
    }
  }

  add(...a) {
    this.models.push(...a);
  }

  /*remove(r) {
    for (let i = 0; i < this.model.length; i++) {
      if (this.model[i] === r) {
        this.model.splice(i, 1);
      }
    }
  }*/

  remove(element) {
    this.models = this.models.filter((model) => model !== element);
  }

  get(uuidToFind) {
    return this.models.find(({uuid}) => uuidToFind === uuid);
  }

  get length() {
    return this.models.length;
  }

  map(callback) {
    return new Collection(this.models.map(callback));
  }

  filter(callback) {
    return new Collection(this.models.filter(callback));
  }

  reduce(callback, initValue) {
    if (initValue) {
      return this.models.reduce(callback, initValue);
    }
    return this.models.reduce(callback);
  }

  find(callback) {
    return this.models.find(callback);
  }

  findIndex(callback) {
    return this.models.findIndex(callback);
  }

  indexOf(element) {
    return this.models.indexOf(element);
  }

}
