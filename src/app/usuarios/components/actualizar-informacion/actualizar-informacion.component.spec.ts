import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInformacionComponent } from './actualizar-informacion.component';

describe('ActualizarInformacionComponent', () => {
  let component: ActualizarInformacionComponent;
  let fixture: ComponentFixture<ActualizarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarInformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
