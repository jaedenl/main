var availableCharacters = [ BigSwordGuy, SniperGirl, Mage, Djinn, Cyborg, Alien, Caveman, CowboyGuy, HiveDrone, SpaceGirl, Pirate, Witch ];

function BigSwordGuy()
{
    this.name = "Artur Hobbe";
	this.image = "bigsword.png";
    this.type = CharacterType.Physical;

    this.skills[0] = new SwordChop();
    this.skills[1] = new SweepingStrike();
    this.skills[2] = new DefensiveStance();
    this.skills[3] = new Focus();

	this.backstory = "Once a peaceful farmer, forced to take up the sword to defend his family and livelihood.  Hobbe quickly found out he was a better bladesman than farmer, and found work in the village as a sellsword."
}
BigSwordGuy.prototype = new Character();

function SniperGirl()
{
    this.name = "Artemis";
	this.image = "snipergirl.png";
    this.type = CharacterType.Finesse;

    this.skills[0] = new Headshot();
    this.skills[1] = new RicochetShot();
    this.skills[2] = new TakeAim();
    this.skills[3] = new Camouflage();

    this.backstory = "A crack-shot special forces veteran, this career soldier grew disinterested in civilian life after the war and turned to mercenary work. If you can afford her rate, and you can find her, maybe you can hire Artemis.";
}
SniperGirl.prototype = new Character();

function Mage()
{
    this.name = "Zocoma";
	this.image = "nopic.png";
    this.type = CharacterType.Magic;

    this.skills[0] = new Fireball();
    this.skills[1] = new LightningStorm();
    this.skills[2] = new DivineShield();
    this.skills[3] = new PoolMana();

    this.backstory = "This reclusive wizard had her first taste of fame and wealth after a quest to slay a dragon. Now Zocoma has a taste for the spotlight and uses her powers for profiteering.";
}
Mage.prototype = new Character();

function Djinn()
{
    this.name = "Odesai the Ancient";
	this.image = "nopic.png";
    this.type = CharacterType.Magic;

    this.skills[0] = new LightningStrike();
    this.skills[1] = new CloudBarrier();
    this.skills[2] = new HighWinds();
    this.skills[3] = new Wish();

    this.backstory = "He lifts.";
}
Djinn.prototype = new Character();

function Cyborg()
{
    this.name = "Proto";
	this.image = "cyborg.png";
    this.type = CharacterType.Finesse;

    this.skills[0] = new IntegratedBattleSystem();
    this.skills[1] = new ElectronicBarrier();
    this.skills[2] = new NanobotRepairs();
    this.skills[3] = new PassiveEffect();

    this.backstory = "After the hovertrain accident that killed his tycoon parents and left his body broken, He spent months in intensive care, clawing at the last shreds of his life. "
		+ "With the help of an experimental transhumanist program, Proto was offered a second chance. Now almost eighty percent cybernetic, Proto uses his lightning fast synapses "
		+ "and near indestructible body to fight intergalactic crime.";
}
Cyborg.prototype = new Character();

function Alien()
{
	this.name = "ALIEN";
	this.image = "nopic.png";
    this.backstory = "Emotionless as he completes his task. From planet Neptune.";
}
Alien.prototype = new Character();

function Caveman()
{
	this.name = "CAVEMAN";
	this.image = "caveman.png";
	this.backstory = "Always looking for a bigger challenge";
}
Caveman.prototype = new Character();

function CowboyGuy()
{
	this.name = "COWBOY GUY";
	this.image = "nopic.png";
	this.backstory = "Quick-witted gunslinger with unusually good luck";
}
CowboyGuy.prototype = new Character();

function HiveDrone()
{
	this.name = "HIVE DRONE";
	this.image = "nopic.png";
	this.backstory = "Mindless worker";
}
HiveDrone.prototype = new Character();

function SpaceGirl()
{
	this.name = "SPACE GIRL";
	this.image = "spacegirl.png";
	this.backstory = "An astronaut from the Canadian Space Program, very smart, space-age technology";
}
SpaceGirl.prototype = new Character();

function Pirate()
{
	this.name = "PIRATE";
	this.image = "nopic.png";
	this.backstory = "Captain of the Rusty Bucket Corsairs";
}
Pirate.prototype = new Character();

function Witch()
{
	this.name = "WITCH";
	this.image = "witch.png";
	this.backstory = "Purple and gold robed, wise, old";
}
Witch.prototype = new Character();