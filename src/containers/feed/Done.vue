<template lang="pug">
#done
  box(title='Thank you!')
    p.content You are all done with this part of the study. Thank you for your participation.
</template>

<script>
import box from '@/components/box';

export default {
  name: 'Done',
  components: { box },
};
</script>
