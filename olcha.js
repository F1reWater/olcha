let smartphones = document.querySelector('.smartphones') 
let arr = [1 , 2 , 3 , 4 , 5 , 6]
for(let item of arr) {
let smartphonesInside = document.createElement('div')
let img = document.createElement('div')
let name = document.createElement('span')
let forSpan = document.createElement('div')
let forPrice = document.createElement('div')
let prise = document.createElement('span')
let forSprice = document.createElement('div')
let Sprice = document.createElement('span')
let forTprice = document.createElement('div')
let Tprice = document.createElement('span')
let button = document.createElement('button')



smartphonesInside.classList.add('smartphones-inside')
img.classList.add('image')
name.classList.add('name')
forSpan.classList.add('for-span')
forPrice.classList.add('for-price')
prise.classList.add('price') 
forSprice.classList.add('forSprice')
Sprice.classList.add('Sprice')
forTprice.classList.add('for-span')
Tprice.classList.add('name')
button.classList.add('baton')



prise.innerHTML = '3 178 000 сум'
name.innerHTML = 'Смартфоны'
Sprice.innerHTML = 'от 329 000 сум/месяц'
Tprice.innerHTML = 'Смартфон Xiaomi Redmi <br> Note 11 Pro 128GB 8 GB Grey'
button.innerHTML = 'Купить'



smartphones.append(smartphonesInside)
smartphonesInside.append(img)
forSpan.append(name)
smartphonesInside.append(forSpan)
smartphonesInside.append(forPrice)
forPrice.append(prise)
smartphonesInside.append(forSprice)
forSprice.append(Sprice)
smartphonesInside.append(forTprice)
forTprice.append(Tprice)
smartphonesInside.append(button)
} 