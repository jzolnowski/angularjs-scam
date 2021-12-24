import * as angular from 'angular';
import {UsersService} from './services/users.service';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {SharedModule} from "../shared/shared.module";

export interface User {
  name: string;
  avatar: string;
  content: string;
}

export module UsersModule {
  export var name: string = 'Users';

  angular
    .module(UsersModule.name,[SharedModule.name, 'ngMaterial'])
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
    .service("UsersService", UsersService);
}
