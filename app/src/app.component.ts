import * as angular from 'angular';
import {UsersService} from './users/services/users.service';
import {User} from './users/users.module';

/**
 * @ngInject
 */
export class AppComponent {
  // Define our AppComponent's name
  static componentName: string = "httpApp";

  // Define our AppComponent's config
  static componentConfig: ng.IComponentOptions = {
    bindings: {},
    controller: AppComponent,
    templateUrl: 'src/app.component.html'
  };

  // Define our injectables
  private $mdSidenav: angular.material.ISidenavService;
  private UsersService: UsersService;

  // Define our own variables
  private users: User[];
  private selected: User;

  // Define our constructor and inject the necessary services
  constructor($mdSidenav:angular.material.ISidenavService, UsersService: UsersService) {
    // Store all of our injectables
    this.$mdSidenav = $mdSidenav;
    this.UsersService = UsersService;

    // Load our users and store them to a variable
    UsersService.loadAllUsers().then((users: User[]) => {
      this.users = users;
      this.selected = users[0];
    });
  }

  /**
   * Hide or Show the 'left' sideNav area.
   */
  toggleUsersList() {
    this.$mdSidenav('left').toggle();
  }

  /**
   * Select the current user and closes the users list.
   *
   * @param user The user to be selected.
   */
  selectUser(user: number|User) {
    // Set our selected user
    this.selected = angular.isNumber(user) ? this.users[<number> user]: <User> user;

    // If the users list/sidenav is open; we want to make sure to close it
    this.$mdSidenav('left').close();
  }
}
