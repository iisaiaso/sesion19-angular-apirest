import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPokemonComponent } from './mostrar-pokemon.component';

describe('MostrarPokemonComponent', () => {
  let component: MostrarPokemonComponent;
  let fixture: ComponentFixture<MostrarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
