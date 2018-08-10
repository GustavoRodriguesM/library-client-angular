import { AlertService } from "./alert.service";
import { Component, Input } from "@angular/core";
import { Alert, AlertType } from "./alert";

import swal from "sweetalert";

@Component({
  selector: "lib-alert",
  template: '<span></span>'
})
export class AlertComponent {
  constructor(private alertService: AlertService) {
    this.alertService.getAlert().subscribe(alert => {
      swal(alert.title, alert.message, this.getAlertClass(alert));
    });
  }

  getAlertClass(alert: Alert) {
    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return "success";
      case AlertType.WARNING:
        return "warning";
      case AlertType.DANGER:
        return "danger";
      case AlertType.INFO:
        return "info";
    }
  }
}
