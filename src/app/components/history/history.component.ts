import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private pacientesService: PacientesService
  ) {
    this.formulario = new FormGroup({
      id: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      sintomas: new FormControl('', Validators.required),
      diagnostico: new FormControl('', Validators.required),
      tratamiento: new FormControl('', Validators.required),
      observaciones: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.pacientesService.addPaciente(this.formulario.value);
    console.log(response);
  }


}
