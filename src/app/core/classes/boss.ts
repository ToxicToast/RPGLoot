import { IBoss } from '../interfaces/iboss';

export class Boss {
  public boss: IBoss;
  private playerLevel: number;
  private baseHealth = 25;
  private baseDamage = 5;

  constructor(level: number) {
    this.playerLevel = level + 1;
    this.boss = <IBoss>{ };
  }

  public init(): void {
    this.boss = <IBoss>{
      level: this.playerLevel,
      health: this.calculateHealth(),
      damage: this.calculateDamage(),
      isDead: false
    };
  }

  public checkDeath(): boolean {
    return false;
  }

  private calculateHealth(): number {
    return this.playerLevel * (this.baseHealth + ((this.playerLevel / 10) * 250));
  }

  private calculateDamage(): number {
    return this.playerLevel * this.baseDamage;
  }
}
