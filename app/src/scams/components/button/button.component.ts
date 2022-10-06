import * as angular from "angular";

/**
 * @ngInject
 */
export class ButtonComponent {
    static componentName: string = "msButton";

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
    export const name: string = 'ButtonModule';
    angular
        .module(ButtonModule.name, ['ngMaterial'])
        .component(ButtonComponent.componentName, ButtonComponent.componentConfig);
}
