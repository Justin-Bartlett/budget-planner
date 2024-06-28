<template>
  <div class="backdrop">
    <div class="modal">
      <div class="topnav">
        <div @click="closeModal" class="closebtn">
          <img src="../assets/close-btn.png" width="20" height="20" />
        </div>
        <div @click="closeModalAndSave" class="close-and-savebtn">
          <img src="../assets/close-and-save-btn.png" width="25" height="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  emits: ["openModal"],
  setup(props, ctx) {
    const openModal = ref(false)

    const closeModal = () => {
      ctx.emit("openModal")
      console.log('closeModal from modal reached')
    }

    const closeModalAndSave = () => {
      // TODO - save the data to firebase
      ctx.emit("openModal")
    }

    return { closeModal }
  },
}
</script>

<style>
.modal {
  color: #cca536;
  font-size: 20px;
  height: 100%;
  padding: 20px;
  background: rgba(0, 2, 24, 0.9);
}

.backdrop {
  top: 98px;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.topnav {
  padding: 0 10px;
}

.closebtn {
  float: left;
}

.close-and-savebtn {
  float: right;
}
</style>
