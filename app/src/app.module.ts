import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-sanitize';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {ButtonModule} from './scams/components/button/button.component';


module AppModule {
  "use strict";

  angular.module('AppModule', ['ngMaterial', 'ngSanitize', UsersModule.name, ButtonModule.name])
    .config(function ($mdIconProvider: angular.material.IIconProvider, $mdThemingProvider: angular.material.IThemingProvider) {
      $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("share", "./assets/svg/share.svg", 24)
        .icon("google_plus", "./assets/svg/google_plus.svg", 24)
        .icon("hangouts", "./assets/svg/hangouts.svg", 24)
        .icon("twitter", "./assets/svg/twitter.svg", 24)
        .icon("phone", "./assets/svg/phone.svg", 24);

      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');
    })
    .component(AppComponent.componentName, AppComponent.componentConfig);
}
