import {MenuItem} from '../models/menuItem.model'
export class Menu {
    constructor(){
        this.items =[];
        var dashboard = new MenuItem('Dashboard', null, 1, 'admin.dashboard');
        dashboard.addSubMenu('test',5,'admin.test')
        this.items.push(dashboard);
        this.items.push(new MenuItem('Register', null, 2, 'admin.register'));
        this.items.push(new MenuItem('Logout', null, 3, 'admin.logout'));
    }
    addMenuItem(menuItem){
        this.items.push(menuItem);
    }
}