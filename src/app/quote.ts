export class Quote {
    public showPublisher:boolean;
    constructor(public quote:string, public author:string, public publisher:string, public publishDate:Date){
        this.showPublisher=false
    }
}
