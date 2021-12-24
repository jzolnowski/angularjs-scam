import * as angular from 'angular';
import {FilteredListComponent} from './components/filtered-list/filtered-list.component';
import {ButtonComponent} from "./components/button/button.component";

export module SharedModule {
  export var name: string = 'Shared';

  angular
    .module(SharedModule.name, ['ngMaterial'])
    .component(FilteredListComponent.componentName, FilteredListComponent.componentConfig)
    .component(ButtonComponent.componentName, ButtonComponent.componentConfig);
}
