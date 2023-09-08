import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { MockMenuService } from '@shared/mock-services/mock-menu.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

  menuItems: NbMenuItem[];
  private destroy$ = new Subject<void>();
  selectedItem: string;

  constructor(
    private menuService: MockMenuService,
    private nbMenuService: NbMenuService
  ) {
    this.menuItems = [];
  }

  ngOnInit() {
    this.getMenu();
    this.getSelectedItem();
  }

  getSelectedItem() {
    this.nbMenuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe((menuBag) => {
        this.menuItems = [];
        this.getMenu();
      });
  }

  /**
   * Requests menu data
   */
  getMenu(): void {
    this.menuItems = [];
    this.menuService.getMenu().subscribe((menuItems) => {
      this.menuItems = [];
      menuItems.forEach((menuItem) => {
        if (menuItem.status) {
          this.menuItems.push({
            title: menuItem.title,
            link: menuItem.link,
            icon: menuItem.icon,
          });
        }
      });
    });
  }

}
