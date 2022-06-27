/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
let state = {
    storeItems:[
        {
            id: 1 ,
            name: "beetroot",
            price: 0.35 ,
            inCard: 0
        },

        {
            id: 2 ,
            name: "carrot",
            price: 0.52 ,
            inCard: 0
        },

        {
            id: 3,
            name: "apple",
            price: 0.15 ,
            inCard: 0
        },

        {
            id: 4 ,
            name: "apricot",
            price: 1.5 ,
            inCard: 0
        },

        {
            id: 5 ,
            name: "avocado",
            price: 2.5 ,
            inCard: 0
        },

        {
            id: 6 ,
            name: "bananas",
            price: 1.2 ,
            inCard: 0
        },

        {
            id: 7 ,
            name: "bell-pepper",
            price: 1.75 ,
            inCard: 0
        },

        {
            id: 8 ,
            name: "berry",
            price: 1.75 ,
            inCard: 0
        },

        {
            id: 9,
            name: "bluberry",
            price: 3.5 ,
            inCard: 0
        },

        {
            id: 10 ,
            name: "eggplant",
            price: 2.15 ,
            inCard: 0
        },
    ]

    total= 0
}


function additems(item){
    item.inCard ++
}

function removeItems(item){
    item.inCard--
}

function totalSum(){
    state.total = 0

    for(let item of state.storeItems){
        state.total += item.price * item.inCard
    }

    let totalNumber = document.querySelector('.total-number')
    totalNumber?.textContent = `$${state.total.toFixed(2)}`
} 

function render() {
    renderStoreProduct()
    totalSum
}

let itemsList = document.querySelector(`.item-list store--item-list`)
let cartItemsList = document.querySelector(`.cart--item-list`)


function productOfStore(item) {
    let liEl = document.createElement("li")
    let divEl = document.createElement('div')
    divEl.setAttribute('class', 'store--item-icon')

    let imageEl = document.createElement('img')

    imageEl.setAttribute('src', `icons assets/00${item.id}-${item.name}.svg`)
    imageEl.setAttribute('alt', `${item.name}`)

    let addButton = document.createElement('button')
    addButton.textContent = 'Add to Card'
    
    divEl.append(imageEl)
    liEl.append(divEl , addButton)
    
    itemsList?.append(liEl)

    addButton.addEventListener('click', function(){
        addNewItems(item)
        render()
    })

}

