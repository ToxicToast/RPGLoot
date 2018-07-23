import { Stats } from '../../helpers/stats';
import { IStats } from '../../interfaces/istats';

export class Entity {
  public level: number;
  public stats: IStats;

  constructor() { }

  init(level?: number, stats?: IStats) {
    if (!level) {
      this.level = 1;
    }
    if (!stats) {
      const playerStats = new Stats(this.level);
      const stats = <IStats> {
        health: playerStats.getTotalHealth(10, 0, 0),
        mana: playerStats.getTotalMana(5, 0, 0),
        currentHealth: playerStats.getTotalHealth(10, 0, 0),
        currentMana: playerStats.getTotalMana(5, 0, 0),
        damage: playerStats.getTotalDamage(1, 0, 0),
        armor: playerStats.getTotalDodge(1, 0, 0),
        crit: playerStats.getTotalCrit(1, 0, 0),
        percentHealth: 100,
        percentMana: 100,
      };
      this.stats = stats;
    }
  }
}
