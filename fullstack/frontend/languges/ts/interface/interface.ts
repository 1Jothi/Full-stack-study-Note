interface Icloths{
    name:string,
    color:string,
    prise:number,
    abx?:string
    size?:string
}

let cloths:Icloths={name:'t-shairt',color:'red',prise:200}
console.log(cloths)
console.log(cloths.prise)
cloths.size="xl"