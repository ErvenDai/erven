<template>
</template>
<script type="text/javascript">
export default {
  asyncData ({redirect}) {
    redirect('/page/1');
    // this.$route.push({name: 'page-id', params: {id: 1}});
  }
}
</script>