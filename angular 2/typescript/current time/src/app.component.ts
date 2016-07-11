import { Component } from '@angular/core';
import { CurrentTimeComponent } from './current-time.component';
import { TimeService } from './time.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Current Time</h1>
        <current-time></current-time>
    `,
    directives: [CurrentTimeComponent],
    providers: [TimeService]
})
export class AppComponent {
    
}