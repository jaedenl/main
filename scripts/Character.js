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
    this.healthbar = null;
    this.marker = null;
    
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

	this.createGameObject = function(scene, sprite, shape, coords, marker)
	{
		var state = this.state[sprite];
		
		var texture  = new THREE.TextureLoader().load(textureBaseURL + state.img);
		if(state.wrap) texture.wrapS = THREE.RepeatWrapping;
		
		var material = new THREE.MeshLambertMaterial( { map : texture, transparent : true } );

		this.obj = new THREE.Mesh(shape, material);
		this.obj.translateX(coords.x);   
		this.obj.translateY(coords.y);   
		this.obj.translateZ(coords.z);
		this.obj.rotation.y = Math.PI * 1.6;
		
		this.charanim = null;
		if(state.animate)
		{
			this.charanim = new TextureAnimator(
				texture, 
				state.animate.hor, 
				state.animate.vert, 
				state.animate.num, 
				state.animate.dur
			);
		}
		
		scene.add(this.obj);		
		scene.add(this.createHealthBar(coords));
		
		this.marker = marker;
		
		//return this.obj;
	};

	this.createHealthBar = function(coords)
	{
		var geometry = new THREE.PlaneGeometry( 4, 0.5, 32 );
		var material = new THREE.MeshBasicMaterial( {color: 0x00CC33, side: THREE.DoubleSide} );
		
		this.healthbar = new THREE.Mesh( geometry, material );
		this.healthbar.translateX(coords.x);
		this.healthbar.translateY(coords.y + 4);
		this.healthbar.translateZ(coords.z);
		this.healthbar.rotation.y = Math.PI * 1.6;
		return this.healthbar;
	};
	
	this.updateGameObject = function(coords)
	{
		this.gameObj.translateX(coords.x);
		this.gameObj.translateX(coords.y);
		this.gameObj.translateX(coords.z);
		
		this.gameObj.translateX(coords.x);
		this.gameObj.translateX(coords.y);
		this.gameObj.translateX(coords.z);
		
		if(this.marker)
		{
			this.marker.setX(coords.x);
                	this.marker.setY(coords.y - 2.4);
                	this.marker.setZ(coords.z);
		}
	};
}
