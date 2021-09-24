const team = {
  _players : [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11},

      {firstName: 'Filipe',
      lastName: 'Coutinho',
      age: 12},

      {firstName: 'Angel',
      lastName: 'Di Maria',
      age: 13}
  ],
  _games : [
    {
      opponent: 'Broncos', 
      teamPoints: 42, 
      opponentPoints: 27},

      {opponent: 'Bournemouth', 
      teamPoints: 38, 
      opponentPoints: 27},

      {opponent: 'Blackburn', 
      teamPoints: 36, 
      opponentPoints: 27}
    
  ], 
  get players (){
    return this._players;
  },

  get games(){
    return this._games;
  },
  
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName,
      LastName: lastName,
      age: age,
    };
    this.players.push(player);
  },

  addGame (opponent, teamPoints, opponentPoints) {
    let game = {
     opponent: opponent, 
     teamPoints: teamPoints, 
     opponentPoints: opponentPoints,
    };
  this.games.push(game);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Titans', 33, 28);
team.addGame('Lakers', 87, 44);
team.addGame('Heat', 54, 76);

console.log(team.players)
console.log(team.games)