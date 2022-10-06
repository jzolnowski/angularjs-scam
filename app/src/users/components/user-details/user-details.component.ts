import {User} from '../../users.module';
import angular = require('angular');

/**
 * @ngInject
 */
export class UserDetailsComponent {
  static componentName: string = "msUserDetails";

  static componentConfig: ng.IComponentOptions = {
    bindings: {
      selected: '<'
    },
    controller: UserDetailsComponent,
    templateUrl: 'src/users/components/user-details/user-details.component.html'
  };

  private selected: User;

  private $sce: ng.ISCEService;
  private $mdSidenav: angular.material.ISidenavService;
  private $mdDialog: angular.material.IDialogService;
  private $mdBottomSheet: angular.material.IBottomSheetService;

  constructor($sce: ng.ISCEService, $mdSidenav: angular.material.ISidenavService,
              $mdDialog: angular.material.IDialogService, $mdBottomSheet: angular.material.IBottomSheetService) {
    this.$sce = $sce;
    this.$mdSidenav = $mdSidenav;
    this.$mdDialog = $mdDialog;
    this.$mdBottomSheet = $mdBottomSheet;
  }

  share(): void {
    const self = this;
    const config: angular.material.IBottomSheetOptions = {
      parent: angular.element(document.getElementById('content')),
      templateUrl: 'src/users/components/user-details/user-contact-sheet.html',
      controller: UserSheetController,
      controllerAs: "$ctrl",
      bindToController: true
    };

    this.$mdBottomSheet.show(config).then((clickedItem) => {
      const html = `<p>You contacted ${self.selected.name} via ${clickedItem.name}!</p>`;

      const alert = this.$mdDialog.alert()
          .title('Sharing Success')
          .htmlContent(this.$sce.trustAsHtml(html))
          .ok('Sweet!');

      this.$mdDialog.show(alert);
    }).catch(() => console.log(`BottomSheet dismissed.`));

    function UserSheetController(): void {
      this.user = self.selected;
      this.items = [
        {name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg'},
        {name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg'},
        {name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg'},
        {name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg'}
      ];
      this.performAction = function (action) {
        self.$mdBottomSheet.hide(action);
      };
    }
  }
}
