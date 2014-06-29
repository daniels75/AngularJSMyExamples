var myApp = angular.module('mymodule', []);


 
//service style, probably the simplest one
myApp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hello, World from Service!"
    };
});
 
//factory style, more involved but more sophisticated
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hello, World from Factory!"
        }
    };
});
    
//provider style, full blown, configurable version     
myApp.provider('helloWorld', function() {
    // In the provider function, you cannot inject any
    // service or factory. This can only be done at the
    // "$get" method.
 
    this.name = 'Default';
 
    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hello, " + name + "! from Provider"
            }
        }
    };
 
    this.setName = function(name) {
        this.name = name;
    };
});
 
//hey, we can configure a provider!            
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName('World');
});
        
 