/*
Airplane TASK:
Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false.
*/

let Airplane = {
  isFlying: false,

  takeOff: (obj) => {
    obj.isFlying = true;
  },
  land: (obj) => {
    obj.isFlying = false;
  },
};
const Singapore = Object.create(Airplane);
const Armenia = Object.create(Airplane);
//const Armenia = Object.assign(Airplane, { isFlying: false });

Singapore.takeOff(Singapore);
console.log("Singapore:", Singapore.isFlying);
Armenia.takeOff(Armenia);
Armenia.land(Armenia);
console.log("Armenia:", Armenia.isFlying);
