import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArtComponent } from './list-art.component';

describe('ListArtComponent', () => {
  let component: ListArtComponent;
  let fixture: ComponentFixture<ListArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
