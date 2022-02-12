import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
 crearProducto: FormGroup;
 submitted = false;
 loading = false;

  constructor(private fb: FormBuilder,
              private _productoService: ProductoService,
              private router: Router,
             ) {
    this.crearProducto = this.fb.group({
      numero: ['', Validators.required],
    artista: ['', Validators.required],
    nombre: ['', Validators.required],
    cancion: ['', Validators.required],
    duracion: ['', Validators.required],
    album: ['', Validators.required],


    })
  }

  ngOnInit(): void {
  }
  agregarProducto() {
    this.submitted = true;

    if(this.crearProducto.invalid){
      return;
    }
    const producto: any = {
      numero: this.crearProducto.value.numero,
      artista: this.crearProducto.value.artista,
      nombre: this.crearProducto.value.nombre,
      cancion: this.crearProducto.value.cancion,
      duracion: this.crearProducto.value.duracion,
      album: this.crearProducto.value.album

    }

    this._productoService.agregarProducto(producto).then(() => {
        console.log('producto registrado con exito!'
        );
        this.loading
        this.router.navigate(['listado-productos']);
    }). catch((error ) => {
      console.log(error );
    })
  }
}



function con(producto: any, registrado: any, con: any, arg3: any) {
  throw new Error('Function not implemented.');
}

