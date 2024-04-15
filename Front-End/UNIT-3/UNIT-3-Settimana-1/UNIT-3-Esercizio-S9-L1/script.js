var User = /** @class */ (function () {
    function User(nome, cognome, credito, numeroChiamate) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    User.prototype.ricarica = function (totale) {
        this.credito += totale;
    };
    User.prototype.chiamata = function (minutiTotali) {
        var costoChimata = minutiTotali * 0.2; //20 centesimi 
        this.credito -= costoChimata;
        this.numeroChiamate += minutiTotali;
    };
    User.prototype.chiamata404 = function () {
        return "credito disponipile ".concat(this.credito, "$");
    };
    User.prototype.getNumeroChiamata = function () {
        return "minuti in chiamata ".concat(this.numeroChiamate, "min");
    };
    User.prototype.azzeraChiamata = function () {
        return "credito disponipile ".concat(this.numeroChiamate = 0);
    };
    return User;
}());
var credito = new User("marco", "di candia", 10, 20);
// parametri dei metodi
credito.ricarica(30);
credito.chiamata(1);
// consol log
console.log(credito.chiamata404());
console.log(credito.getNumeroChiamata());
