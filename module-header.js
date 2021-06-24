export let componentE={
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
  }

  export default componentE