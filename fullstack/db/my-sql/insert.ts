var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'cary'
})
con.connect((err:any)=>{
    if(err)throw err;
    console.log('db connected')
let query="INSERT INTO student(name, chocalate) VALUES ('teju','dairymilk')"
con.query(query,(err:any,res:any)=>{
    if(err)throw err
    console.log("inserted")  
})
})