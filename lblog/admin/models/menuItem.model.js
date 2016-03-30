export class MenuItem {
    constructor(title, subMenus, order, state){
        
            this.title = title;
            this.order = order;
            this.children = subMenus || [];
            this.state = state;
            this.hasChildren=false;
    }

    addSubMenu(title, order, state) {
        this.hasChildren = true;
        this.children.push({
            title: title,
            order: order,
            state: state
        })
    }
}