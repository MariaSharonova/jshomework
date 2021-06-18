const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";



Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"> </goods-item>
    </div>
  `
})

Vue.component('goods-item', {
  props: ['goodProp'],
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button class="cart-button" v-on:click="addToBasket('name')" type="button">Добавить</button>
    </div>
  `,
  methods:{
    addToBasket: function() {
      this.$root.addToBasket(this.goodProp.id_product);
    }
  }
})


Vue.component('basket-list',{
  props: ['basket'],
  template: `
    <div class="basket-list">
      <basket-item v-for="basketEntity in basket" :basketProp="basketEntity"> </basket-item>
    </div>
  `
})

Vue.component('basket-item',{
  props: ['basketProp'],
  template: `
    <div class="basket-list" v-if="isVisibleCart !== false">
      <h3>Корзина</h3>
      <div class="basket-item">
        <h3>{{basketProp.product_name}}</h3>
        <p>{{basketProp.price}}</p>
        <<p>Количество {{basketProp.quantity}}</p>
        <button class="cart-button" v-on:click="deleteFromBasket(basketProp.id_product)" type="button">Удалить</button>
      </div>
    </div>
  `,
  methods:{
    addToBasket: function() {
      this.$root.deleteFromBasket();
    }
  }
})

Vue.component('header-component', {
  props: ['value'],
  template: `
    <div>
         <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
      <button class="search-button" v-on:click="FilterGoods" type="button">Искать</button>
      <button class="cart-button" v-on:click="onClickViewCart" type="button">Корзина</button>
    </div>
    
  `,
  methods:{
    FilterGoods: function() {
      this.$root.FilterGoods();
    },
    onClickViewCart: function() {
      this.$root.onClickViewCart();
    }
  }
})

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    searchLine: '',
    filteredBasket: [],
    isVisibleCart: false,
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },

    FilterGoods()  {
      let text = this.searchLine;
      if (text === '') {
          this.filteredGoods = this.goods;
      } else {
          this.filteredGoods = this.goods.filter((el) => {
              return el.product_name.includes(text);
          });
      };
    },

    onClickViewCart() {
      switch(this.isVisibleCart) {
        case(false):
            this.isVisibleCart = true;
            break;
        case(true):
            this.isVisibleCart = false;
            break;
      }
    },

    addToBasket(id) {
      let toBasket;
      this.goods.forEach((item)=> {
        if(id == item.id_product) {
          toBasket = {
            id_product: item.id_product,
            product_name: item.product_name,
            price: item.price,
            quantity: 1,
          }
        }
      });
      if(this.filteredBasket.length === 0 ){
        this.filteredBasket.push(toBasket);
      } else{basketCheck = true
        this.filteredBasket.forEach(function(item) {
          if(toBasket.id_product === item.id_product) {
              basketCheck = false;
              item.quantity += 1
          } 
        });
        if(basketCheck === true){
          this.filteredBasket.push(toBasket);
        } 
      }
    },

    deleteFromBasket(id) {
      this.filteredBasket.forEach(function(item) {
        if(id === item.id_product) {
            item.quantity -= 1
        } 
      });
      this.filteredBasket = this.filteredBasket.filter((el) => {
         return el.quantity > 0;
      });
    },
  },

  async mounted() {
    await this.getProducts()
  }
});