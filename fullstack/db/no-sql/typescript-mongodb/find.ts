//import {MongoClient} from 'mongodb'
var {MongoClient}=require('mongodb')
let myaddress="mongodb://127.0.0.1:27017"

let client=new MongoClient(myaddress)
let dbName="Apponix-CRAZY-WAR-july18"

async function dbLink(){
  await  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('student');
 let data=await collection.find(
    
 ).toArray();
 console.log("pp--->",data)
}
dbLink()