export let componentA={
    props: ['goods'],
    template: `
      <div class="goods-list">
        <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"> </goods-item>
      </div>
    `
  }

  export default componentA