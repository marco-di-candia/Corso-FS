import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validUrl]', // Selettore della direttiva
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidUrlDirective, multi: true }] // Fornitori della direttiva
})
export class ValidUrlDirective implements Validator {
  // Metodo di validazione
  validate(control: AbstractControl): ValidationErrors | null {
    const url = control.value; // Ottiene il valore dell'input
    // Definisce il pattern per verificare se l'URL è valido
    const pattern = new RegExp('^(https?:\\/\\/)?' + // Protocollo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // oppure indirizzo IP
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Porta e percorso
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // Parametri della query
      '(\\#[-a-z\\d_]*)?$', 'i'); // Anchor hash
    // Valida l'URL usando il pattern
    return pattern.test(url) ? null : { invalidUrl: true }; // Restituisce un oggetto di errore se l'URL non è valido
  }
}
