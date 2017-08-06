<style>
</style>
<template>
    <div>
      <router-link class="post" v-for="post in posts" :to="{name: 'post-id', params: {id:post.id}}" :key="post.id">
        <div>
          <p>{{post.title}}</p>
          <img :src="'http://api.yefun.top' + post.image">
          <p>{{post.created_at.slice(0, 10)}}</p>
        </div>
      </router-link>
    </div>
</template>

<script>
import axios from 'axios';
import ghost from '~/plugins/ghost-url.js';
export default {
  validate ({params}) {
    return !isNaN(+params.page);
  },
  asyncData ({params}) {
    return axios.get(ghost.api('posts', {
      page: +params.page,
      include: 'tags, author',
      limit: 10,
      fields: 'author_id, id, title, meta_description, created_at, image, meta_title, slug'
    })).then(({data}) => {
      return {
        posts: data.posts,
        meta: data.meta
      }
    });
  },
  computed: {

  }
}
</script>

