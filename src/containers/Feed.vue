<template lang="pug">
#feed
  box(title='Welcome to your feed!')
    setNameForm(v-if='participant === ""')
    template(v-else)
      postComposer
      template(v-for='(post, index) in posts')
        post(:post='post' :date='new Date()')
</template>

<script>
import { mapState } from 'vuex';
import box from '@/components/box';
import post from '@/components/feed/post';
import setNameForm from '@/components/feed/setNameForm';
import postComposer from '@/components/feed/postComposer';

export default {
  name: 'Feed',
  components: { box, setNameForm, post, postComposer },
  data() {
    return {
      posts: [{
        id: 0,
        type: 'link',
        content: 'Interesting video about racial discrimination. What\'s your take? | Employee Says Versace Outlet In Livermore Racially Profiled Black Shoppers',
        image: 'https://img.youtube.com/vi/ZVLUjhuvrIY/maxresdefault.jpg',
        link: 'https://www.youtube.com/watch?v=ZVLUjhuvrIY',
        author: 'Boilertalk',
        likes: 3,
        dislikes: 1,
        liked: false,
        disliked: false,
        comments: [{ body: 'I think Versace shouldn’t get in trouble for this. It’s common knowledge that black people are more likely to steal from a store. And it’s not like they’re treating those customers differently, they’re just letting other employees know that there is a potential thief in the store. It’s stupid to make such a big deal out of this.', author: 'Hannah' }],
      },
      {
        id: 1,
        type: 'text',
        content: 'hey guys can anyone tell me the profs email for PSY 120??? All of a sudden i cant access the blackboard page',
        author: 'Jayden',
        likes: 1,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 2,
        type: 'text',
        content: 'Anyone doing anything fun this weekend? I know im planning on going to the bars with some friends',
        author: 'Emily',
        likes: 5,
        dislikes: 1,
        liked: false,
        disliked: false,
        comments: [{ body: 'Studying, lol :(', author: 'Chris' }],
      },
      {
        id: 3,
        type: 'link',
        content: 'What Would You Do: Customers discriminate against Hispanic waiter',
        link: 'https://abcnews.go.com/WhatWouldYouDo/video/customers-discriminate-hispanic-waiter-48512970',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 4,
        type: 'link',
        content: 'Black Lives Matter: Philadelphia Super Bowl Riots Reaction ‘Glaring Example of White Privilege’',
        image: 'https://s.yimg.com/ny/api/res/1.2/GGLRHU56e.JcvMwbOpuuZQ--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-GB/homerun/newsweek_europe_news_328/55e5076247d1e3661dc1d3929ae394d8',
        link: 'https://www.yahoo.com/news/black-lives-matter-philadelphia-super-135325429.html',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 5,
        type: 'link',
        content: 'SpaceX: Elon Musk plans to drive a Tesla to Mars (with some Falcon Heavy rocket help)',
        image: 'https://media.gannett-cdn.com/38321750001/38321750001_5688587341001_5688588161001-vs.jpg?pubId=38321750001',
        link: 'https://www.usatoday.com/story/tech/talkingtech/2018/02/05/falcoln-heavy-elon-musk-plans-drive-tesla-roadster-mars-spacex/309298002/',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 6,
        type: 'text',
        content: 'Study Abroad at Purdue: Student Photos from Budapest, Hungary',
        image: 'https://scontent.find1-1.fna.fbcdn.net/v/t1.0-9/27332318_10211528490390437_945994155688739710_n.jpg?oh=6bfa8d09b720d61cb9049ab03a2a7e11&oe=5B112A1A',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 7,
        type: 'link',
        content: 'There’s Scientific Evidence That Clutter Causes Anxiety',
        image: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2018/01/01131846/clutter_anxiety_featured.jpg',
        link: 'https://parentingisnteasy.co/messy-home-anxiety/?utm_source=adalia&utm_medium=facebook&utm_campaign=parents',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 8,
        type: 'link',
        content: 'Wall Street Journal names Purdue 5th best public university in U.S.',
        image: 'https://www.gannett-cdn.com/-mm-/5299459e3f2e4ce9d78a447da673c27787d10f93/c=0-0-3399-2556&r=x404&c=534x401/local/-/media/2017/09/27/INGroup/LafayetteIN/636421230152594693-LAFBer-09-28-2016-JC-1-A004--2016-09-27-IMG-110912-loc-purdue-1-1-8HFRR74G-L890379894-IMG-110912-loc-purdue-1-1-8HFRR74G.jpg',
        link: 'https://www.jconline.com/story/news/college/2017/09/27/wall-street-journal-names-purdue-5th-best-public-university-u-s/707976001/',
        author: 'Boilertalk',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 9,
        type: 'text',
        content: 'Welp, Little Pete saw his shadow too. Looks like it\'s another six weeks of winter. Let\'s make the best of it, Boilermakers! #BoilerUp #GroundhogDay',
        image: 'https://scontent.find1-1.fna.fbcdn.net/v/t31.0-8/27503595_10155456851838915_5164422539182381501_o.jpg?oh=d7fd7f9f2137cbb18225873d766bd18b&oe=5B22E25E',
        author: 'Purdue University',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      },
      {
        id: 10,
        type: 'link',
        content: 'Tyler Trent is just like any other freshman here at Purdue. He goes to class, he’s active on campus, he spends time with friends, and he cheers on the Boilermakers — camping out outside of Mackey Arena and traveling to away games. Only Tyler does it all while battling cancer.',
        image: 'https://www.colts.com/assets/images/imported/IND/upload/Tyler-Trent-cover.jpg',
        link: 'https://www.colts.com/news/article-roundup/Purdue-Student-Attends-College-Battles-Cancer-And-Inspires-Others/965f7cda-6a59-4bcf-8377-3ea69af86bbf',
        author: 'Purdue University',
        likes: 2,
        dislikes: 0,
        liked: false,
        disliked: false,
        comments: [],
      }],
    };
  },
  computed: {
    ...mapState({
      participant: state => state.feed.participant,
      experimenterCode: state => state.feed.experimenterCode,
    }),
  },
  mounted() {
    if (this.experimenterCode === null) {
      this.$router.push('login');
    }
  },
};
</script>
