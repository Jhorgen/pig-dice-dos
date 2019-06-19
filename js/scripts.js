// holds all the players in the game and stores id
function PlayerRoster() {
  this.players = [];
  this.activeplayer = 0;
};

PlayerRoster.prototype.addPlayer = function (player) {
  // player.id = this.assignId();
  this.players.push(player);
};

// PlayerRoster.prototype.assignId = function () {
//   this.playerId += 1;
//   return this.playerId;
//
// };

// the template for each player
function Player(name, playerID) {
  this.name = name;
  this.playerid = newIDforPlayer += 1;
  this.roll = 0;
  this.bank = 0;
  };

// -------DICE SECTION ------- //

Player.prototype.rolldie = function () {
  var die1 = Math.floor(Math.random() * 6) + 1;
  this.roll = this.roll + die1;
};

//---------PASS SECTION-------//
Player.prototype.bankRoll = function () {
    this.bank = this.bank + this.roll;
    this.roll = 0;
    };

function updateActivePlayer (inputRoster){
  console.log(inputRoster.activeplayer);
  if (inputRoster.activeplayer === (inputRoster.players.length - 1)) {
    inputRoster.activeplayer = 0;
    console.log("activeplayer is four!!");
    console.log(inputRoster);
  }else{
    inputRoster.activeplayer += 1;
    console.log(inputRoster)
  }
}

function changeTurn () {

  //gamePlayers.players[gamePlayers.activeplayer].bankRoll();
  updateActivePlayer(gamePlayers);

}

// Front End
var gamePlayers = new PlayerRoster();
var newIDforPlayer = 0;

$(document).ready(function () {
  $('#player1btn').click(function () {
    var inputName = $('#addplayer').val();
    var newPlayer = new Player(inputName, newIDforPlayer);
    gamePlayers.addPlayer(newPlayer);
    console.log(gamePlayers);
  });

  $('#rollbtn').click(function () {
    gamePlayers.players[gamePlayers.activeplayer].rolldie();
    console.log(gamePlayers.players[gamePlayers.activeplayer]);
  });

  $('#passbtn').click(function () {
    changeTurn();
    console.log(gamePlayers.players[gamePlayers.activeplayer]);
  });



});
