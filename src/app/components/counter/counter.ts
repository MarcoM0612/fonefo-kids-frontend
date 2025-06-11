import {Component} from "@angular/core";

@Component ({
    selector: 'counter',
    templateUrl: './counter.html' ,
    styleUrl: './counter.css',
})

export class counter{
    title: string = 'Contador';
    counter: number = 9;


    add () {
        this.counter++;
    }
    substract () {
        if (this.counter > 0) {
            this.counter--;
        }
        
    }
}