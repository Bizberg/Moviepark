<template>
  <section id="cast" class="relative w-full mt-6 sm:mx-0">
    <div class="w-11/12 mx-auto sm:w-full">
      <h3 class="mb-1 text-2xl font-extrabold text-gray-300 md:ml-3 sm:mb-0 sm:text-2xl">Cast</h3>
      <div class="flex w-full mt-2 space-x-4 overflow-x-scroll rounded-md noScrollbar sm:scrollbar">
        <div v-for="(person, index) in castInfos.slice(0,20)" :key="index" class="flex-shrink-0 ">
          <div class="mb-3">
            <VueLoadImage class="relative flex-shrink-0 rounded-md md:w-card-lg md:h-card-lg w-card h-card">
              <img
                slot="image"
                class="object-cover mb-1 rounded-md md:w-card-lg md:h-card-lg w-card h-card"
                :src="person.profile_path !== null ? imgPath + person.profile_path : require('~/assets/img/noPoster.jpg')"
                :alt="'Poster of ' + person.name "
              />
              <div slot="preloader" class="rounded-md md:w-card-lg md:h-card-lg w-card h-card placeholder-content"></div>
            </VueLoadImage>
            <p class="font-bold leading-5 text-gray-300 w-card md:w-card-lg">{{ person.name }}</p>
            <p class="text-sm italic leading-5 text-gray-300 w-card md:w-card-lg">{{ person.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueLoadImage from '@/components/global/VueLoadImage'
export default {
  components: {
    VueLoadImage
  },
  props: {
    castInfos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      imgPath: 'https://image.tmdb.org/t/p/w154'
    }
  }
}
</script>
