export class Stats {
  private baseHealth = 200;
  private baseMana = 100;
  private baseDamage = 10;
  //
  private playerLevel: number;

  constructor(level: number) {
    this.playerLevel = level;
  }

  public getTotalHealth(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseHealth, total, buffed, nerfed);
  }

  public getTotalMana(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseMana, total, buffed, nerfed);
  }

  public getTotalDamage(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseDamage, total, buffed, nerfed);
  }

  private calculateStat(base: number, total: number, buffed: number, nerfed: number): number {
    return (base * ((this.playerLevel + total + buffed) - nerfed));
  }
}
