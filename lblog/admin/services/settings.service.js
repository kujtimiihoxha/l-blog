import {State} from '../models/state.model'
export class SettingsService {
	// var StateProvider;
	constructor(StateProvider) {
		'ngInject';
		this.StateProvider = StateProvider;
	}
	
	addAdminPage(title, stateName,menuTitle, role, url,view,controller,order,icon){
		this.StateProvider.addState('admin.'+stateName,new State(url, view, role, controller));
	}
	addAdminPageSubMenu(title, parentMenu,stateName,menuTitle, role, url,view,controller,order,icon){

		this.StateProvider.addState('admin.'+stateName,new State(url,view,controller));
	}
}
