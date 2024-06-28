<template>
  <div class="top-section">
    <header>Budget Planner</header>
    <CalendarNav @new-month="setTheMonth" />
    <div class="finance-wrapper">
      <section class="finance-info">
        <div></div>
        <div class="income-info">IN</div>
        <div class="expense-info">OUT</div>
        <div class="balance-info">BALANCE</div>
      </section>
      <button @click="addTransaction" class="add-btn" type="image">
        <img
          class="add-btn-img"
          src="../assets/add-button.png"
          alt="add button"
        />
      </button>
    </div>
  </div>
  <Modal v-if="modalOpen" @open-modal="openModal" />
  <DayList :month="month" class="day-view" />
</template>

<script>
import DayList from "@/components/DayList.vue"
import CalendarNav from "./CalendarNav.vue"
import Modal from "./AddTransaction.vue"
import { ref } from "vue"

export default {
  components: { CalendarNav, DayList, Modal },
  setup() {
    const outgoing = ref(0)
    const incoming = ref(0)
    const month = ref(0)
    const modalOpen = ref(false)
    let balance = 0

    const addTransaction = async () => {
      modalOpen.value = true
      // const transaction = {
      //   date: timestamp(),
      //   incoming: incoming.value,
      //   outgoing: outgoing.value,

      // }
      // const res = await projectFirestore.collection("Calendar").add(transaction)
      console.log("Transaction added to db")
    }

    const openModal = (emittedBoolean) => {
      modalOpen.value = emittedBoolean
      console.log("modal opened by Main", modalOpen.value)
    }

    const setTheMonth = (emittedMonth) => {
      month.value = emittedMonth
      console.log("month recieved by Main", month.value)
    }

    return {
      CalendarNav,
      DayList,
      Modal,
      outgoing,
      incoming,
      balance,
      addTransaction,
      month,
      setTheMonth,
      modalOpen,
      openModal
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finance-wrapper {
  user-select: none;
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 14px;
  background: #173d3d;
}

.top-section {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 121px;
  background-color: rgb(87, 87, 87);
  box-shadow: 0 4px 60px -26px rgb(255, 255, 255);
}

.day-view {
  margin-top: 129px;
}

header {
  font-size: 30px;
  background: #474747;
  color: #42b983;
  user-select: none;
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.finance-info,
.finance {
  display: grid;
  grid-template-columns: 70px 1fr 1fr 1fr;
}

.finance-info > div,
.finance > div {
  flex-grow: 1;
}

.finance {
  padding-top: 0;
}

.outgoing,
.red {
  color: rgb(234 109 109);
}

.income,
.black {
  color: #42b983;
}

.add-btn {
  position: fixed;
  bottom: 100px;
  right: 25px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
}

.add-btn-img {
  width: 40px;
  height: 40px;
  opacity: 1;
}

.day-view {
  display: block;
  width: 100%;
}
</style>
