console.log('konstruktoriai...')

// ND
//  Sukurti konstruktoriu Zaidejas su parametrais
//  Zaidejo vardas, zaistu varzybu kiekis, pelnytu 
//  tasku kiekis, pramestu tasku kiekis
//  Metodai: atvaizduoti rezultatyvuma, vid tasku 
//  kiekis per varzybas.

// sukurti kelis zaidejus naudojant Zaidejas konstr.
// sudeti tuos zaidejus i masyva. 
// rasti taikliausia zaideja
// daugiausiai tasku pelniusi zaideja


// 1.1. Metodai: atvaizduoti rezultatyvuma, vid tasku 
// kieki per varzybas.
function Zaidejas (name, games, goals, missedGoals){
    this.name= name;
    this.games=games;
    this.goals=goals;
    this.missedGoals=missedGoals;
    
    this.rezultatyvumas= function(){
        return(this.goals+this.missedGoals)/games;
    }
    
    this.avgPoints= function(){
        return goals/games;
    }
}
console.log (Zaidejas);

//1.2. sukurti kelis zaidejus naudojant Zaidejas konstr.
var playerA= new Zaidejas ('Juozas', 10, 15, 0);
var playerB= new Zaidejas('Petras', 3, 2, 9);
var playerC= new Zaidejas('Kazys', 10, 1, 8);
var playerD= new Zaidejas('Vytas', 6, 3, 9);
var playerE= new Zaidejas('Algis', 14, 10, 6);
var playerF= new Zaidejas('Tomas', 11, 4, 12);

// sudeti ziadejus i masyva
var players= [playerA, playerB, playerC, playerD, playerE, playerF];

console.log(players);

// rasti taikliausia zaideja

function bestPlayer (arr){
    max=0;
    for(var player in arr){
        var p = arr[player].rezultatyvumas();
        if(p > max){
            max=p;
            index= player;
        }
    }
    console.log('taikliausias zaidejas yra ' + arr[index].name + ':' + max.toFixed());
}
bestPlayer(players);

// daugiausiai tasku pelniusi zaideja

function maxPoints (arr){
    var most=0;
    for (var player in arr){
        var p = arr[player].avgPoints();
        if (p > most){
            most=p;
            index=player;
        }
    }
    
    console.log('daugiausiai tasku pelne ' + arr[index].name +':'+most.toFixed());
    
}
maxPoints(players);



















