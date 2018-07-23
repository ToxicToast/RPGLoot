export class Health {

  private base: number;
  private buffed: number;
  private nerfed: number;

  constructor() {
    this.base = 10;
    this.buffed = 0;
    this.nerfed = 0;
  }

  calculateHealth(level?: number) {
    if (!level) {
      level = 1;
    }
    return (this.base * ((level + this.buffed) - this.nerfed));
  }
}
