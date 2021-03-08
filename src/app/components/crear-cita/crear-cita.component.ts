import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  sintomas: string = '';
  formularioIncorrecto: boolean = false;

  @Output() nuevaCita = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  agregarCita(): void {
    const all = [this.nombre, this.fecha, this.hora, this.sintomas];
    if (all.some((e) => e === '')) {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    const cita = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas,
    };
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }

  private resetCampos(): void {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
