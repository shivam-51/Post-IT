<template>
  <div class="container">
    <div class="card-container">
      <div class="allblogs" v-for="blog in blogs" :key="blog.id">
        <div class="card bg-light mb-5" style="max-width: 60rem;">
          <div class="container ">
            <span
              ><b style="font-size:22px"> {{ blog.title }}</b></span
            >
          </div>
          <!-- <div class="card-header">{{ blog.title }}</div> -->
          <div class="card-body bg-white">
            <p class="card-text" id="card-text">
              {{ blog.description }}
            </p>
          </div>
          <footer style="font-size:15px;" class="ml-auto mr-4">
            <span style="opacity:30%">posted by </span
            ><span style="color:blue;">{{ blog.user }}</span>
          </footer>
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
import app from "firebase/app";
import "firebase/firestore";

export default {
  name: "allblog",
  data() {
    return {
      blogs: []
    };
  },
  async created() {
    const db = app.firestore();
    try {
      const database = await db
        .collection("blogs_third")
        .orderBy("timestamp", "desc");
      database.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          let blog = doc.data();
          blog.id = doc.id;
          this.blogs.push(blog);
          //   console.log(blog.title + "=>" + blog.description);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
.card-container {
  max-width: 60rem;
  margin-top: 70px;
}
.heading {
  margin-top: 10vh;
  margin-bottom: 90px;
}
#card-text {
  font-size: 17px;
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
.heading_blog {
  background-color: aqua;
}
.fixed-btn:hover {
  opacity: 1;
  color: deepskyblue;
  border-color: deepskyblue;
}
</style>
