import * as angular from 'angular';
import {UsersService} from './services/users.service';
import {UsersListComponent} from './components/users-list/users-list.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {ButtonModule} from '../scams/components/button/button.component';
import {FilteredListModule} from '../scams/components/filtered-list/filtered-list.component';

export interface User {
  name: string;
  avatar: string;
  content: string;
}

export module UsersModule {
  export var name: string = 'Users';

  angular
    .module(UsersModule.name,[ButtonModule.name, FilteredListModule.name, 'ngMaterial'])
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
    .service("UsersService", UsersService);
}
