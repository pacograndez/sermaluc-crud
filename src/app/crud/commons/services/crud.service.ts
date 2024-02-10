import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { CrudStorageService } from './crud-storage.service';
import { IDataResponse, ITeam } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  allTeams: BehaviorSubject<Array<ITeam>>;

  constructor(private httpClient: HttpClient, private crudStorageService: CrudStorageService) {
    this.allTeams = new BehaviorSubject<Array<ITeam>>([]);
   }

  getAllTeams(): Observable<IDataResponse> {
    return this.httpClient.get<IDataResponse>('https://free-nba.p.rapidapi.com/teams');
  }

  setAllTeams(data: Array<ITeam>): void {
    this.allTeams.next(data);
    this.crudStorageService.setData('allTeams', JSON.stringify(data));
  }
}
