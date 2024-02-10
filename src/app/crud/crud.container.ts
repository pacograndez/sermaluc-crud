import { Component } from '@angular/core';
import { CrudLoaderService, CrudService } from './commons/services';
import { MatDialog } from '@angular/material/dialog';
import { AddModalComponent } from './commons/modals';
import { IDataResponse, ITeam } from './commons/interfaces';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.container.html'
})
export class CrudContainer {

  public teams: Array<ITeam>;

  constructor(public crudLoaderService: CrudLoaderService, public crudService: CrudService, public dialog: MatDialog) {
    this.teams = [];
    this.getAllTeams();
  }

    getAllTeams(): void {
      this.crudService.getAllTeams().subscribe((res: IDataResponse) => {
        this.teams = res.data;
        this.crudService.setAllTeams(this.teams);
      });
    }

    onAddTeam() {
      const dialogRef = this.dialog.open(AddModalComponent, {
        hasBackdrop: true,
      });
  
      dialogRef.afterClosed().subscribe((data: ITeam) => {
        const lastTeamId = this.teams[this.teams.length - 1].id;
        data.id = lastTeamId + 1;
        this.teams.push(data);
        this.crudService.setAllTeams(this.teams);
      });
      
  }

  onEditTeam(team: ITeam) {
    const dialogRef = this.dialog.open(AddModalComponent, {
      hasBackdrop: true,
      data: team
    });

    dialogRef.afterClosed().subscribe((data: ITeam) => {
      this.teams.map((t: ITeam) => {
        if (t.id === data.id) {
          t.full_name = data.full_name;
          t.name = data.name;
          t.abbreviation = data.abbreviation;
          t.city = data.city;
          t.conference = data.conference;
          t.division = data.division;
        }
      });
      this.crudService.setAllTeams(this.teams);
    });
    
}

    onDeleteTeam(event: number): void {
      this.teams = this.teams.filter((t: ITeam) => t.id !== event);
      this.crudService.setAllTeams(this.teams);
    }
}
