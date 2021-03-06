import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { MonitoringService } from '../_services/monitoring.service';

@Injectable()
export class MonitoringErrorHandler extends ErrorHandler {
    constructor(private injector: Injector) {
        super();
    }

    handleError(error: any): void {
        const monitoringService = this.injector.get(MonitoringService);
        monitoringService.logError(error);
        super.handleError(error);
    }
}
