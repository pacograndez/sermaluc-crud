import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator
} from '@angular/material/table';
import { ITeam } from './commons/interfaces';
import { SelectionModel } from '@angular/cdk/collections';
import { CrudService } from './commons/services';

@Component({
  selector: 'app-crud-ui',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() teams!: Array<ITeam>;
  @Output() addTeam: EventEmitter<void>;
  @Output() editTeam: EventEmitter<ITeam>;
  @Output() deleteTeam: EventEmitter<ITeam>;

  displayedColumns: string[] = [
    'select',
    'id',
    'fullName',
    'name',
    'abbreviation',
    'city',
    'conference',
    'division'
  ];
  dataSource: MatTableDataSource<ITeam>;
  @ViewChild(MatPaginator) paginator!: MatTableDataSourcePaginator;
  selection = new SelectionModel<ITeam>(false);
  isSelected = false;

  constructor(private crudService: CrudService) {
    this.dataSource = new MatTableDataSource<ITeam>();
    this.addTeam = new EventEmitter<void>();
    this.editTeam = new EventEmitter<ITeam>();
    this.deleteTeam = new EventEmitter<ITeam>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['teams'].currentValue) {
      this.dataSource.data = this.teams;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.crudService.allTeams.subscribe(
      (res: Array<ITeam>) => (this.dataSource.data = res)
    );
  }

  onSelectedTeam(team: ITeam): void {
    this.isSelected = true;
    this.selection.toggle(team);
  }

  onAddTeam() {
    this.addTeam.emit();
  }

  onEditTeam() {
    const team = this.selection.selected[0];
    this.editTeam.emit(team);
    this.selection.clear();
  }

  onDeleteTeam() {
    const team = this.selection.selected[0];
    this.deleteTeam.emit(team);
  }
}
