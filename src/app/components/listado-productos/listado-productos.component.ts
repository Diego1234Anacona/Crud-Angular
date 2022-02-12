import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: any[] = [];

  constructor(private _productoService: ProductoService) {

   }

  ngOnInit(): void {
    this.getProductos()
  }
  getProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
    })
  }
}
