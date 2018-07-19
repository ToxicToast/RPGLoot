import { Component } from '@angular/core';

import { Player } from './core/classes/player';
import { Boss } from './core/classes/boss';
import { Items } from './core/classes/items';

@Component({
  selector: 'loot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playerLevel = 1;
  title = 'loot';
  player = new Player(this.playerLevel);
  boss = new Boss(this.playerLevel);
  items = new Items(this.playerLevel + 1);

  constructor() {
    this.player.init();
    this.boss.init();
    this.items.createItem();
    //
    // this.bossAttack();
  }

  private bossAttack() {
    const newHP = this.player.getDamageHealth(
      this.player.player.stats.currentHealth,
      this.player.player.stats.armor,
      57
    );
    const percent = this.player.updateHealthBar(newHP, this.player.player.stats.health);
    this.player.player.stats.percentHealth = percent;
    this.player.player.isDead = this.player.checkDeath(newHP);
  }
}
