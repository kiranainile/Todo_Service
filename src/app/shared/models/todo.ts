export interface Itodo{
     todoItem: string;
    todoid: string;
}

export interface ITodoRes{
     msg: string;
    data: Itodo;
}
export interface Ires<T>{
    msg:string;
    data:T
}