import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Imagen } from 'src/app/model/Imagen';
import { PruebaService } from 'src/app/services/prueba.service';
//import Validation from './utils/validation';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  form!: FormGroup;
  submitted = false;
  private fotoSeleccionada!: File;
  gallery: any = ['Gallery 1', 'Gallery 2', 'Gallery 3', 'Gallery 4']

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  constructor(private formBuilder: FormBuilder,private prueba:PruebaService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        descripcion: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        imageInput:['',Validators.required],
        tipo: ['', [Validators.required]]
        
      },
      
      {
       // validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  

  onSubmit(): void {
    console.log("lo mejor");
    

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.subirFoto();
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  // Choose city using select dropdown
  // changeCity(e) {
  //   console.log(e.value)
  //   this.form.get('cityName').setValue(e.target.value, {
  //     onlySelf: true
  //   })
  // }


  subirFoto() {

    if (this.fotoSeleccionada) {
      console.log("se registro");
      let imagen:Imagen=this.form.value;
      imagen.imagen=this.fotoSeleccionada;      
      this.prueba.subirFoto(imagen).subscribe((data:any)=>{
        console.log("se registro correctamente");
      })
    } else {
      
    }
  }

  seleccionarFoto(event:any) {
    this.fotoSeleccionada = event.target.files[0];
   // this.progreso = 0;
    console.log(this.fotoSeleccionada);
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      //swal('Error seleccionar imagen: ', 'El archivo debe ser del tipo imagen', 'error');
      //this.fotoSeleccionada = null;
    }
  }


}
