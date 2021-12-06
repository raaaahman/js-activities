const products = [
    {
        name: "Frenchiest Fries",
        type: "fries",
        price: 1.5
    },
    {
        name: "Great American Potatoes",
        type: "fries",
        price: 2.5
    },
    {
        name: "Baconzilla",
        type: "burger",
        price: 4.5
    },
    {
        name: "Cheesosaurus",
        type: "burger",
        price: 4
    },
    {
        name: "Beefy Buffalo",
        type: "burger",
        price: 5
    },
    {
        name: "Cool Cola",
        type: "soda",
        price: 1
    },{
        name: "Fizzy Orange",
        type: "soda",
        price: 1
    },{
        name: "Fizzy Lemon",
        type: "soda",
        price: 1.5
    },
]

const productTemplate = document.getElementById('product-template')
const productsRow = document.getElementById('products-row')

for (let i = 0; i < products.length; i++) {
    const productData = products[i]
    const productElement = productTemplate.cloneNode(true)

    productElement.getElementsByClassName('card-img-top')[0].src = `https://loremflickr.com/320/240/${productData.type}?random=${i}`
    productElement.getElementsByClassName('card-img-top')[0].alt = productData.type
    productElement.getElementsByClassName('card-title')[0].innerText = productData.name
    productElement.getElementsByTagName('strong')[0].innerText = productData.price + ' €'
    productElement.classList.remove('d-none')

    productsRow.append(productElement)
}