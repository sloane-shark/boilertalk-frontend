<template lang="pug">
modal(title='Change password' @closeModal='$emit("closeModal")')
  changePasswordForm(@closeModal='$emit("closeModal")')
</template>

<script>
import modal from '@/components/modal';
import changePasswordForm from '@/components/admin/changePasswordForm';

export default {
  name: 'changePasswordModal',
  components: { changePasswordForm, modal },
};
</script>
