import { Component, Inject } from '@angular/core';
import { DataService } from './core/services/data/data.service';
import { CustomLogService } from './core/services/log/CustomLog.service';
import { LogService } from './core/services/log/Log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private dataService: DataService,
    @Inject(LogService) private logService: CustomLogService
  ) {
    this.dataService.getData().subscribe((data) => {
      console.log('RES', data);
      // this.logService.info(JSON.stringify(data, null, 4));
    });

    // this.logService.warning('This is clear warning');
  }
  title = 'dependency-injection';
}
