function Game () {
  this.total = 0;

};

Game.prototype.roll = function(pins) {
  this.total += pins;
  return this.score();
};

Game.prototype.score = function() {
  return this.total;
};