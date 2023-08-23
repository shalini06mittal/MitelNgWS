export interface Blog{
    id?:number;
    title?:string;
    content?:string;
    created?:Date;
    category?:string;
    imgurl?:string;
    feedback?:{rating?:number, comments?:string}
}