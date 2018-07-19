import { Component, Input } from "@angular/core";

@Component({
    selector: 'lib-vmessage',
    templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

    @Input() text = '';

}