function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
  if (this.tank <= 0) {
    console.log("Fuel is Empty");
  }
  console.log(`"Iran out of fuel at ${this.odometer} miles`);
};

const newCar = new Car("Tesla", 200 / 10);

newCar.fill(30);
newCar.drive(500);
newCar.fill(20);
newCar.drive(250);
console.log("TANK:::", newCar.tank);
console.log("ODOMETER:::", newCar.odometer);
