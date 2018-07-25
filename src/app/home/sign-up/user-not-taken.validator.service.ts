import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';

import { SignUpService } from './signup.service';

@Injectable({
    providedIn: 'root'
})
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService){}

    checkEmailTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(data => this.signUpService.checkEmailTaken(data)))
                .pipe(map(isTaken => isTaken? { emailTaken: true}: null))
                .pipe(first());
        }
    }

}