import GAME_CONFIG from "../core/game-config";

export default class GameContainer extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene) {
    super(scene);

    this.init();
  }

  private init(): void {
    const sprite: Sprite = new Phaser.GameObjects.Sprite(this.scene, 0, 0, 'phaser-logo');
    this.add(sprite);

    sprite.x = GAME_CONFIG.baseWidth * 0.5;
    sprite.y = GAME_CONFIG.baseHeight * 0.5;
  }
}
