import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesTable } from './routes-table';

describe('RoutesTable', () => {
  let component: RoutesTable;
  let fixture: ComponentFixture<RoutesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutesTable],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutesTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
