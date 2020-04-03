import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'Timer',
    templateUrl: './Timer.component.html',
    styleUrls: ['./Timer.component.css']
})

export class Timer implements OnInit {
    ngOnInit(): void {
        this.run();
    }

    isAM = true;
    sec:number = 0;
    min:number = 0;
    hour:number = 0;

    secSelected = false;
    minSelected = false;
    hourSelected = false;

    isTicking = true;

    tick = () => {
        this.sec += 1;
        if (this.sec != 60) { return; }
        this.sec = 0;
        this.min += 1;
        if (this.min != 60) { return; }
        this.min = 0;
        this.hour += 1;
        if (this.hour != 12) { return; }
        this.hour = 0;
        this.isAM = !this.isAM;
    };

    run = () => {
        if (this.isTicking) {
            this.tick()
            setTimeout(this.run, 1000);
        }
    }

    switcher = () => { this.isTicking = !this.isTicking; }

    stopTicking = (src:number) => {
        this.isTicking = false;
        switch (src) {
            case 1:
                this.hourSelected = true;
                break;
            case 2:
                this.minSelected = true;
                break;
            case 3:
                this.secSelected = true;
                break;
            default :
                console.log("bad input in fucntion stopTicking, comp Timer");
                break;
        }
    }

    goOnTicking = () => {
        this.sec = Number.isNaN(Number(this.sec))?0:Number(this.sec);
        this.min = Number.isNaN(Number(this.min))?0:Number(this.min);
        this.hour = Number.isNaN(Number(this.hour))?0:Number(this.hour);

        this.hour = this.backInRange(this.hour,11);
        this.min = this.backInRange(this.min,59);
        this.sec = this.backInRange(this.sec,59);

        this.secSelected = false;
        this.minSelected = false;
        this.hourSelected = false;
        this.isTicking = true;
        this.run();
    }

    backInRange(target:number,max:number,min:number=0){
        if(target>max){
            return max;
        }
        if(target<min){
            return min;
        }
        return target;
    }

    onKeydown(event){
        if(event.key === "Enter"){
            this.goOnTicking();
        }
    }

};