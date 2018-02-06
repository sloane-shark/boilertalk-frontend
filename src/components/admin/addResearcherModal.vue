<template lang="pug">
modal(title='Add Researcher' @closeModal='$emit("closeModal")')
  addResearcherForm(@closeModal='$emit("closeModal")')
</template>

<script>
import modal from '@/components/modal';
import addResearcherForm from '@/components/admin/addResearcherForm';

export default {
  name: 'addResearcherModal',
  components: { addResearcherForm, modal },
};
</script>
