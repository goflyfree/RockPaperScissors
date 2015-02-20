describe('Rock, Paper, Scissors game', function() {

	beforeEach(function() {
	        playGame = new RPS();			
			rock = new Rock();
			scissors = new Scissors();		
	});

	describe('Game play rules', function(){
		it('rock vs scissor: rock wins scissor losses', function () {		    
			expect(playGame.compareSymbol(rock, scissors)).toEqual(rock);
		});

		it('scissors vs rock: scissors losses rock wins', function (){
			expect(playGame.compareSymbol(scissors, rock)).toEqual(rock);
		});

		it('scissors vs scissors: is a draw', function() {
			expect(playGame.compareSymbol(scissors, scissors)).toEqual('draw');
		});
	});

	describe('types of symbols', function () {
		it('rock knows its symbol is rock', function() {
			expect(rock.symbol).toEqual("Rock")
		});
		it('rock knows it wins scissors', function() {
			expect(rock.wonBySymbol).toEqual("Scissors")
		});
	});
	
});