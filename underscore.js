function Car(brand, model, year){
  this.brandName = brand;
  this.model = model;
  this.productionYear = year;
}
var car = _.create(Car.prototype, {brandName:'Toyota',model:'Camry',productionYear:2017});

var invertedCar = _.invert(car);
console.log(invertedCar);

console.log('Pick');
var pickedFromCar = _.pick(car,'brandName','productionYear');
console.log(pickedFromCar);

console.log('Omit');
var omitedInCar = _.omit(car, 'model');
console.log(omitedInCar);