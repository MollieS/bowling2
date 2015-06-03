function Game() {
  this.currentFrame = 1;
  this.frames = [];
}
Game.prototype.roll = function (pinsFirst, pinsSecond) {
  //this.currentFrame.roll(pin);
  this.frames.push([
    pinsFirst,
    pinsSecond
  ]);
  this.currentFrame += 1;
  return this.total();
};
Game.prototype.total = function () {
  var total = 0;
  for (i = 0; i < this.frames.length; i++) {
    total += this.frames[i].reduce(function (a, b) {
      return a + b;
    });
  }
  return total;
};