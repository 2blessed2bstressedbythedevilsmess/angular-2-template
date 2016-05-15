import {Component} from 'angular2/core';

@Component({
    selector: 'blazter',
    template: '<h1>Vicente Noriega {{name}} and {{MyArray}}</h1>'
})

export class x {
    name = "chente1er";
    MyArray = ["apples", "oranges", "melons"];
    
}
