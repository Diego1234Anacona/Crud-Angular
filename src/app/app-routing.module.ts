import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';

const routes: Routes = [
  {path: '', redirectTo: 'listado-productos', pathMatch:'full'},
  {path: 'listado-productos', component: ListadoProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editProducto/:id', component: CrearProductoComponent},
  {path: '**', redirectTo: 'listado-productos', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
