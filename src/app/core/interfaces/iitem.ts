export interface IItem {
  name: string;
  slot: number;
  stats: any;
  rarity: string;
  value: number;
  upgrade: {
    level: number;
    stats: any;
  };
  level: number;
  totalstats: any;
}
