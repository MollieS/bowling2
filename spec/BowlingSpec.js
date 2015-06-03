describe("A game of bowling", function(){


  it("tracks score for single roll", function(){
    game = new Game();
    game.roll(5);
    expect(game.score()).toEqual(5);
  });

  it("tracks score for multiple rolls", function(){
    game = new Game();
    game.roll(5);
    game.roll(10);
    expect(game.score()).toEqual(15);
  });

});