<template>
  <div class="container">
    <div class="card-container">
      <div class="allblogs" v-for="blog in blogs" :key="blog.id">
        <div
          class="card bg-light mb-5  card-container"
          style="max-width: 60rem; font-size:30px"
        >
          <div class="card-header">{{ blog.title }}</div>
          <div class="card-body">
            <p class="card-text" id="card-text">
              {{ blog.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed-btn ml-auto">
      <router-link to="./addblog"
        ><i class="fas fa-plus fa-sm"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "allblog",
  data() {
    return {
      blogs: []
    };
  },
  created() {
    var db = firebase.firestore();
    db.collection("blogs")
      .orderBy("timestamp", "desc")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          let blog = doc.data();
          blog.id = doc.id;
          this.blogs.push(blog);
          console.log(blog.title + "=>" + blog.description);
        });
      });
  }
};
</script>

<style scoped>
.card-container {
  max-width: 60rem;
  margin-top: 70px;
}
.heading {
  margin-top: 10vh;
  margin-bottom: 90px;
}
#card-text {
  font-size: 20px;
}
.fixed-btn {
  position: fixed;
  height: 80px;
  text-shadow: 1px 1px 1px #ccc;
  text-shadow: 0 0 9px #000;
  right: 3%;
  top: 12%;
  cursor: pointer;
  display: flex;
  width: 5vw;
  height: 5vw;
  font-size: 4rem;
  border-radius: 25vw;
  overflow: hidden;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #ffe14d;
  /* box-shadow: 0 1px 10px rgba(0, 0, 0, 0.46); */
  opacity: 0.8;
  transition: background 0.5s, color 1s, opacity 0.5s, border 0.5s;
}

.fixed-btn:hover {
  opacity: 1;
  color: deepskyblue;
  border-color: deepskyblue;
}
</style>
