  import {Component, OnInit, ViewChild } from "@angular/core";
  import { Product } from "../../core/models";
  import { BackendService } from "../../core/service/backend-service.service";
  import { AgGridModule } from "ag-grid-angular";
  import { MatDialog } from '@angular/material/dialog';
  import { PromotionModalComponent } from "./promotion-modal/promotion-modal.component";
import { ColDef } from "ag-grid-community";
import { CommonModule } from "@angular/common";
import { AgregarProdcutoComponent } from "./agregar-prodcuto/agregar-prodcuto.component";
  @Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [AgGridModule, CommonModule],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
  })
  export class LandingPageComponent implements OnInit{
    @ViewChild(AgregarProdcutoComponent) agregarProductoComponent!: AgregarProdcutoComponent;

    products!: Product[];
    columnDefs: ColDef[] = [
      { field: 'id' },
      { field: 'name' },
      { field: 'description' },
      { field: 'price' }
    ];

    constructor(private backendService: BackendService, private dialog: MatDialog) { }

  ngOnInit(): void {
      this.loadProducts();
    }

    loadProducts(): void {
      this.backendService.getProducts().subscribe(products => {
        this.products = products;
      });
    }

    onSelectionChanged(event: any): void {
      const selectedRows = event.api.getSelectedRows();
      if (selectedRows.length > 0) {
        const selectedProduct = selectedRows[0];
        this.selectProduct(selectedProduct);
      }
    }

    selectProduct(selectedProduct: any): void {
      const dialogRef = this.dialog.open(PromotionModalComponent, {
        width: '400px',
        data: selectedProduct
      });
      

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed', result);
      });
    }

  

    Delete(selectedProduct: any): void {
     
    }

    Edit(selectedProduct: any): void {
      const dialogRef = this.dialog.open(AgregarProdcutoComponent, {
        width: '400px',
        data: selectedProduct,
      });
      

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed', result);
      });
    }

    insert(selectedProduct: any): void {
      const dialogRef = this.dialog.open(AgregarProdcutoComponent, {
        width: '400px',
        data: selectedProduct,
      });
      

      dialogRef.componentInstance.productoAgregado.subscribe(() => {
        // Cerrar el modal
        dialogRef.close();
        // Recargar la lista de productos
        this.loadProducts();
      });
    }
  }