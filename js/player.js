class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    GetCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance: this.distance
        })
    }
    static getplayerinfo(){
        var playersinforef = database.ref('players');
        playersinforef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}