var CharacterType = { NotSet : -1, Physical : 1, Finesse : 2, Magic : 3 };

function Character()
{
    var dazed = false;
    var poisoned = false;
    var bleeding = false;
    var immune = false;
    
    var health = 0;
    var defense = 0;
    var attack = 0;
    var speed = 0;
    
    this.name = "";
    this.image = "";
    this.type = CharacterType.NotSet;
    
    this.skills = [];
    this.backstory = "";
    
    this.attackHistory = [];
    
    this.retreat = false;	
	this.position = -1;
    this.target = -1;
    
    this.isDazed = function() { return dazed; };
    this.setDazed = function(value) { dazed = value; };
    
    this.isPoisoned = function() { return poisoned; };
    this.setPosioned = function(value) { poisoned = value; };
    
    this.isBleeding = function() { return bleeding; };
    this.setBleeding = function(value) { bleeding = value; };
    
    this.isImmune = function() { return immune; };
    this.setImmune = function(value) { immune = value; };
    
    this.getHealth = function() { return health; };
    this.setHealth = function(value) { health = value; };
    
    this.getDefense = function() { return defense; };
    this.setDefense = function(value) { defense = value; };
    
    this.getAttack = function() { return attack; };
    this.setAttack = function(value) { attack = value; };
    
    this.getSpeed = function() { return speed; };
    this.setSpeed = function(value) { attack = speed; };
    
    this.getLastAttack = function() { return this.attackHistory[this.attackHistory.length - 1]; };
}