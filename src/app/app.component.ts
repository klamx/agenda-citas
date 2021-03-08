import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listCitas: any[] = [];

  agregarCita(cita: any) {
    this.listCitas = [...this.listCitas, cita];
    console.log('padre', this.listCitas);
  }

  eliminarCita(cita: any) {
    this.listCitas.splice(this.listCitas.indexOf(cita), 1);
  }
}
