<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <category-list :categories="categories"/>
  </div>

</template>

<script>

import sourceData from '@/data'

import CategoryList from '@/components/CategoryList'

console.log(sourceData)

export default {

  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  },

  components: {
    CategoryList
  }

}
</script>