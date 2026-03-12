import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFolderList } from './csv-folder-list';

describe('CsvFolderList', () => {
  let component: CsvFolderList;
  let fixture: ComponentFixture<CsvFolderList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvFolderList],
    }).compileComponents();

    fixture = TestBed.createComponent(CsvFolderList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
