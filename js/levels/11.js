var levelTest;
var testtest = "TestOutput";
var oneone = Mario.oneone = function() {
  //The things that need to be passed in are basically just dependent on what
  //tileset we're in, so it makes more sense to just make one variable for that, so
  //TODO: put as much of this in the Level object definition as possible.
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.oneone,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),

    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)],
   goombaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
   },
   koopaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
   },
   flagPoleSprites: [
     new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
     new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
     new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
   ]
 });

  ground = [[0,69],[71,86],[89,153],[155,212]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  //interactable terrain
  //and enemies
  levelTest = level;
  level.putGoomba(22, 12);
  level.putGoomba(40, 12);
  level.putGoomba(50, 12);
  level.putGoomba(51, 12);
  level.putGoomba(82, 4);
  level.putGoomba(84, 4);
  level.putGoomba(100, 12);
  level.putGoomba(102, 12);
  level.putGoomba(114, 12);
  level.putGoomba(115, 12);
  level.putGoomba(122, 12);
  level.putGoomba(123, 12);
  level.putGoomba(125, 12);
  level.putGoomba(126, 12);
  level.putGoomba(170, 12);
  level.putGoomba(172, 12);
  level.putKoopa(35, 11);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};
