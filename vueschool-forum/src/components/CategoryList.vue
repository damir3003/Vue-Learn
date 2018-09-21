<template>
  <div class="col-full">
    <category-list-item v-for="category in categories" :key='category[".key"]'
      :category = 'category'/>
  </div>
</template>
<script>

import CategoryListItem from './CategoryListItem'

export default {
  components: {
    CategoryListItem
  },

  props: {
    categories: {
      requred: true,
      type: Array
    }
  }
}
</script>
