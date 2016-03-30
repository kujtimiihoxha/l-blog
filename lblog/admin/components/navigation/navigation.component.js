class NavigationController {
	constructor(Menu) {
		'ngInject';
		console.log(Menu);
		this.menu = Menu;
	}

}

export const  NavigationComponent = {
	templateUrl: './views/admin/components/navigation/navigation.component.html',
	controller: NavigationController,
	controllerAs: 'vm',
	bindings: {}
};
