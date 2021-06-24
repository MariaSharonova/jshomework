export let componentD={
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
  }

  export default componentD