const submitEvent = async function(event) {
    event.preventDefault()
    const myForm = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        imageUrl: document.getElementById('imageurl').value,
        brand: document.getElementById('brand').value,
        price: document.getElementById('price').value
    }
    console.log(JSON.stringify(myForm))
    const resp = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
        method: "POST",
        body: JSON.stringify(myForm),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjUwNTQ4NTAsImV4cCI6MTYyNjI2NDQ1MH0.F-daCuImBoFWGLa9pRwzdU4g9jlinUv9O4Kg6B_Lpr0",
            "Content-Type": "application/json"
        }
    })

    let body = document.getElementsByTagName('body')[0]
    let para = document.createElement('p')
    p.style.textAlign = 'center'
    para.innerText = 'Content Successfully Added!'
    body.appendChild(para)

}