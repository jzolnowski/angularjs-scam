/**
 * @ngInject
 */
export class UsersListComponent {
  // Define our UsersListComponent component's name
  static componentName: string = "msUsersList";

  // Define our UsersListComponent component's component config
  static componentConfig: ng.IComponentOptions = {
    bindings: {
      users: '<',
      selected: '<',
      selectUser: '&onSelected'
    },
    controller: UsersListComponent,
    template: `
      <ms-filtered-list items="$ctrl.users">
        <md-button ng-click="$ctrl.selectUser({user:$parent.item})" ng-class="{'selected': $parent.item === $ctrl.selected}">
          <md-icon md-svg-src="{{$parent.$parent.item.avatar}}" class="avatar"></md-icon>
          {{$parent.$parent.item.name}}
        </md-button>
      </ms-filtered-list> 
    `
  };
}
