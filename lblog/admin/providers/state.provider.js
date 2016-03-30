export class StateProvider {
    constructor($stateProvider){
        'ngInject';
        this.$get = function (){
            return {
                addState: function(name, state) {
                    $stateProvider.state(name, state);
                }
            };
        }
    }

}