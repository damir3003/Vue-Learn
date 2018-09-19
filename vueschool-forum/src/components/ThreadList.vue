<template>
  <div class="thread-list">
    
    <h2 class="list-title">Threads</h2>

    <ThreadLIstItem 
      v-for="thread in threads"
      :thread="thread"
      :key="thread['.key']"
    />

  </div>
</template>

<script>

import ThreadLIstItem from './ThreadListItem'

export default {

  components: {
    ThreadLIstItem
  },

  props: {
    threads: {
      required: true,
      type: Array
    }
  }
}
</script>

