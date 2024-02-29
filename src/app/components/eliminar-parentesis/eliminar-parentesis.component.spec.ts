import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarParentesisComponent } from './eliminar-parentesis.component';

describe('EliminarParentesisComponent', () => {
  let component: EliminarParentesisComponent;
  let fixture: ComponentFixture<EliminarParentesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarParentesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarParentesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
