import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLoaderComponent } from '../crud-loader.component';

describe('CrudLoaderComponent', () => {
  let component: CrudLoaderComponent;
  let fixture: ComponentFixture<CrudLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudLoaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
