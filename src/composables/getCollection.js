import { projectFirestore } from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"
import { ref } from "vue"

const getCollection = () => {
  const calendarDates = ref([])
  const thisMonthCalendar = ref([])
  const error = ref(null)

  const loadMonth = async (month) => {
    try {
      const calendar = collection(projectFirestore, "Calendar")
      const calendarSnapshot = await getDocs(calendar)
      calendarDates.value = calendarSnapshot.docs.map((doc) => doc.data())

      thisMonthCalendar.value = calendarDates.value.filter(
        (thisMonth) =>
          new Date(thisMonth.date.seconds * 1000).getMonth() + 1 === month
      )
      // console.log('loadMonth thisMonthCalendar = ', thisMonthCalendar.value)
    } catch (err) {
      error.value = err.message
      console.log("ERROR****** ", error.value)
    }
  }

  return { thisMonthCalendar, error, loadMonth }
}

export default getCollection
