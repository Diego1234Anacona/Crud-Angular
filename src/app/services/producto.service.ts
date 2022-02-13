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

    return this.firestore.collection('productos', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  eliminarProductos(id: string): Promise<any> {
    return this.firestore.collection('productos').doc(id).delete();
  }
  getProducto(id: string): Observable<any> {
    return this.firestore.collection('productos').doc(id).snapshotChanges();
  }
}
