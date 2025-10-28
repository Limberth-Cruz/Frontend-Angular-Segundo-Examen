import { Component } from '@angular/core';
import { ProductoService } from '../core/services/productoservice';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {
  productos: any[] = [];

  constructor(private productoService: ProductoService) {  
    this.listarProductos();
    //this.guardarProductosPersonalizados(); // Guarda productos automáticamente
  }

  listarProductos(): void {
    this.productoService.listaProductos().subscribe({
      next: (data: any[]) => {               
        this.productos = data;
        console.log(this.productos);
      },
      error: (err: any) => console.error('Error al cargar productos', err)  
    });
  }

  guardarProductosPersonalizados(): void {
    const producto = { nombre: 'Raqueta de tenis', precio: 80, categoria_id: 3 };
  
    this.productoService.registrarProducto(producto).subscribe({
      next: (productoCreado: any) => {
        console.log('Producto creado:', productoCreado);
        
        // Volver a cargar todos los productos desde el backend
        this.listarProductos();
      },
      error: (err: any) => console.error('Error al registrar producto', err)
    });
  }
}
