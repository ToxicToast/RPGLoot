import { IPlayer } from '../interfaces/iplayer';
import { IStats } from '../interfaces/istats';
import { Stats } from '../helpers/stats';

export class Player {
  private player: IPlayer;

  public init() {
    const stats = <IStats>{};
    const payload = <IPlayer>{};
    //
    console.error(payload, stats);
  }
}
