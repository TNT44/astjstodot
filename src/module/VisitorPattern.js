var vessel = function (name, speed, size) {
    var self = this;
 
    self.name = name;
    self.speed = speed;
    self.size = size;
     
    self.accept = function (visitor) {
        visitor.visit(self);
    };
 
    self.getName = function () {
        return self.name;
    };
 
    self.getSpeed = function () {
        return self.speed;
    };
 
    self.setSpeed = function (speed) {
        self.speed = speed;
    };
 
    self.getSize = function () {
        return self.size;
    };
 
    self.setSize = function (size) {
        self.size = size;
    };
};
 
var vesselSpeedUp = function () {
    this.visit = function (vessel) {
        vessel.setSpeed(vessel.getSpeed() * 2.5); //2.5 times faster
    };
};
 
var vesselEnlarge = function () {
    this.visit = function (vessel) {
        vessel.setSize(vessel.getSize() * 2); //twice bigger
    };
};

var target = new vessel("tanker", 25, 350);
var speedUp = new vesselSpeedUp();
var enlarge = new vesselEnlarge();

console.log("Tanker --");
console.log(target.getSpeed());
console.log(target.getSize());
 
target.accept(speedUp);
target.accept(enlarge);
 
console.log(target.getSpeed());
console.log(target.getSize());