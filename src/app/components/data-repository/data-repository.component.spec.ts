import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRepositoryComponent } from './data-repository.component';

describe('DataRepositoryComponent', () => {
  let component: DataRepositoryComponent;
  let fixture: ComponentFixture<DataRepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataRepositoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
