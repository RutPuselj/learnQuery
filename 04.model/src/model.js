let uuid = 0;

class Model {

  constructor(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        const value = obj[prop];
        this.set(prop, value);
      }
    }
    this.uuid = uuid++;
  }

  /*get uuid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }*/
 
  get(prop) {
    const propertyName = `_${prop}`;
    return this[propertyName];
  }

  set(prop, newValue) {
    const propertyName = `_${prop}`;
    this[propertyName] = newValue;
  }

}
