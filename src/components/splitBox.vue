<template lang="pug">
.box
  .columns
      .column
        slot(name='right')
      .is-divider-vertical
      .column
        slot(name='left')
</template>

<script>
export default {
  name: 'splitBox',
};
</script>
