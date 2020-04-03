import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({selector:'[myAutoFocus]'})

export class myAutoFocus implements OnInit{
    constructor(private elem :ElementRef){

    };

    ngOnInit(): void {
        this.elem.nativeElement.focus();
    }

}