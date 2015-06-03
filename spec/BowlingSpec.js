describe('Bowling', function () {
  var game;
  beforeEach(function () {
    game = new Game();
  });
  describe('has frames', function () {
    it('starts on the first frame ', function () {
      expect(game.currentFrame).toEqual(1);
    });
    it('keeps track of frames', function () {
      game.roll(4, 4);
      game.roll(3, 2);
      expect(game.currentFrame).toEqual(3);
    });
  });
  describe('playing a game', function () {
    it('tracks score for multiple rolls', function () {
      game.roll(1, 1);
      expect(game.total()).toEqual(2);
    });
  });
});