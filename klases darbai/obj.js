console.log('konstruktoriai...')

//sukuriam brezini trikampiui

//brezinys (function constructor)
function Triangle(a, b, spalva) {
    this.krastineA = a;
    this.krastineB = b;
    this.color = spalva;

    this.getArea = function () {
        var area = this.krastineA * this.krastineB / 2;
        console.log('trikampio plotas yra'+area)
        return area;
    }
    this.getIzambine = function () {
        var izambine = Math.sqrt(this.krastineA * this.krastineA + this.krastineB * this.krastineB);
        return izambine;
    }
    this.getInfo = function () {
        console.log('plotas:' + this.getArea());
        console.log('perimetras' + this.getPerimeter());
        console.log('izambine' + this.getIzambine());
    }
    this.compare = function (other) {
        if (this.krastineA > other.krastineA) {
            console.log('trikampis kurio spalva '+this.color+' krastine '+this.krastineA )
        } else {
            console.log('trikampis kurio spalva '+this.color+' krastine '+this.krastineA )
        }
    }


    this.getPerimeter = function () {
        var per = this.krastineA + this.krastineB + this.getIzambine()
        return per
    }
}

//objekto sukurimas naudojant konstruktoriu
var tr1 = new Triangle(5, 9, 'raudonas');
//tr1.getArea();
//tr1.getIzambine();
var tr2 = new Triangle(4, 11, 'zalias');
//tr1.getInfo()

tr1.compare(tr2)

/*konstruktorius preke -pavadinimas, kaina, geliojimo metai */

function Preke(name, price, date){
    this.name= name;
    this.price=price;
    this.date=date;
    this.timeInSupply=function(currentYear){
        return currentYear-this.date;
    }
}
var prekes =[];
prekes[0]=new Preke ('agurkas', 1.44, 1988);
prekes[1]=new Preke ('morka', 0.15, 2005);
prekes[2]=new Preke ('obuolys', 0.50, 2016);
prekes[3]=new Preke ('rope', 1.15, 2017);
prekes[4]=new Preke ('krapai', 0.90, 2015);

var max=0;
var indexas=0;
prekes.forEach(function(el){
    if(el.price>max){
        max=el.price
    }
})
console.log(max, indexas)

//ND 
