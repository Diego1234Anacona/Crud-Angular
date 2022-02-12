import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore: AngularFirestore) { }

  agregarProducto(producto: any): Promise<any> {
    return this.firestore.collection('productos').add(producto);
  }
  getProductos(): Observable<any> {
    return this.firestore.collection('productos').snapshotChanges();
  }
}
