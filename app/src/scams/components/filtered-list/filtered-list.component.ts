import * as angular from "angular";

/**
 * @ngInject
 */
export class FilteredListComponent {
  static componentName: string = "msFilteredList";

  static componentConfig: ng.IComponentOptions = {
    bindings: {
      items: '<',
    },
    transclude: true,
    controller: FilteredListComponent,
    template: `
      <md-input-container class="w-100">
        <label>Search</label>
        <input type="text" ng-model="search.name">
      </md-input-container>
      <md-list>
        <md-list-item ng-repeat="item in $ctrl.items | filter:search"">
          <ng-transclude></ng-transclude>
        </md-list-item>
      </md-list>`
  };
}

export module FilteredListModule {
  export const name: string = 'FilteredListModule';
  angular
      .module(FilteredListModule.name, ['ngMaterial'])
      .component(FilteredListComponent.componentName, FilteredListComponent.componentConfig);
}
