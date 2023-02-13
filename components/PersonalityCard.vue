<template>
  <div class="container lg:max-w-4xl py-10 px-5 sm:py-20 sm:px-12 mx-auto bg-white rounded-[50px] my-10 sm:my-20">
    <div class="columns-1">
      <div class="profile flex items-center flex-row py-1 pl-5 sm:pl-10">
        <div class="profile__img xs: w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden">
          <img class="object-fill" :src="person.avatar" />
        </div>
        <div class="pl-5 sm:pl-12 min-w-min">
          <div class="text-[30px] leading-[40px] sm:text-[50px] sm:leading-[82px] font-bold whitespace-nowrap">
            {{ fullName }}
          </div>
          <div class="text-[20px] leading-[35px] sm:text-[35px] sm:leading-[57px]">{{ yearsOld }} / {{ person.gender }}</div>
        </div>
      </div>
    </div>

    <div class="columns-1 mt-8 sm:mt-16 py-2 px-5 sm:px-10">
      <div class="description">
        <p>{{ desc }}</p>
      </div>
    </div>

    <div class="columns-1 pl-5 sm:pl-10 mt-10 sm:mt-24">
      <h1 class="font-extrabold">Details</h1>

      <table class="">
        <tbody>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Username:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ person.username }}</td>
        </tr>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Date of Birth:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ birthDate }}</td>
        </tr>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Phone:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ person.phone_number }}</td>
        </tr>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Email:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ person.email }}</td>
        </tr>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Subscription:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ person.subscription.plan }}</td>
        </tr>
        <tr>
          <td class="font-bold min-w-min whitespace-nowrap align-top">Location:</td>
          <td class="pl-6 sm:pl-16 pr-4">{{ location }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="columns-1 pl-5  sm:pl-10 mt-10 sm:mt-24">
      <h1 class="font-extrabold">Brands</h1>

      <div class='my-3 flex flex-wrap gap-4'>
        <span
            v-for="brand in brands"
            class=" items-center bg-gray-100 hover:bg-gray-200 rounded-xl pt-2 pb-1.5 px-6 cursor-pointer">
          {{ brand.brand }}
        </span>
      </div>

    </div>

    <div class="columns-1 mt-24 flex justify-center">
      <button
          @click="getPerson"
          class="px-6 py-3.5 font-bold text-2xl leading-8 sm:text-3xl sm:leading-9 rounded-xl bg-orange-150 hover:bg-orange-400 text-white ">
        Random Student
      </button>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import {usePersonStore} from '../store/person';

export default defineNuxtComponent({
  fetchKey: "PersonalityCard",
  methods: {
    ...mapActions(usePersonStore, ['getPerson']),
  },
  computed: {
    ...mapState(usePersonStore, ['person', 'desc', 'location', 'birthDate', 'brands', 'yearsOld', 'fullName'])
  }
})
</script>

<style scoped lang="scss">
.profile {
  & .profile__img {
    background: linear-gradient(0deg, #FFC9B3 0%, #FFD2C2 100%);
  }

  & .profile__name {
    color: rgba(0, 0, 0, 0.8);
  }

  & .profile__age {
    color: #919191;
  }
}
</style>