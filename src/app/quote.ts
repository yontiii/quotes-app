export class Quote {
    public showPublisher:boolean;
    constructor(public quote:string, public author:string, public publisher:string, public publishDate:Date, public upVote:number, public downVote: number){
        this.showPublisher=false
    }
}
