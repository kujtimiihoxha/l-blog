export class State{
    constructor(url, view, role, controller){
        return {
            url: url,
            data :{
              role: role
            },
            views: {
                'main@': {
                    template: view,
                    controller : controller,
                    controllerAs : 'vm'
                }
            }
        }
    }
}