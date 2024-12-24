<script setup>
import { ref, onMounted } from 'vue'
import { data } from './data'
import sawAvatar from "@/assets/saw.png"
import song from '@/assets/song.mp3'

const i = ref("start");
const rightAvatar = ref(sawAvatar);
const leftAvatar = ref(null);
const input = ref(null);
const time = ref(null);
var backgroundAudio = null;

function question() {
  return data.questions[i.value];
}

function moveAway(answer) {

  if (i.value == "start" && !backgroundAudio) {
    console.log("started song");
    backgroundAudio = new Audio(song);
    backgroundAudio.play();
  }

  input.value = null;

  Array.from(document.getElementsByClassName('full-width')).forEach(i => {
    i.style.position = "";
    i.style.left = '';
    i.style.right = '';
    i.style.width = '';
  })

  rightAvatar.value = answer.rightAvatar;
  leftAvatar.value = answer.leftAvatar;
  console.log(backgroundAudio);

  if (answer.next == "runaway") {

    let noButton = document.getElementById(answer.id);
    noButton.style.width = "80px";


    var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    if (answer.audio) {
      answer.audio.play();
    }
  } else {

    if (answer.next) {
      i.value = answer.next



      if (i.value == "merry" && backgroundAudio !== null) {
        console.log(backgroundAudio);
        backgroundAudio.pause();
      }

      rightAvatar.value = question().rightAvatar;
      leftAvatar.value = question().leftAvatar;

      if (question().input) {

        time.value = question().input.timeout;

        var timer = setInterval(() => {

          if (time.value <= 0) {
            let val = input.value ? input.value : '';
            if (question().input.correct.toLowerCase() == val.toLowerCase()) {
              i.value = question().next.correct
            } else {
              i.value = question().next.wrong
            }

            clearInterval(timer)
          }

          time.value -= 1;
        }, 1000)


      }


      if (question().audio) {
        question().audio.play();
      }
    }
  }



}


</script>

<template>
  <main>
    <div class="container" v-if="question()">
      <div class="text">{{ question().question }}</div>
      <div v-if="question().background"><img :src="question().background" width="370" ></div>

      <div v-if="question().input">
        <input type="text" class="form-control" v-model="input">
        <div>{{ time }}</div>
      </div>
      <div v-else>
        <div v-for="answer in question().answers" class="full-width ct-buttons">
          <button type="button" class="mt-3 full-width btn btn-primary" :id="answer.id" @click="moveAway(answer)" >{{ answer.text }}</button>
        </div>
      </div>
    </div>
    <div class="right-avatar" v-if="rightAvatar"><img :src="rightAvatar" /></div>
  </main>
</template>

<style scoped>
.right-avatar {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.right-avatar img {
  width: 200px;
  height: 300px;
}
.text {
  background: rgba(255, 255, 255, 0.1);
  margin: 10px 0;
  border-radius: 3px;
  padding: 10px;
  font-size: 18px;
}

.ct-buttons, .ct-buttons button {
  width: 100%
}
.container {
  margin: 0 auto;
  width: 400px;
  text-align: center
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
