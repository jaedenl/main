function SwordChop()
{
    this.name = "Sword Chop";
    this.type = SkillType.Offensive;
    this.attackValue = 70;
    this.description = "Single target attack that deals damage.";
}
SwordChop.prototype = new Skill();

function SweepingStrike()
{
    this.name = "Sweeping Strike";
    this.type = SkillType.Offensive;
    this.attackValue = 50;
    this.description = "AoE attack hitting both active enemy mercs.";
    this.multiTarget = true;
}
SweepingStrike.prototype = new Skill();

function DefensiveStance()
{
    this.name = "Defensive Stance";
    this.type = SkillType.Defensive;
    this.description = "Blocks incoming damage for the round.";
    this.blocksDamage = true;
}
DefensiveStance.prototype = new Skill();

function Focus()
{
    this.name = "Focus";
    this.type = SkillType.Reusable;
    this.selfAttackMod = 1.5;
    this.duration = -1;
    this.description = "Strengthens the attack stat (+50%) until big sword guy is swapped to an inactive state, or dies.";
}
Focus.prototype = new Skill();

function Headshot()
{
    this.name = "Headshot";
    this.type = SkillType.Offensive;
    this.attackValue = 100;
    this.accuracy = 0.4;
    this.description = "High damage single-target attack, with a high chance (60%) of missing.";
}
Headshot.prototype = new Skill();

function RicochetShot()
{
    this.name = "Ricochet Shot";
    this.type = SkillType.Offensive;
    this.attackValue = 50;
    this.multiTarget = true;
    this.accuracy = 0.2;
    this.description = "Medium damage to both frontline targets. Very high chance (80%) of missing. Critical hit results in Penetrating Shot that causes bleeding.";
}
RicochetShot.prototype = new Skill();

function TakeAim()
{
    this.name = "Take Aim";
    this.type = SkillType.Reusable;
    this.selfAccuracyMod = 1.5;
    this.description = "Increases accuracy for next turn (reduces chance of missing by 50%)";
}
TakeAim.prototype = new Skill();

function Camouflage()
{
    this.name = "Camouflage";
    this.type = SkillType.Defensive;
    this.oppAccuracyMod = 0.5;
    this.duration = 3;
    this.description = "Become harder to hit (50% chance attacks will miss) for next three turns. Effect is lost when Headshot or Ricochet Shot is used.";
}
Camouflage.prototype = new Skill();

function Fireball()
{
    this.name = "Fireball";
    this.type = SkillType.Offensive;
    this.attackValue = 50;
    this.burnProb = 0.33;
    this.description = "Medium damage single-target attack. Low chance of causing burn.";
}
Fireball.prototype = new Skill();

function LightningStorm()
{
    this.name = "Lightning Storm";
    this.type = SkillType.Offensive;
    this.attackValue = 30;
    this.multiTarget = true;
    this.stunProb = 0.33;
    this.description = "Low damage to both frontline targets. Low chance of causing Stun.";
}
LightningStorm.prototype = new Skill();

function DivineShield()
{
    this.name = "Divine Shield";
    this.type = SkillType.Defensive;
    this.blocksDamage = true;
    this.repeatable = false;
    this.description = "Prevents next attack from damaging work. Cannot be used twice in a row by same merc.";
}
DivineShield.prototype = new Skill();

function PoolMana()
{
    this.name = "Pool Mana";
    this.type = SkillType.Reusable;
    this.selfAttackMod = 1.5;
    this.description = "Increases attack power significantly (+50%) for next turn.";
}
PoolMana.prototype = new Skill();

function LightningStrike()
{
    this.name = "Lightning Strike";
    this.type = SkillType.Offensive;
    this.attackValue = 25;
    this.stunProb = 0.8;
    this.description = "Calls down a single bolt of lightning, deals low damage but has a chance to stun.";
}
LightningStrike.prototype = new Skill();

function CloudBarrier()
{
    this.name = "Cloud Barrier";
    this.type = SkillType.Defensive;
    this.selfDefenseMod = 1.25;
    this.selfImmunity = true;
    this.description = "Surrounds himself in protective clouds, increasing defense (+25%) and receives the immunity buff.";
}
CloudBarrier.prototype = new Skill();

function HighWinds()
{
    this.name = "High Winds";
    this.type = SkillType.Reusable;
    this.allySpeedMod = 1.5;
    this.oppSpeedMod = 0.5;
    this.duration = 4;
    this.description = "Summons high winds across the battlefield, increasing the speed of allies(+50%) and reducing the speed of enemies (-50%). Lasts 3-5 rounds.";
}
HighWinds.prototype = new Skill();

function Wish()
{
    this.name = "Wish";
    this.type = SkillType.Offensive;
    this.allyAttackMod = 1.25;
    this.allyDefenseMod = 1.25;
    this.allySpeedMod = 1.25;
    this.allyImmunity = true;
    this.allyHealthAdd = 25;
    this.description = "Grants an ally increased attack, defence, speed, (+25%) immunity, and minor healing (+25 HP).";
}
Wish.prototype = new Skill();

function IntegratedBattleSystem()
{
    this.name = "Integrated Battle System";
    this.type = SkillType.Offensive;
    this.attackValue = 50;
    this.randomRebuffProb = -0.25;
    this.description = "Deals medium damage and has a chance to apply a random debuff (-25%) to the target.";
}
IntegratedBattleSystem.prototype = new Skill();

function ElectronicBarrier()
{
    this.name = "Electronic Barrier";
    this.type = SkillType.Reusable;
    this.multiTarget = true;
    this.oppAttackMod = 0.8;
    this.description = "Deploy a large energy barrier. Reduces the effectiveness of incoming attacks for both active mercs.";
}
ElectronicBarrier.prototype = new Skill();

function NanobotRepairs()
{
    this.name = "Nanobot Repairs";
    this.type = SkillType.Defensive;
    this.selfHealthAdd = 50;
    this.selfDefenseMod = 1.1;
    this.duration = 2;
    this.description = "Repairs damage to his armour, and adapts it to the situation. This skill regenerates a moderate amount of HP (+50 HP) over two turns, and increases defence (+10%) with each use.";
}
NanobotRepairs.prototype = new Skill();

function PassiveEffect()
{
    this.name = "Passive Effect";
    this.type = SkillType.Offensive;
    this.selfAttackMod = 1.5;
    this.selfSpeedMod = 1.5;
    this.description = "Emergency Systems Engage: When below 20% HP, Attack and Speed is greatly increased (+50%). Effect ends if HP rises above 20%.";
    
    this.setActive = function(hp)
    {
        active = (hp < 20 ? true : false);
    };
}
PassiveEffect.prototype = new Skill();