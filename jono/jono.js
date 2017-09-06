console.log('Lesson 24: Homework 1.1');
//  Sukurti konstruktoriu Zaidejas su parametrais
//  Zaidejo vardas, zaistu varzybu kiekis, pelnytu 
//  tasku kiekis, pramestu tasku kiekis
//  Metodai: atvaizduoti rezultatyvuma, vid tasku 
//  kiekis per varzybas.

function Player(name, matches, points, missedPoints) {
	this.name = name;
	this.matches = matches;
	this.points = points;
	this.missedPoints = missedPoints;

	this.performance = function() {
		return (this.points + this.missedPoints) / matches;
	}

	this.avgPoints = function() {
		return points / matches;
	}
}
//console.log(Player);


console.log('Lesson 24: Homework 1.2');
// sukurti kelis zaidejus naudojant Zaidejas konstr.
// sudeti tuos zaidejus i masyva.

var playerA = new Player('John Flow', 4, 88, 44);
var playerB = new Player('Silver Cow', 10, 204, 70);
var playerC = new Player('Joe Smith', 10, 202, 65);
var playerD = new Player('Kiro Shimoto', 9, 188, 34);
var playerE = new Player('Keny Pou', 4, 88, 44);

var players = [playerA, playerB, playerC, playerD, playerE];
// console.log(players);


console.log('Lesson 24: Homework 1.3');
// rasti taikliausia zaideja

function bestPlayer(arr) {
	max = 0;
	for (var player in arr) {
		var p = arr[player].performance();
		if (p > max) {
			max = p;
			index = player;
		}
	}
	console.log(arr[index].name + ': ' + max.toFixed(2));
}
bestPlayer(players);


console.log('Lesson 24: Homework 1.4');
// daugiausiai tasku pelniusi zaideja

function mostPoints(arr) {
		var most = 0;
	for (var player in arr) {
		var p = arr[player].avgPoints();
		if (p > most) {
			most = p;
			index = player;
		}

	}
	console.log(arr[index].name + ': ' + most.toFixed(2));
}
mostPoints(players);

console.log('Lesson 24: Homework 1.4.1 - Jei keli žaidėjai daugiausiai pelnė taškų');
function mostPointsAll(arr) {
		var mostAll = [];
		var most = 0;
		var lastPlayer;
	for (var player in arr) {
		var p = arr[player].avgPoints();
		if (p >= most && player != lastPlayer) {
			mostAll.push([player,p]);
			lastPlayer = player;
			most = p;
			index = player;
		}

	}
	for (key in mostAll) {
		console.log(arr[mostAll[key][0]].name + ' ' + mostAll[key][1]);
	}
}
mostPointsAll(players);