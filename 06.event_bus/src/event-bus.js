class EventBus {

  constructor() {
    this.listOfRegListeners = []; // List of registered listeners for events
  }

  // Register a listener for single or multiple events
  on(stringOfEvents, callback) {
    stringOfEvents.split(' ').forEach((event) => {
      this.listOfRegListeners.push([event, callback]);
    });
  }

  // Trigger a handler function for single or multiple events with any number of parameters
  trigger(stringOfEvents, ...parameters) {
    stringOfEvents.split(' ').forEach((event) => {
      this.listOfRegListeners.forEach((listEvent) => {
        if (event === listEvent[0]) {
          listEvent[1].apply(listEvent[0], parameters);
        }
      });
    });
  }

  // Deregistration of a handler for single or multiple events
  off(stringOfEvents, callback) {
    stringOfEvents.split(' ').forEach((event) => {
      this.listOfRegListeners = this.listOfRegListeners.filter((listEvent) =>
        (!(Object.is(callback, listEvent[1]) && Object.is(event[0], listEvent[0])))
      );
    });
  }

}
