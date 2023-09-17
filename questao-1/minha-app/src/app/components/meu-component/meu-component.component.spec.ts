import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuComponentComponent } from './meu-component.component';

describe('MeuComponentComponent', () => {
  let component: MeuComponentComponent;
  let fixture: ComponentFixture<MeuComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuComponentComponent]
    });
    fixture = TestBed.createComponent(MeuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
