import { Stats } from '../helpers/stats';
import { Races } from '../enums/races.enum';
import { IItem } from '../interfaces/iitem';
import { Items } from './items';
import { Player } from './player';
import { IPlayer } from '../interfaces/iplayer';
import { IBoss } from '../interfaces/iboss';
import { Boss } from './boss';
import { Classes } from '../enums/classes.enum';

export class Game {
  private playerData: IPlayer = <IPlayer>{};
  private bossData: IBoss = <IBoss>{};
  private itemData: IItem[] = [];

  private playerClass: Player;
  private bossClass: Boss;
  private itemClass: Items;

  constructor() {
    this.playerClass = new Player(1);
    this.bossClass = new Boss(1);
    this.itemClass = new Items(1);
  }

  public createPlayer(playerRace: Races, playerClass: Classes): void {
    const playerLevel = 1;
    const player = <IPlayer>{
      race: playerRace,
      class: playerClass,
      level: playerLevel,
      experience: 0,
      stats: {},
      isDead: false
    };
  }

  public loadPlayer(playerId: number): void {
    console.error('load Player #', playerId);
  }

  public createRandomItem(): void {
    const item = this.itemClass.createItem();
    this.itemData.push(item);
  }
}
