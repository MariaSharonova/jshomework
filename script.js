const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";



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

