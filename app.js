
Vue.component('list', {
  props: ['category', 'item', 'name', 'done', 'group'],

  template: `<ul class="list-group">
  <li class="list-group-item list-group-item-dark" >{{category}}</li>
  <li class="list-group-item">
    <input type="checkbox" aria-label="Checkbox for following text input" v-model="item.done" >
    <label :class="{itemDone: item.done}">{{name}}</label>
   
  </li>
</ul>`
})

const app = new Vue({
  el: '#app',

  data: {
    category: '',
    categories: ['Bakery', 'Beverages', 'Baking Goods', 'Canned Goods', 'Dairy', 'Frozen Food', 'Meat', 'Other', 'Pantry', 'Produce'],
    items: [
      { category: 'Bakery', name: 'Bread', done: false },
      { category: 'Baking Goods', name: 'Flour', done: false },
      { category: 'Dairy', name: 'Milk', done: false }
    ],
    name: ''
  },
  methods: {
    addItem: function () {


      this.items.push({
        name: this.name,
        category: this.category,
        done: false
      })
      this.name = ''

    }
  }

})
