import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css'],
})
export class ListCitasComponent implements OnInit {
  @Input() listCitas: any;
  @Output() eliminar = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  eliminarCita(cita: any): void {
    this.eliminar.emit(cita);
  }
}
