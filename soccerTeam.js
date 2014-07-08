//create an object called soccerTeam, that contains the following properties:
//name (string), num_fans (number), location (string), wins (number), losses (number) 

var soccerTeam = {
    name: "Brasil",
    num_fans: 1000000,
    location: "Rio de Janeiro, Brasil",
    wins: 1000000,
    losses: 0
}


//add a property of "players," which is an array of names of players

    soccerTeam.players = ["Neymar", "Silva", "Marcelo", "Hulk"]  // why is this array nested in an object!!???

    
//Now add a method to your soccerTeam object called "showRoster" which will console.log each player's name on the team

    soccerTeam.showRoster = function() {
        for (i = 0; i < soccerTeam.players.length; i++) {
            console.log(soccerTeam.players[i])
                    
        }
};


//add a method called "showRecord" which will console.log the team's current win/loss record as a string (e.g. "43/2")
soccerTeam.showRecord = function() {
      console.log(soccerTeam.wins + "/" + soccerTeam.losses);
      
};

