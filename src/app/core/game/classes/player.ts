import { Entity } from './entity';
import { IPlayer } from '../../interfaces/iplayer';

export class Player extends Entity {
  private player: IPlayer;

  constructor() {
    super();
  }

  newPlayer() {
    this.init();
    const player = <IPlayer>{
      level: 1,
      experience: 0,
      stats: this.stats,
      isDead: false
    };
    this.player = player;
  }
}
