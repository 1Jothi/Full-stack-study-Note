let div=document.getElementById('root')


let myproducts=[
    {name:'t-shirt',image:'./1.jpg'},
    {name:'shirt',image:'./2.jpg'},
    {name:'pants',image:'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70'}
]

function displayProducts(){
   



    myproducts.map((item)=>{
        let image=document.createElement('img')
        image.src=item.image
        image.style.width="200px"
        div.appendChild(image)
    })
}
