import { Component } from '@angular/core';

import { Player } from './core/classes/player';

@Component({
  selector: 'loot-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loot';
  player: Player;

  constructor() {
    this.player = new Player();
    this.player.init();
  }
}
