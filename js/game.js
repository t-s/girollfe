var game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
               { preload: preload, 
                 create: create, 
                 update: update, 
                 render: render });

var parent;
var child;

var head;
var leg1;
var leg2;
var leg3;
var leg4;

var tail;

var step1 = true;
var step2;

var head_move_up = false;
var head_move_down = true;

legs = [];
legs.push(leg1,leg2,leg3,leg4);

function preload() {

    game.load.image('body', 'img/body.png');
    game.load.image('leg', 'img/leg.png');
    game.load.image('head', 'img/head.png');
    game.load.image('tail', 'img/tail.png');

}

function create() {

    parent = game.add.sprite(100,200,'body')
    //head
    head = parent.addChild(game.make.sprite(40, -90, 'head'));
    //front front leg
    leg1 = parent.addChild(game.make.sprite(65, 55, 'leg'));
    leg1.pivot.x = 0;
    //front rear leg
    leg2 = parent.addChild(game.make.sprite(50, 55, 'leg'));
    leg2.pivot.x = 0;
    //back front leg
    leg3 = parent.addChild(game.make.sprite(25,55,'leg'));
    leg3.pivot.x = 0;
    //back rear leg
    leg4 = parent.addChild(game.make.sprite(10,55,'leg'));
    leg4.pivot.x = 0;
    //tail
    tail = parent.addChild(game.make.sprite(15, 50, 'tail'));
}

function update() {

  parent.x += 1;

  if (head.y > -85) {
      head_move_down = false;
      head_move_up = true;
  } else if (head.y < -91) {
      head_move_up = false;
      head_move_down = true;
  }
  if (head_move_up) {
    head.y -= 0.18;
  } else if (head_move_down) {
    head.y += 0.18;
  }
  if (leg1.rotation > 0.25) {
    step1 = false;
    step2 = true;  
  } if (leg1.rotation < -0.25) {
    step1 = true;
    step2 = false;
  } if (step1) {
    leg1.rotation += 0.015;
  } if (step2) {
    leg1.rotation -= 0.015;
  }
  if (step2) {
    leg2.rotation += 0.013;
  } if (step1) {
    leg2.rotation -= 0.013;
  }
  if (step2) {
    leg3.rotation -= 0.016;
  } if (step1) {
    leg3.rotation += 0.016;
  }
  if (step2) {
    leg4.rotation += 0.014;
  } if (step1) {
    leg4.rotation -= 0.014;
  }
  tail.rotation -= 0.2;
}

function render() {
  
  //game.debug.text(leg1.rotation, 100, 100);
  //game.debug.text("headmovedown is " + head_move_down, 100, 360);
  //game.debug.text("headmoveup is " + head_move_up, 100, 380);
  //game.debug.text("head.y is " + head.y, 100, 400);

}
