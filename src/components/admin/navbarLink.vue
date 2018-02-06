<template lang="pug">
router-link.navbar-item(
  :to='to'
  :class='{ "is-active": active === to}'
) {{ text }}
</template>

<script>
export default {
  name: 'navbarLink',
  props: {
    to: { type: String, required: true },
    active: { type: String, required: true },
    text: { type: String, required: true },
  },
};
</script>
