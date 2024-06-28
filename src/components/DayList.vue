<template>
  <section class="day-row">
    <div class="row" v-for="date in thisMonthCalendar" :key="date.id">
      <div class="date">
        {{ formatDate(new Date(date.date.seconds * 1000)) }}
        {{ getMonth(new Date(date.date.seconds * 1000)) }}
      </div>
      <div class="incoming">£{{ date.incoming }}</div>
      <div class="outgoing">£{{ date.outgoing }}</div>
      <div class="balance">£{{ balance }}</div>
    </div>
  </section>
</template>

<script>
import { onUpdated, ref } from "vue"
import getCollection from "@/composables/getCollection"

export default {
  props: ["month"],
  setup(props) {
    const incoming = ref(0)
    const balance = ref(0)
    const incomingDescription = ref("")
    const outgoingDescription = ref("")
    const month = ref(7)

    const formatDate = (date) => {
      const customDateFormatter = new Intl.DateTimeFormat("en-GB", {
        weekday: "short",
        day: "numeric",
      })

      const formattedDate = ref(customDateFormatter.format(date))
      return formattedDate.value
    }

    const getMonth = (date) => {
      const customDateFormatter = new Intl.DateTimeFormat("en-GB", {
        month: "long",
      })
      const formattedDate = ref(customDateFormatter.format(date))
      return formattedDate.value
    }

    const { thisMonthCalendar, error, loadMonth } = getCollection()

    onUpdated(() => {
      month.value = props.month
      // console.log("DayList onUpdated props: month = ", month.value)
      loadMonth(month.value)
      // console.log('DayList onUpdated loadMonth: ', month.value)
    })

    return {
      incoming,
      incomingDescription,
      outgoingDescription,
      thisMonthCalendar,
      formatDate,
      balance,
      getMonth,
      month,
    }
  },
}
</script>

<style scoped>
.day-row {
  display: block;
  width: 100%;
  background: #2c3e50;
}

.row {
  justify-content: center;
  align-items: center;
}

.light {
  background: #3d4f61;
  display: grid;
  grid-template-columns: 70px 1fr 1fr 1fr;
}

.dark {
  background: #2c3e50;
  display: grid;
  grid-template-columns: 70px 1fr 1fr 1fr;
}

.day,
.title {
  height: 30px;
}

.date-title {
  width: 100px;
}

.date {
  width: 50px;
  font-size: 14px;
  padding-top: 16px;
  margin-left: 10px;
}

.incoming,
.outgoing,
.balance {
  background-color: #8f969429;
  min-width: 60px;
  margin: 14px 18px;
  font-size: 14px;
  border-radius: 14px;
  box-sizing: border-box;
}

.pound {
  background: #8bb5da;
  position: relative;
  left: 11px;
  padding-top: 11px;
  font-size: 20px;
}

input.incoming-description {
  font-size: 20px;
  border: none;
}
</style>
