import * as angular from 'angular';
import {UsersService} from './users/services/users.service';
import {User} from './users/users.module';

/**
 * @ngInject
 */
export class AppComponent {
  static componentName: string = "httpApp";

  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/app.component.html'
  };

  private $mdSidenav: angular.material.ISidenavService;
  private UsersService: UsersService;

  private users: User[];
  private selected: User;

  constructor($mdSidenav:angular.material.ISidenavService, UsersService: UsersService) {
    this.$mdSidenav = $mdSidenav;
    this.UsersService = UsersService;

    UsersService.loadAllUsers().then((users: User[]) => {
      this.users = users;
      this.selected = users[0];
    });
  }

  toggleUsersList(): void {
    this.$mdSidenav('left').toggle();
  }

  selectUser(user: number | User): void {
    this.selected = angular.isNumber(user) ? this.users[<number> user]: <User> user;
    this.$mdSidenav('left').close();
  }
}
