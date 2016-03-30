import {MenuItem} from '../models/menuItem.model'
export class Menu {
    constructor(){
        this.items =[];
        var dashboard = new MenuItem('dashboard', null, 1, 'admin.dashboard');
        this.items.push(dashboard);
        this.items.push(new MenuItem('register', null, 2, 'admin.register'));
        this.items.push(new MenuItem('logout', null, 3, 'admin.logout'));
    }
    addMenuItem(menuItem){
        this.items.push(menuItem);
    }
}