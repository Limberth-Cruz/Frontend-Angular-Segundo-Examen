import { Component } from '@angular/core';
import { EmpleadoService } from '../core/services/productoservice';  
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'] 
})
export class Home {
  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) {  
    this.listaEmpleados();

  }

  listaEmpleados(): void {
    this.empleadoService.listaEmpleados().subscribe({
      next: (data: any[]) => {               
        this.empleados = data;
        console.log(this.empleados);
      },
      error: (err: any) => console.error('Error al cargar empleados', err)  
    });
  }

  guardarEmpleadosPersonalizados(): void {
    const producto = { nombre: 'Raqueta de tenis', precio: 80, categoria_id: 3 };
  
    this.empleadoService.registrarEmpleados(producto).subscribe({
      next: (productoCreado: any) => {
        console.log('Producto creado:', productoCreado);
        
        // Volver a cargar todos los productos desde el backend
        this.listaEmpleados();
      },
      error: (err: any) => console.error('Error al registrar producto', err)
    });
  }
}
