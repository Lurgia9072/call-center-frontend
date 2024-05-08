import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Product } from '../../../core/models';
import { BackendService } from '../../../core/service/backend-service.service';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-prodcuto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-prodcuto.component.html',
  styleUrl: './agregar-prodcuto.component.css'
})
export class AgregarProdcutoComponent implements OnInit{
  @Output() productoAgregado: EventEmitter<void> = new EventEmitter<void>();

  newProduct: Product = new Product();

  constructor(private backendService: BackendService, @Inject(MAT_DIALOG_DATA) public data: Product) {}
  ngOnInit(): void {
    this.newProduct.description = this.data.description;
    this.newProduct.name = this.data.name;
    this.newProduct.price = this.data.price;

    console.log(this.newProduct);
    
  }

  submitForm() {
    this.backendService.insertProduct(this.newProduct).subscribe(
      response => {
        console.log('Producto agregado con éxito:', response);
        this.productoAgregado.emit();

      },
      error => {
        console.error('Error al agregar el producto:', error);
      }
    );
  }
}
