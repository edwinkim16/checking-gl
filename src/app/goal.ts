export class Goal {
    id!:number
    name!:string
    description!:string
    completeDate!:Date

  showDescription: boolean;
  constructor(){
    this.showDescription=false;
  }
}
