const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


console.log(window)

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods : [],
    searchLine: '',
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