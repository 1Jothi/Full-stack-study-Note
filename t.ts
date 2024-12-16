interface Iobj{
    a:any,
    b?:any
    c?:()=>void
}

let obj:Iobj={a:'aaple'}
obj.b="boll"
obj.c=()=>{}