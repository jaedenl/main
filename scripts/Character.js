var CharacterType = { NotSet : -1, Physical : 1, Finesse : 2, Magic : 3 };

function Character()
{
    this.dazed = false;
    this.poisoned = false;
    this.bleeding = false;
    this.immune = false;
    
    var health = 0;
    var defense = 0;
    var attack = 0;
    var speed = 0;
    
    this.name = "";
    this.image = "";
    this.type = CharacterType.NotSet;

    this.colour = 0x000000;
    this.obj = null;
    this.charanim = null;
    this.state = null;
    
    this.skills = null;
    this.backstory = "";
    
    this.attackHistory = null;
    
    this.retreat = false;	
    this.position = -1;
    this.target = -1;
    
    this.isDazed = function() { return this.dazed; };    
    this.isPoisoned = function() { return this.poisoned; };    
    this.isBleeding = function() { return this.bleeding; };    
    this.isImmune = function() { return this.immune; };
    
    this.getHealth = function() { return health; };
    this.setHealth = function(value) { health = value; };
    
    this.getDefense = function() { return defense; };
    this.setDefense = function(value) { defense = value; };
    
    this.getAttack = function() { return attack; };
    this.setAttack = function(value) { attack = value; };
    
    this.getSpeed = function() { return speed; };
    this.setSpeed = function(value) { attack = speed; };
	
    this.getSelectedSkill = function()
    {
		for(var k = 0; k < this.skills.length; k++)
		{
			if(this.skills[k].isSelected()) return this.skills[k];
		}
		return null;
    };
    
    this.getLastAttack = function() 
	{ 
		if(!this.attackHistory) return null;
		return this.attackHistory[this.attackHistory.length - 1]; 
	};

    this.setLastAttack = function()
    {
	    var str = "";
		var skill = this.getSelectedSkill();

		if(skill)
		{
			if(skill.name == "Retreat")
			{
				str = "RETREATS.";
			}
			else
			{
				str += "uses " + skill.name.toUpperCase() 
					+ (skill.type == SkillType.Offensive ? " against ENEMY MERC " + this.target 
					: " on " + (this.target == this.position ? "SELF" : "ALLY " + this.target)) + ".";
			}
		}

		if(!this.attackHistory) this.attackHistory = [];
	    this.attackHistory.push({ "skill" : skill, "text" : str }); 
    };

	this.createGameObject = function(shape, x, y, z)
	{
		var texture  = new THREE.TextureLoader().load(this.state.img);
		var material = new THREE.MeshLambertMaterial( { map : texture, transparent : true } );

		this.obj = new THREE.Mesh(shape, material);
		this.obj.translateX(x);   
		this.obj.translateY(y);   
		this.obj.translateZ(z);
		
		this.charanim = null;
		if(this.state.animate)
		{
			this.charanim = new TextureAnimator(
				texture, 
				this.state.animate.hor, 
				this.state.animate.vert, 
				this.state.animate.num, 
				this.state.animate.dur
			);
		}
		
		return this.obj;
	};
}
