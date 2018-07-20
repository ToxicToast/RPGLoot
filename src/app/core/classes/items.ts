import { Rarities } from '../enums/rarities.enum';
import { IItem } from '../interfaces/iitem';

export class Items {
  private affixNames = [
    'Blindness',
    'Bravery',
    'Burning',
    'Burrowing',
    'Conjuration',
    'Darkness',
    'Dawn',
    'Death',
    'Deception',
    'Defense',
    'Deflection',
    'Delerium',
    'Desire',
    'Despair',
    'Destruction',
    'Domination',
    'Doom',
    'Dragonslaying',
    'Dreaming',
    'Durability',
    'Dusk',
    'Evocation',
    'Fire',
    'Flame',
    'Freezing',
    'Fury',
    'Glory',
    'Growth',
    'Healing',
    'Heroism',
    'Hope',
    'Horror',
    'Ice',
    'Illusion',
    'Impact',
    'Imprisonment',
    'Incineration',
    'Insanity',
    'Invulnerability',
    'Invisibility',
    'Justice',
    'Life',
    'Light',
    'Lightlessness',
    'Lightning',
    'Love',
    'Madness',
    'Malice',
    'Mercy',
    'Midnight',
    'Obedience',
    'Peace',
    'Petrification',
    'Piercing',
    'Planeswalking',
    'Prophecy',
    'Rage',
    'Resurrection',
    'Retribution',
    'Seeking',
    'Shadow',
    'Shadowbinding',
    'Shattering',
    'Shieldbreaking',
    'Shielding',
    'Shocking',
    'Siege',
    'Sightblinding',
    'Silence',
    'Smiting',
    'Solidity',
    'Soul',
    'Soulbinding',
    'Soulcutting',
    'Spellbreaking',
    'Starlight',
    'Stealth',
    'Stonecutting',
    'Striking',
    'Sundering',
    'the Angel',
    'the Banshee',
    'the Centaur',
    'the Demon',
    'the Desert',
    'the Dragon',
    'the Dwarf',
    'the Elf',
    'the Elements',
    'the Fairie',
    'the Gargoyle',
    'the Genie',
    'the Ghost',
    'the Ghoul',
    'the Giant',
    'the Gnome',
    'the Goblin',
    'the God',
    'the Gremlin',
    'the Gryphon',
    'the Homunculus',
    'the Lich',
    'the Mermaid',
    'the Monster',
    'the Ogre',
    'the Orc',
    'the Titan',
    'the Troll',
    'the Vampire',
    'the Werebeast',
    'the Werewolf',
    'the Wight',
    'Thought',
    'Townsaving',
    'Treachery',
    'True Sight',
    'Twilight',
    'Valor',
    'Vengeance',
    'Void',
    'Warding',
    'Wayfinding',
    'Weightlessness',
    'Wind',
    'Winter',
    'Wisdom',
    'Woundhealing'
  ];
  // NAME -> STAT -> PER LEVEL
  private affixes = [
    ['Health', 15, 15],
    ['Mana', 15, 15],
    ['Dodge', 7, 0],
    ['Critical', 10, 0],
    ['Damage', 5, 5],
    ['MagicPow', 7, 7],
    ['ShadowDMG', 10, 10],
    ['NatureDMG', 10, 10],
    ['IceDMG', 10, 10],
    ['FireDMG', 10, 10],
    ['BloodDMG', 10, 10],
    ['StormDMG', 10, 10],
    ['HealPow', 7, 7],
    ['Lifesteal', 6, 6]
  ];
  private itemSlotNames = [
    'Talisman',
    'Helmet',
    'Ring',
    'Shoulders',
    'Chestplate',
    'Book',
    'Bracelet',
    'Leggings',
    'Gloves',
    'Weapon',
    'Boots',
    'Necklace'
  ];
  private playerLevel: number;
  public generatedItem: IItem;

  constructor(playerLevel: number) {
    this.playerLevel = playerLevel;
    this.generatedItem = <IItem>{};
  }

  public createItem(): IItem {
    const rarities = [];
    rarities.push(Rarities.COMMON);
    rarities.push(Rarities.MAGIC);
    rarities.push(Rarities.RARE);
    rarities.push(Rarities.EPIC);
    rarities.push(Rarities.LEGENDARY);
    //
    const randomslot = Math.floor(Math.random() * 12 + 1);
    const randomaffix = Math.floor(Math.random() * this.affixNames.length);
    const affixNumber = Math.floor(Math.random() * rarities.length) + 1;
    //
    this.randomItem(randomslot, affixNumber, randomaffix, rarities);
    return this.generatedItem;
  }

  private randomItem(slot: number, affixnumber: number, randomaffix: number, rarities: string[]) {
    this.generatedItem = <IItem>{};
    for (let i = 0; i < affixnumber; i++) {
      if (i === 0) {
        const itemName = `${this.itemSlotNames[slot - 1]} of ${this.affixNames[randomaffix]}`;
        const itemRarity = rarities[affixnumber - 1];
        //
        this.generatedItem.name = itemName;
        this.generatedItem.slot = slot;
        this.generatedItem.stats = [];
        this.generatedItem.rarity = itemRarity;
        this.generatedItem.value = affixnumber * this.playerLevel;
        this.generatedItem.upgrade = {
          level: 0,
          stats: []
        };
        this.generatedItem.level = this.playerLevel;
        this.generatedItem.totalstats = [];
        //
        for (let g = 0; g < this.affixes.length; g++) {
          this.generatedItem.totalstats[this.affixes[g][0]] = 0;
          this.generatedItem.stats[this.affixes[g][0]] = [0, 0, 0];
          this.generatedItem.upgrade.stats[this.affixes[g][0]] = [0, 0, 0];
        }
      }
      const randomstats = Math.floor(Math.random() * this.affixes.length);
      const randomStatName = this.affixes[randomstats][0];
      const firstRandomStat = this.affixes[randomstats][1];
      const secondRandomStat = this.affixes[randomstats][2];
      //
      const firstRandomStatValue = + firstRandomStat;
      const secondRandomStatValue = + secondRandomStat;
      //
      const statnumber = Math.floor(Math.random() * (firstRandomStatValue + (secondRandomStatValue * this.playerLevel)));
      const statMax = firstRandomStatValue + (secondRandomStatValue * this.playerLevel);
      //
      let statColor = 'Common';
      if (statnumber > statMax * 0.2) {
        statColor = 'Magic';
      } else if (statnumber > statMax * 0.4) {
        statColor = 'Rare';
      } else if (statnumber > statMax * 0.6) {
        statColor = 'Epic';
      } else if (statnumber > statMax * 0.8) {
        statColor = 'Legendary';
      }
      this.generatedItem.stats[randomStatName] = [statnumber, statMax, statColor];
      this.generatedItem.totalstats[randomStatName] = statnumber;
    }
  }
}
