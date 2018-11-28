import { Component } from '@angular/core';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registro-angular-simple';
  alumnoArray: Alumno[] = [
    {id:1, nombre_completo: 'Rodrigo Beltrán', identidad: '4285973'},
    {id:2, nombre_completo: 'Monica Torrez', identidad: '3216547'},
    {id:3, nombre_completo: 'Jaime Veliz', identidad: '9876543'},
  ];

  selectedAlumno: Alumno = {id:0,nombre_completo:'',identidad:''};

  openForEdit(Alumno:Alumno): void{
    this.selectedAlumno = Alumno;
  }

  addOrEdit(): void{
    if(this.selectedAlumno.id === 0)
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = {id:0, nombre_completo:'',identidad:''};
  }
  delete(): void{
    if(confirm('Estas seguro de borrar el registro'))
    {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0,nombre_completo:'',identidad:''};
    }
  }
}
