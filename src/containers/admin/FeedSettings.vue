<template lang="pug">
#feed-settings
  box(title='Feed Settings')
    textPost(
      :post=`{ author: "mat",
        content: "hello world!"}`
      :date='new Date()'
    )
    textPost(
      :post=`{ author: "mack",
        content: "hello world!",
        meta: ""}`
      :date='new Date()'
    )
    linkPost(
      :post=`{ author: "jay",
        content: "http://google.com/"}`
      :date='new Date()'
    )
    eventPost(
      :post=`{ author: "pablo",
        content: "Tuesday @ 10pm"}`
      :date='new Date()'
    )
</template>

<script>
import box from '@/components/box';
import textPost from '@/components/feed/textPost';
import linkPost from '@/components/feed/linkPost';
import eventPost from '@/components/feed/eventPost';

export default {
  name: 'FeedSettings',
  components: { box, textPost, eventPost, linkPost },
};
</script>
