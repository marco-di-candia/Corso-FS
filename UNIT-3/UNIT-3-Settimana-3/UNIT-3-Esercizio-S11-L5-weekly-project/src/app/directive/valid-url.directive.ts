import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validUrl]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidUrlDirective, multi: true }]
})
export class ValidUrlDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const url = control.value;
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocollo
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Dominio
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // oppure indirizzo IP
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Porta e percorso
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Parametri della query
      '(\\#[-a-z\\d_]*)?$','i'); // Anchor hash
    return pattern.test(url) ? null : { invalidUrl: true };
  }
}
