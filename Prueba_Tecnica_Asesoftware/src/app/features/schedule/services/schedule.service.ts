import { Injectable } from '@angular/core';
import { Commerce, Service, Turn } from '../interfaces/schedule.interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCommerceList(): Observable<Commerce[]> {
    return this.httpClient.get<Commerce[]>(
      `http://localhost:8080/comercios/lista`
    );
  }

  getServiceList(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(
      `http://localhost:8080/servicios/lista`
    );
  }

  getTurnList(): Observable<Turn[]> {
    return this.httpClient.get<Turn[]>(
      `http://localhost:8080/turnos/lista`
    );
  }

  createTurn(turn: any): Observable<Turn> {
    return this.httpClient.post<Turn>(
      `http://localhost:8080/turnos/crear`,
      turn
    );
  }
}
