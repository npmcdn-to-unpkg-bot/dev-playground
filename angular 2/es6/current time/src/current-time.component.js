import {Component, Inject} from '@angular/core';
import {TimeService} from './time.service';

@Component({
  selector: 'current-time',
  template: `
    <h2>{{ currentTime }}</h2>
  `
})

export class CurrentTimeComponent {
  constructor(@Inject(TimeService) _timeService){
    _timeService.getCurrentTime((time) => {
      this.currentTime = time;
    });
  }
}