import { Entity } from './Entity';
import { Health } from './Health';

export class Player extends Entity {
  private health: Health;

  constructor() {
    super();
    this.health = new Health();
    //
    this.createPlayer();
  }

  createPlayer() {
    const health = this.health.calculateHealth();
    const stats = {
      health: {
        total: health,
        current: health
      }
    }
    console.error(stats);
  }
}
