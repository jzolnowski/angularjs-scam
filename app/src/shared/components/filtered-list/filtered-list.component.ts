/**
 * @ngInject
 */
export class FilteredListComponent {
  // Define our UsersListComponent component's name
  static componentName: string = "msFilteredList";

  // Define our UsersListComponent component's component config
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
