const API_URL =  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses"

class GoodsItem {
  constructor(title, price, id){
    this.title = title
    this.price = price
    this.id = id
  }

  render() {
    return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3><p>${this.price}</p><button class="add-button" type="button" id=${this.id}>Добавить в корзину</button></div>`
  }
}


class GoodsList {
  constructor(){
    this.goods = []
    this.filteredGoods =[]
  }
  async fetchGoods() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
      this.filteredGoods= catalogItems
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }

  filterGoods(value) {
    const regExp = new RegExp(value, 'i')
    this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
    this.render()
  }

  render() {
    let listHtml = "";
    this.filteredGoods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}
class BucketList {
  constructor(){
    this.items = []
  }
  addItem(title, price, id){
    let item = new BucketItem(title, price, id)
    this.items.push(item)
  }
  removeItem(item){
    this.items.removeItem(item)
  }
  getAllItems(){
    return this.items
    
  }
  

}
class BucketItem {
  constructor(title, price, id){
    this.title = title
    this.price = price
    this.id = id
  }
  
}

const init = async () => {
  const list = new GoodsList();
  await list.fetchGoods();
  const bucket = new BucketList()
  console.log(bucket)
  list.render();


const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.goods-search')

searchButton.addEventListener('click', () => {
  list.filterGoods(searchInput.value)
})
const addButton = document.querySelectorAll('.add-button').forEach(button=>
  button.addEventListener('click', ()=>{
    bucket.addItem('123', '123', '123')
    console.log(bucket.getAllItems())
  })
)
const cartButton = document.querySelector('.cart-button')
  cartButton.addEventListener('click', () => {
    console.log(bucket.getAllItems())
  })

};

window.onload = init;

