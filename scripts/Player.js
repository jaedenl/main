function Player(a)
{
	var score = 0;
	var winner = false;
	var active = a;
	//var temp = [];

	this.selectedCount = 0;
	//this.characters = {};
	this.characters = [];

	this.getScore = function() { return score; };
	this.setScore = function(value) { score = value; };

	this.isWinner = function() { return winner; };
	this.setWinner = function(value) { winner = value; };

	this.isActive = function() { return active; };
	this.setActive = function(value) { active = value; };

	this.addCharacter = function(c)
	{
		//temp.push(c);
		this.characters.push(new c());
	};

	this.removeCharacter = function(c)
	{
		//temp.slice(temp.indexOf(c), 0);
		for(var i = 0; i < this.characters.length; i++)
		{
			if(this.characters[i] instanceof c) 
			{
				this.characters.slice(i, 0);
				break;
			}
		}
	};

	this.commit = function()
	{		
		/*this.characters.character1 = new temp[0]();
		this.characters.character2 = new temp[1]();
		this.characters.character3 = new temp[2]();*/
		for(var i = 0; i < this.characters.length; i++) this.characters[i].position = i + 1;
	};

	this.getCharacterByPosition = function(pos)
	{
		for(var i = 0; i < this.characters.length; i++)
		{
			if(this.characters[i].position == pos) return this.characters[i];
		}
	};

	this.reset = function()
	{
		winner = false;
		active = false;
		selectedCount = 0;

		//temp = [];
		//this.characters = {};		
		this.characters = [];
	};
}