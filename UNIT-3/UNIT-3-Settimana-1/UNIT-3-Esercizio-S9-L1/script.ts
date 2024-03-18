interface Sim {
    credito: number;
    numeroChiamate: number;
}

class User implements Sim {
    constructor(public nome: string, public cognome: string, public credito: number, public numeroChiamate: number) {
        this.nome = nome
        this.cognome = cognome
        this.credito = credito
        this.numeroChiamate = numeroChiamate
    }

    ricarica(totale: number) {
        this.credito += totale
    }
    chiamata(minutiTotali: number) {
        const costoChimata = minutiTotali * 0.2 //20 centesimi 
        this.credito -= costoChimata
        this.numeroChiamate += minutiTotali
    }
    chiamata404() {
        return `credito disponipile ${this.credito}$`
    }
    getNumeroChiamata() {
        return `minuti in chiamata ${this.numeroChiamate}min`
    }
    azzeraChiamata() {
        return `credito disponipile ${this.numeroChiamate = 0}`
    }
}

const credito = new User(`marco`, `di candia`, 10, 20);
// parametri dei metodi
credito.ricarica(30)
credito.chiamata(1)
// consol log
console.log(credito.chiamata404());
console.log(credito.getNumeroChiamata());








