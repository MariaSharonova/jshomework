
export let componentC ={
    props: ['basket'],
    template: `
      <div class="basket-list">
        <basket-item v-for="basketEntity in basket" :basketProp="basketEntity"> </basket-item>
      </div>
    `
  }
  export default componentC
  