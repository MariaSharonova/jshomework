export let componentB={
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
  }

  export default componentB