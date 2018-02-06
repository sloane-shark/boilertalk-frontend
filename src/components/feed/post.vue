<template lang="pug">
.post
  .card
    .card-content
      .media
        .media-left
          avatar(:username='post.author')
        .media-content
          p.title.is-4 {{ post.author }}
          p.subtitle.is-6
            | posted {{ new Date() | moment('subtract', Math.random() + ' hours', 'from') }}
          .content
            p(v-if='post.type === "text"') {{ post.content }}
            linkPrevue(v-if='post.type === "link"' :url='post.content')
              template(slot-scope='props')
            p(v-if='post.type === "event"') {{ post.content }}
    .card-footer
      a.card-footer-item
        .icon
          i.fas.fa-comment
        span &nbsp;Comment
      a.card-footer-item(@click='toggleLike')
        .icon
          i.fas.fa-thumbs-up(v-if='post.liked')
          i.far.fa-thumbs-up(v-else)
        span &nbsp;{{ post.likes }} | Like
      a.card-footer-item(@cloick='toggleDislike')
        .icon
          i.fas.fa-thumbs-down(v-if='post.disliked')
          i.far.fa-thumbs-down(v-else)
        span &nbsp;{{ post.dislikes }} | Dislike
  comment(
    v-for='(comment, index) in post.comments'
    :comment='comment'
    :key='index'
    :index='index'
  )
</template>

<script>
import avatar from 'vue-avatar';
import linkPrevue from 'link-prevue';
import comment from './comment';

export default {
  name: 'post',
  props: ['post', 'index', 'key'],
  components: { avatar, linkPrevue, comment },
};
</script>

<style lang="sass" scoped>
.card
  border-radius: 5px
  margin-bottom: 0.5rem
.post
  margin-bottom: 2rem
</style>
