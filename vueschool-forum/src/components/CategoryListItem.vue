<template>
  <div class="forum-list">
      <h2 class="list-title">
          <router-link :to="{name: 'Category', params:{id: category['.key']}}">
            {{category.name}}
          </router-link>
      </h2>
      <forum-list :forums="forums"/>
  </div>
</template>
<script>
import sourceData from '@/data'
import ForumList from './ForumList'

export default {

  components: {
    ForumList
  },

  props: {
    category: {
      requered: true,
      type: Object
    }
  },

  computed: {

    forums () {
      return Object.values(sourceData.forums)
        .filter(forum => forum.categoryId === this.category['.key'])
    }
  }

}
</script>
