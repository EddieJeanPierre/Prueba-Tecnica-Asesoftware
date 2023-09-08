import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commerce, Service, Turn } from '@features/schedule/interfaces/schedule.interfaces';
import { ScheduleService } from '@features/schedule/services/schedule.service';
import { Store, select } from '@ngrx/store';
import { ScheduleActions } from 'src/app/store/actions/schedule.actions';
import { getCommerceList, getServiceList, getTurnCreated, getTurnList, loadingCommerceList, loadingServiceList, loadingTurnList } from 'src/app/store/selectors/schedule.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  loadingCommerceList: boolean;
  loadingServiceList: boolean;
  loadingTurnList: boolean;

  commerceList: Commerce[] = [];
  serviceList: Service[] = [];
  turnList: Turn[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    this.loadingCommerceList = false;
    this.loadingServiceList = false;
    this.loadingTurnList = false;

  }

  ngOnInit(): void {
    this.verifySession();
  }

  verifySession(): void {
    if (localStorage.getItem('login') != 'true') {
      this.router.navigate(['/sesion/inicio-sesion']);
    } else {
      this.getCommerceStates();
      this.getServiceStates();
      this.getTurnStates();
      this.getCommerceList();
      this.getServiceList();
      this.getTurnList();
    }
  }

  getCommerceStates(): void {
    this.store
      .pipe(select(loadingCommerceList))
      .subscribe(payload => this.loadingCommerceList = payload || false);
    this.store
      .pipe(select(getCommerceList))
      .subscribe(payload => {
        this.commerceList = payload || [];
        this.updateTurnList();
      });
  }

  getServiceStates(): void {
    this.store
      .pipe(select(loadingServiceList))
      .subscribe(payload => this.loadingServiceList = payload || false);
    this.store
      .pipe(select(getServiceList))
      .subscribe(payload => {
        this.serviceList = payload || [];
        this.updateTurnList();
      });
  }

  getTurnStates(): void {
    this.store
      .pipe(select(loadingTurnList))
      .subscribe(payload => this.loadingTurnList = payload || false);
    this.store
      .pipe(select(getTurnList))
      .subscribe(payload => {
        this.turnList = payload || [];
        this.updateTurnList();
      });
    this.store
      .pipe(select(getTurnCreated))
      .subscribe(payload => {
        this.getTurnList();
      });

  }

  getCommerceList(): void {
    this.store.dispatch(new ScheduleActions.commerceListRequest());
  }

  getServiceList(): void {
    this.store.dispatch(new ScheduleActions.serviceListRequest());
  }

  getTurnList(): void {
    this.store.dispatch(new ScheduleActions.turnListRequest());
  }

  updateTurnList(): void {
    this.turnList = this.turnList.map(resItem => {
      return {
        ...resItem,
        labelCommerce: this.getCommerceName(resItem.idService),
        labelService: this.getServiceName(resItem.idService)
      }
    });
  }

  getCommerceName(idService: number): string {
    const commerceData = this.getService(idService) ? this.commerceList.find(commerce => commerce.idCommerce == this.getService(idService).idCommerce) : null;
    return commerceData && commerceData.nameCommerce ? commerceData.nameCommerce : 'Cargando...';
  }

  getServiceName(idService: number): string {
    const serviceData = this.serviceList.find(service => service.idService == idService);
    return serviceData && serviceData.nameService ? serviceData.nameService : 'Cargando...';
  }

  getService(idService: number): Service {
    return this.serviceList.find(service => service.idService == idService) || null;
  }

}
