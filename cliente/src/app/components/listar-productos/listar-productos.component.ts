import { Producto } from 'src/app/models/producto';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {

  listProductos: Producto[] = []

  constructor(private _productoService: ProductoService){}

    ngOnInit():void{
      this.obtenerProductos();
    }

    obtenerProductos(){
      this._productoService.getProductos().subscribe(data => {
        console.log(data);
        this.listProductos = data;
      }, error => {
        console.log(error);
      })
  }
}
