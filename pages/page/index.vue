<template>
  <h5>跳转中</h5>
</template>

<script>
export default {
  fetch ({redirect}) {
    redirect('/m/page/1');
  }
};
</script>
