import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePassed',
})
export class TimePassedPipe implements PipeTransform {
  transform(time: any): string {
    let Now: any = new Date();
    let timepassed = Math.abs(Now - time);
    let minutesPassed = Math.floor(timepassed / 60000);
    let secondsPassed = Math.floor(timepassed / 1000);
    let daysPassed = Math.floor((timepassed * 0.001) / 86400);

    if (daysPassed > 1) {
      return 'Uploaded ' + daysPassed + ' days ago';
    } else if (daysPassed <= 1 && minutesPassed > 1) {
      return 'Uploaded ' + minutesPassed + ' minutes ago';
    } else {
      return 'Uploaded ' + secondsPassed + ' seconds ago';
    }
  }
}
