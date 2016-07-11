import { Component } from '@angular/core';
import { TimeService } from './time.service';

@Component({
    selector: 'current-time',
    template: `
        <p>{{ currentTime }}</p>
    `,
    providers: [TimeService]
})

export class CurrentTimeComponent {
    private currentTime;
    
    constructor(timeService: TimeService){  
        timeService.getCurrentTime((time)=>{
            this.currentTime = time;
        });
    }
}