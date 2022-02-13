import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
 id: string | null;
 titulo = 'Agregar Producto';

    constructor(private fb: FormBuilder,
              private _productoService: ProductoService,
              private router: Router,
              private aRoute: ActivatedRoute,

             ) {
     this.crearProducto = this.fb.group({
       numero: ['', Validators.required],
       artista: ['', Validators.required],
      nombre: ['', Validators.required],
      cancion: ['', Validators.required],
      duracion: ['', Validators.required],
     album: ['', Validators.required],

    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
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
      album: this.crearProducto.value.album,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()

    }
      this.loading = true;
    this._productoService.agregarProducto(producto).then(() => {
        console.log('producto registrado con exito!'
        );
        this.loading = false;
        this.router.navigate(['listado-productos']);
    }). catch((error ) => {

      console.log(error );
      this.loading = false;
    })

  }
  esEditar() {
    this.titulo = 'Editar Producto';
    if (this.id !== null) {
      this.loading = true;
      this._productoService.getProducto(this.id).subscribe(data => {
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.crearProducto.setValue({
          numero: data.payload.data()['numero'],
          artista: data.payload.data()['artista'],
          nombre: data.payload.data()['nombre'],
          cancion: data.payload.data()['cancion'],
          duracion: data.payload.data()['duracion'],
          album: data.payload.data()['album'],
        })
      })
    }
  }
}






