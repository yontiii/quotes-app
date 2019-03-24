export class Quote {
    public showPublisher:boolean;
    constructor(public quote:string, public author:string, public publisher:string){
        this.showPublisher=false
    }
}
