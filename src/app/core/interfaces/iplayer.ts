import { Classes } from '../enums/classes.enum';
import { Races } from '../enums/races.enum';

import { IStats } from './istats';

export interface IPlayer {
  id: number;
  race: Races;
  class: Classes;
  level: number;
  experience: number;
  // Equip
  stats: IStats;
  // Cooldowns
  // Buffs
  // Nerfs
}
