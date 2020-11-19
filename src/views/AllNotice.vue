<template>
  <section class="body">
    <div>
      <h1 class="heading">Notice Board</h1>
      <!-- <Notice/> -->
      <p style="padding:10px;text-align:center;">
        Want to Add a notice?<router-link style="color:red;" to="/addnotice">
          Click here!</router-link
        >
      </p>
      <ul v-if="noticearr.length !== 0">
        <li v-for="not in noticearr" :key="not.id">
          <div style="float:left">
            <span style="color:blue"
              ><small
                ><strong>{{ not.user + "  " }}</strong></small
              ></span
            >
            <span style="color:transparent">|</span>
            <i
              class="far fa-calendar-alt"
              style="font-size:11px;color:blue"
            ></i>
            <span style="color:transparent">|</span>
          </div>
          <div style="margin:0px">
            <span style="color:blue"
              ><small>{{ not.timestamp }}</small></span
            >
          </div>
          <div style="text-align:left;clear:both">
            <span
              ><strong>{{ not.notices }}</strong></span
            >
          </div>
        </li>
      </ul>

      <ul v-else>
        <li>There is no notice at present right now</li>
      </ul>
    </div>
  </section> </template
>y

<script>
import firebase from "firebase";
export default {
  //   name: "AllNotice",
  data() {
    return {
      noticearr: []
    };
  },
  methods: {
    async fetchnotice() {
      var db = firebase.firestore();
      db.collection("noticeboard")
        .orderBy("timestamp", "desc")
        .onSnapshot(querySnapshot => {
          let allnotice = [];
          querySnapshot.forEach(doc => {
            allnotice.push(doc.data());
          });

          this.noticearr = allnotice;
        });
    }
  },
  created() {
    this.fetchnotice();
  }
};
</script>

<style scoped>
.body {
  background: linear-gradient(to bottom right, white, #bcbdc4);
  padding: 15px;
  min-height: 400px;
}
.heading {
  background-image: url("../assets/walpaper.jpg");
  background-size: 40rem;
  margin: auto;
  width: 90%;
  max-width: 40rem;
  padding: 15px;
  border-radius: 10px;
  color: whitesmoke;
  text-align: center;
}
p {
  font-size: large;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  box-shadow: 0 2px 8px #1e0c42;
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  /* text-align: center; */
  width: 90%;
  max-width: 40rem;
  background-color: whitesmoke;
  font-family: "Times New Roman", Times, serif;
  font-size: larger;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
