<style type="text/css">
  
</style>
<template>
  <div>
    <div>
      <h1>{{post.title}}</h1>
      <div v-html="post.html"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios';
import ghost from '~/plugins/ghost-url.js';
export default {
  valiDate ({params}) {
    return !isNaN(+params.id);
  },
  asyncData ({params}) {
    const postUrl = '/posts/' + params.id;
    return axios.get(ghost.api(postUrl)).then(({data: {posts: [post]}}) => {
      return {
        post: post
      }
    });
  }
}
</script>