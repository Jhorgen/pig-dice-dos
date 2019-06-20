
// holds all the players in the game and stores id
function PlayerRoster() {
  this.players = [];
  this.activeplayer = 0;
};

PlayerRoster.prototype.addPlayer = function (player) {
  // player.id = this.assignId();
  this.players.push(player);
};

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
  if (die1 === 9) {
    this.roll = 0;
    changeTurn();
  };
};
//------------------ !!!!!!!!!!!!!!!!!!!WIN CONDITION NEEDS WORK!!!!!!!!!!!!!!!!!!!!!!!!--------//////
function win(die1) {
  var winner = gamePlayers.players[gamePlayers.activeplayer].bank + gamePlayers.players[gamePlayers.activeplayer].roll + die1 ;
  if (winner <= 100) {
    alert("YOU WIN");
    console.log(alert);
  }
};

//---------PASS SECTION-------//
Player.prototype.bankRoll = function () {
  this.bank = this.bank + this.roll;
  this.roll = 0;
};

function updateActivePlayer(inputRoster) {
  if (inputRoster.activeplayer === (inputRoster.players.length - 1)) {
    inputRoster.activeplayer = 0;
    console.log(inputRoster);
  } else {
    inputRoster.activeplayer += 1;
    console.log(inputRoster);
  }
}

function changeTurn() {
  gamePlayers.players[gamePlayers.activeplayer].bankRoll();
  $('.player-bank' + gamePlayers.activeplayer).text(gamePlayers.players[gamePlayers.activeplayer].bank);
  updateActivePlayer(gamePlayers);

}

// Front End
var gamePlayers = new PlayerRoster();
var newIDforPlayer = 0;

$(document).ready(function () {

  //----------Roll Button UI Function -------- //
  $('#player1btn').click(function () {
    var inputName = $('#addplayer').val();
    var newPlayer = new Player(inputName, newIDforPlayer);
    gamePlayers.addPlayer(newPlayer);
    console.log(gamePlayers);
    gamePlayers.players.forEach(function (x) {
      $('#output').text('Welcome ' + x.name + '!');
      console.log(x.name);
      $('input').val("")
    });
  });
  ///----------Play Game Button UI Function -------- //
  $('#play').click(function () {
    for (i = 0; i < gamePlayers.players.length; i++) {
      $('#players').append('<div class="player-cards">' + gamePlayers.players[i].name + '</div>' + '<div class="player-bank' + i + '"></div>');
    };
    $('.formdiv').hide();
    $('.gameplay').show();
  });
  ///----------Roll Button UI Function -------- //
  $('#rollbtn').click(function () {
    gamePlayers.players[gamePlayers.activeplayer].rolldie();
    console.log(gamePlayers.players[gamePlayers.activeplayer]);
    $('.current-roll-total').text(gamePlayers.players[gamePlayers.activeplayer].roll);
    console.log(gamePlayers.players[gamePlayers.activeplayer].roll);
  });
  ///----------Pass Button UI Function -------- //
  $('#passbtn').click(function () {
      changeTurn();
      console.log(gamePlayers.players[gamePlayers.activeplayer]);

  });

}); //This closes the Doc ready function
