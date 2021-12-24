import * as angular from "angular";
import {FilteredListComponent} from "../filtered-list/filtered-list.component";

/**
 * @ngInject
 */
export class ButtonComponent {
    // Define our UsersListComponent component's name
    static componentName: string = "msButton";

    // Define our UsersListComponent component's component config
    static componentConfig: ng.IComponentOptions = {
        bindings: {
            label: '@',
            icon: '@',
            class: '@buttonClass',
            clickEvent: '&onClick'
        },
        controller: ButtonComponent,
        template: `
          <md-button class="{{$ctrl.class}}" ng-click="$ctrl.clickEvent({$event: $event})" aria-label="{{$ctrl.label}}">
            <md-icon ng-if="!!$ctrl.icon" md-svg-icon="{{$ctrl.icon}}" ></md-icon>
          </md-button>
        `
    };
}

export module ButtonModule {
    export var name: string = 'ButtonModule';
    angular
        .module(ButtonModule.name, ['ngMaterial'])
        .component(ButtonComponent.componentName, ButtonComponent.componentConfig);
}
