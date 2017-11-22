function BigSwordGuy()
{
    this.name = "";
    this.type = CharacterType.Physical;

    this.skills[0] = new SwordChop();
    this.skills[1] = new SweepingStrike();
    this.skills[2] = new DefensiveStance();
    this.skills[3] = new Focus();

	this.backstory = "A simple man with simple origins. A peaceful farmer forced to take up the sword to defend his family and livelihood. Big sword guy quickly found out he was a better swordsman than farmer, and began working as a sword for hire."
}
BigSwordGuy.prototype = new Character();

function SniperGirl()
{
    this.name = "";
    this.type = CharacterType.Finesse;

    this.skills[0] = new Headshot();
    this.skills[1] = new RicochetShot();
    this.skills[2] = new TakeAim();
    this.skills[3] = new Camouflage();

    this.backstory = "A military sniper war veteran that turned to freelance mercenary work after the war ended.";
}
SniperGirl.prototype = new Character();

function Mage()
{
    this.name = "";
    this.type = CharacterType.Magic;

    this.skills[0] = new Fireball();
    this.skills[1] = new LightningStorm();
    this.skills[2] = new DivineShield();
    this.skills[3] = new PoolMana();

    this.backstory = "A woodland mage seeking to use their powers for profit.";
}
Mage.prototype = new Character();

function DjinnOfStorms()
{
    this.name = "";
    this.type = CharacterType.Magic;

    this.skills[0] = new LightningStrike();
    this.skills[1] = new CloudBarrier();
    this.skills[2] = new HighWinds();
    this.skills[3] = new Wish();

    this.backstory = "This character is meant to be a support type character. Buff and mean looking. No legs, just a torso that floats on a trail of clouds.";
}
DjinnOfStorms.prototype = new Character();

function Cyborg()
{
    this.name = "";
    this.type = CharacterType.Finesse;

    this.skills[0] = new IntegratedBattleSystem();
    this.skills[1] = new ElectronicBarrier();
    this.skills[2] = new NanobotRepairs();
    this.skills[3] = new PassiveEffect();

    this.backstory = "This character is meant to be a tank type character. Clunky futuristic looking suit of armour with all sorts of tech integrated into it. Not holding any weapon, but rather attacks with weapons that emerge out of his armour.";
}
Cyborg.prototype = new Character;

