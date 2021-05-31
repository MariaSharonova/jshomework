const goods = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 }
]


const renderGoodsItem = (title='title', price='price') => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`
}

const renderGoodsList = list => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join("")


  document.querySelector('.goods-list').innerHTML = goodsList
}

class GoodsList {
  constructor(){
    this.goods = []
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  add(basketItem){
    pass
  }
  remove(basketItem){
    pass
  }
  removeAll(){
    pass
  }
  edit(basketItem){
    pass
  }
  order(){
    pass
  }
  getAllItems(){
    pass
  }
  getCostBasket(){
    return this.goods.reduse((sum, item) => sum + item.price, 0)
  }
}


class GoodsItem {
  constructor(title, price, count){
    this.title = title
    this.price = price
    this.count = count
  }
  add(this){
    pass
  }
  remove(this){
    pass
  }
  edit(this){
    pass
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

const init = () => {
  renderGoodsList(goods)
}

window.onload = init


