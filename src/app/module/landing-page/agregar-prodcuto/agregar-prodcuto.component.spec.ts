import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProdcutoComponent } from './agregar-prodcuto.component';

describe('AgregarProdcutoComponent', () => {
  let component: AgregarProdcutoComponent;
  let fixture: ComponentFixture<AgregarProdcutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarProdcutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarProdcutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
