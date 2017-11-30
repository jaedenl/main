var SkillType = { NotSet : -1, Reusable : 1, Defensive : 2, Offensive : 3 };

function Skill(n)
{
	this.selected = false;
	this.active = true;
    
    this.name = n;
    this.description = "Description of Skill.";
    this.type = SkillType.NotSet;
    
    this.multiTarget = false;
    this.blocksDamage = false;
    this.repeatable = true;
    
    this.attackValue = 0;
    this.accuracy = 0.0;
    
    //% mod self stats
    this.selfAttackMod = 0.0;
    this.selfDefenceMod = 0.0;
    this.selfSpeedMod = 0.0;
    this.selfAccuracyMod = 0.0;
    
    //% mod ally stats
    this.allyAttackMod = 0.0;
    this.allyDefenceMod = 0.0;
    this.allySpeedMod = 0.0;
    this.allyAccuracyMod = 0.0;
    
    //% mod opponent stats
    this.oppAttackMod = 0.0;
    this.oppDefenceMod = 0.0;
    this.oppSpeedMod = 0.0;
    this.oppAccuracyMod = 0.0;
    
    this.burnProb = 0.0;
    this.stunProb = 0.0;
    this.randomRebuffProb = 0.0;
    
    this.selfHealthAdd = 0;
    this.selfImmunity = false;
    
    this.allyHealthAdd = 0;
    this.allyImmunity = false;
    
    //effective number of rounds
    this.duration = 0;

	this.isSelected = function() { return this.selected; };    
    this.isActive = function() { return this.active; };

	this.toLog = function() { return "<strong>" + this.name + "</strong><br />" + this.description; };
}