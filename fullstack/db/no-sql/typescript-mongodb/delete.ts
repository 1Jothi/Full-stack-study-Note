var {MongoClient}=require('mongodb')
var mydbUrl="mongodb://127.0.0.1:27017"
var mydev="mongodb+srv://waseemahmed116:kjdskjdskj@cluster0.gng6gwb.mongodb.net/"
var client1=new MongoClient(mydbUrl)
var db1="Apponix-CRAZY-WAR-july18"
async function main(){
   await client1.connect()
   console.log("db connected")
   let dbC=client1.db(db1)
   let collection=dbC.collection('student')
   let data=await collection.deleteOne({name:'ravi'})
console.log(data)
}
main()