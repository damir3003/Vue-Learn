<template>
  <form @submit.prevent="save">
      <div class="form-group">
        <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10"
          class="form-input"
          v-model="newPostText">
          </textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
</template>
<script>
export default {

  data () {
    return {
      newPostText: ''
    }
  },

  props: {
    threadId: {
      required: true,
      type: String
    }
  },

  methods: {
    save () {
      const postId = 'newPost' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'L664y3qZSubDbT1R6npC0EEybJ73',
        '.key': postId
      }
      this.newPostText = ''

      this.$emit('save', {post})
    }
  }
}
</script>
