<template lang="pug">
#login
  splitBox
    .right(slot='right')
      openFeedForm
    .left(slot='left')
      adminLoginForm
</template>

<script>
import splitBox from '@/components/splitBox';
import openFeedForm from '@/components/feed/openFeedForm';
import adminLoginForm from '@/components/admin/loginForm';

export default {
  name: 'Login',
  components: { splitBox, openFeedForm, adminLoginForm },
};
</script>
