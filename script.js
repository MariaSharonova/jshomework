const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

Vue.component('goods-list', {
  props: ['goods'],
  template: `
  <div class="goods-list">
    <goods-item v-for="good in goods" :good="good" :key="good.product_name"></goods-item>
  </div>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  template: `
    <div class="goods-item">
      <h3>{{ good.product_name }}</h3>
      <p>{{ good.price }}</p>
    </div>
  `
});

Vue.component('search-goods', {
    props: ['searchline', 'searchgoods'],
    template: `
    <div>
      <input type="text" class="goods-search" v-model="searchline">
      </input>
      <button class="search-button" type="button" v-on:click="searchgoods">
      Искать
      </button>
    </div>
    `
  }
);

Vue.component('busket-list', {
  props: ['isvisiblecart', 'bgoods'],
  template: `
  <div class="busket-list" v-if='isvisiblecart == true'>
    <h3>Корзина</h3>
    <p v-if='bgoods.length==0'>Нет данных</p>
    <div class="busket-item" v-for="good in bgoods">
      <h3>{{good}}</h3>
    </div>
  </div>
  `,
});

Vue.component('disconnect', {
  props: ['isconnect'],
  template: `
  <div class="busket-list" v-if='isconnect == false'>
    <p>Нет соединения</p>
  </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods : [],
    searchLine: '11',
    isVisibleCart: false,
    isConnect: true,
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        this.isConnect = false;
        alert("Ошибка при соединении с сервером");
      }
    },

    filterGoods(value) {
      const regExp = new RegExp(value, 'i')
      this.filteredGoods = this.goods.filter(good => regExp.test(good.product_name))
    },

    searchGoods(){
     this.filterGoods(this.searchLine)
    },

    showBusket(){
      if(this.isVisibleCart == true){
        this.isVisibleCart = false
      }
      else{
      this.isVisibleCart = true
      }
    }
  },

  async mounted() {
    await this.getProducts()
  }
});

