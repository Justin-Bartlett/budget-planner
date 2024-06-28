<template>
  <section class="calendar-nav">
    <button class="back" @click="backBtnHandler"></button>
    <div class="date">{{ formattedDate }}</div>
    <button class="forward" @click="forwardBtnHandler"></button>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['newMonth','startMonth'],
  name: 'CalendarNav',
  setup(props, ctx) {
    // get todays date
    const date = new Date()
    const setMonth = ref(0)
    ctx.emit('startMonth', date.getMonth())

    const customDateFormatter = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long"
    })

    // make it more readable ie 24 June 2024
    let formattedDate = ref(customDateFormatter.format(date))

    const backBtnHandler = () => {
      date.setMonth(date.getMonth() - 1 )
      setMonth.value = date.getMonth()
      ctx.emit('newMonth', setMonth.value + 1)
      console.log('Back button - ', date.getMonth())
      formattedDate.value = customDateFormatter.format(date)
      // console.log(formattedDate)
    }
    const forwardBtnHandler = () => {
      date.setMonth(date.getMonth() + 1 )
      ctx.emit('newMonth', date.getMonth() + 1)
      console.log('Forward button - ', date.getMonth())
      formattedDate.value = customDateFormatter.format(date)
      // console.log(formattedDate)
    }
    return { formattedDate, backBtnHandler, forwardBtnHandler }
  },
}
</script>

<style scoped>
.calendar-nav {
  display: inline-flex;
  background-color: rgb(87, 87, 87);
  padding-top: 15px;
  padding-bottom: 15px;
  user-select: none;
}

.date {
    width: 160px;
    font-size: 20px;
    user-select: none;
}

.back {
    background-image: url(../assets/back-forward-btn.png);
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
}

.forward {
    background-image: url(../assets/back-forward-btn.png);
}

.forward {
  right: 250px;
}

.back, .forward {
    background-size: 24px 24px;
    width: 22px;
    height: 24px;
    border: none;
    background-color: rgb(87, 87, 87);
    color: rgb(209, 209, 209);
    padding-bottom: 5px;
    cursor: pointer;
}
</style>
