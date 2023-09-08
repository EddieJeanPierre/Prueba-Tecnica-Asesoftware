import { Component, Input, OnInit } from '@angular/core';
import { Turn } from '@features/schedule/interfaces/schedule.interfaces';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  @Input() loadingTurnList: boolean = false;
  @Input() turnList: Turn[] = [];

  tableColumns = ['Comercio', 'Servicio', 'Fecha', 'Hora Inicio', 'Hora Fin'];


  constructor() {

  }

  ngOnInit() {
    // Empty
  }

}
