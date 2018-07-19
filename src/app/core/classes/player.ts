import { IPlayer } from '../interfaces/iplayer';
import { IStats } from '../interfaces/istats';
import { Stats } from '../helpers/stats';

export class Player {
  public player: IPlayer;
  public healthBar: number;
  public manaBar: number;
  private stats: Stats;
  private level: number;

  constructor(level: number) {
    this.level = level;
    this.stats = new Stats(level);
    this.player = <IPlayer>{};
  }

  public init(): void {
    const stats = <IStats> {
      health: this.stats.getTotalHealth(10, 0, 0),
      mana: this.stats.getTotalMana(5, 0, 0),
      currentHealth: this.stats.getTotalHealth(10, 0, 0),
      currentMana: this.stats.getTotalMana(5, 0, 0),
      percentHealth: 100,
      percentMana: 100,
      damage: this.stats.getTotalDamage(1, 0, 0),
      armor: this.stats.getTotalDodge(1, 0, 0),
      crit: this.stats.getTotalCrit(1, 0, 0)
    };
    const payload = <IPlayer> {
      id: 0,
      race: null,
      class: null,
      level: this.level,
      experience: 0,
       // Equip
      stats,
      // Cooldowns
      // Buffs
      // Nerfs
      isDead: false
    };
    this.player = payload;
  }

  public checkDeath(health: number): boolean {
    if (health <= 0) {
      return true;
    } else {
      return false;
    }
  }

  public getDamageHealth(health: number, armor: number, attack: number): number {
    const newHealth = health - (attack - armor);
    if (newHealth >= health) {
      return health;
    } else {
      return newHealth;
    }
  }

  public updateHealthBar(current: number, total: number): number {
    let inPercent = current / total * 100;
    if (inPercent >= 100) {
      inPercent = 100;
    }
    return inPercent;
  }

  public updateManaBar(current: number, total: number): number {
    let inPercent = current / total * 100;
    if (inPercent >= 100) {
      inPercent = 100;
    }
    return inPercent;
  }
}
