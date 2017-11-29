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
    
    this.skills = [ new Skill(), new Skill(), new Skill(), new Skill() ];
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
	
    this.setSelectedSkill = function(value) 
    { 
	for(var k = 0; k < this.skills.length; k++)
	{
		this.skills[k].selected = (k == value);
	}
    };
	
    this.getSelectedSkill = function()
    {
	for(var k = 0; k < this.skills.length; k++)
	{
		if(this.skills[k].selected) return this.skills[k];
	}
	return null;
    };
    
    this.getLastAttack = function() { return this.attackHistory[this.attackHistory.length - 1]; };
    this.setLastAttack = function()
    {
	    var str = "";
	    if(this.retreat)
	    {
		str = "RETREATS.";
	    }
	    else
	    {
		skill = this.getSelectedSkill();
		str += "uses " + skill.name.toUpperCase() 
		    + (skill.type == SkillType.Offensive ? " against ENEMY MERC " + this.target 
		    : " on " + (this.target == this.position ? "SELF" : "ALLY " + this.target)) + ".";
	    }
	    this.attackHistory.push({ "skill" : skill, "text" : str }); 
    };
}
