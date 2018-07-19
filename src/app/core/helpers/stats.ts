import { Utils } from '../utils';

export class Stats {
  private utils = new Utils();
  //
  private baseHealth = 5;
  private baseMana = 4;
  private baseDamage = 2;
  private baseDodge = 1;
  private baseCrit = 0.3;
  //
  private playerLevel: number;

  constructor(level: number) {
    this.playerLevel = level;
  }

  public getTotalHealth(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseHealth, total, buffed, nerfed);
  }

  public setTotalHealth(currentHealth: number, damage: number, armor: number): number {
    return currentHealth - (armor - damage);
  }

  public getTotalMana(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseMana, total, buffed, nerfed);
  }

  public setTotalMana(currentMana: number, spent: number): number {
    return currentMana - spent;
  }

  public getTotalDamage(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseDamage, total, buffed, nerfed);
  }

  public getTotalDodge(total: number, buffed: number, nerfed: number): number {
    return this.calculateStat(this.baseDodge, total, buffed, nerfed);
  }

  public getTotalCrit(total: number, buffed: number, nerfed: number): number {
    const number = this.calculateStat(this.baseCrit, total, buffed, nerfed);
    return this.utils.roundNumber(number, 2);
    // this.calculateStat(this.baseCrit, total, buffed, nerfed).toFixed(2);
  }

  private calculateStat(base: number, total: number, buffed: number, nerfed: number): number {
    return (base * ((this.playerLevel + total + buffed) - nerfed));
  }
}
