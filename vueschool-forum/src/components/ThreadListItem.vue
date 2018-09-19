<template>
  <div class="thread">

    <div>
      <p>
        <router-link :to="{name: 'PageThreadShow', params: {id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>

      <p class="text-faded text-xsmall">
        By <a href="#">{{user.name}}</a>, {{thread.publishedAt}}
      </p>
    </div>    

    <div class="activity">
      <p class="replies-count"> 
        {{repliesCount}} replies
      </p>

      <img  class="avatar-medium" src="https://shunjalica.files.wordpress.com/2010/03/4660_1158801606295_1115427718_482453_2395036_n.jpg?w=479" alt=""/>

      <div>
        <p class="text-xsmall">
          <a href="profile.html">Bruce wayne</a>
        </p>

        <p class="text-xsmall text-faded">2 hours ago</p>

      </div>

    </div>
  </div>
</template>

<script>

import sourceData from '@/data'

export default {
  props: {
    thread: {
      required: true,
      type: Object
    }
  },

  computed: {
    repliesCount () {
      return Object.keys(this.thread.posts).length - 1
    },

    user () {
      return sourceData.users[this.thread.userId]
    }
  }
}
</script>
