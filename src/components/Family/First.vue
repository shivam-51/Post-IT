<template>
  <div class="component">
    <div class="row">
      <!-- <div > -->
      <div
        class="card column"
        v-for="user in users"
        :key="user.id"
        style="width: 24rem;"
      >
        <img
          class="card-img-top"
          v-bind:src="user.image"
          alt="Card image cap" style="height:230px;"
        />
        <div class="card-body">
          <!-- <span >{{ user.image }}</span> -->
          <span class="name mb-5">{{ user.name }}</span>
          <br />
          <i class="fas fa-phone-square-alt"></i>
          <span class="p-1 mb-5">+{{ user.phone }}</span>
          <br />
          <i class="far fa-envelope"></i>
          <span class="p-1">{{ user.email }}</span>
          <br />
          <br />

          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "firebase/app";
import "firebase/firestore";

export default {
  name: "first",
  props: {
    username: String
  },
  data() {
    return {
      users: []
    };
  },
  async created() {
    const db = app.firestore();
    // console.log(this.username);
    try {
      const database = await db
        .collection(this.username)
        .orderBy("timestamp", "asc");
      database.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          let user = doc.data();
          user.id = doc.id;
          this.users.push(user);
          //   console.log(blog.title + "=>" + blog.description);
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.name {
  font-size: 20px;
  margin-bottom: 2px;
  font-weight: 600;
  /* font-family: "Courier New", Courier, monospace; */
}

.card-body {
  font-size: 110%;
}
.column {
  flex: 25%;
  max-width: 30%;
  padding: 0 4px;
}
.card {
  width: 50px;
  margin: 25px;
  padding: 5px;
  border-style: outset;
  border-radius: 10px;
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.center {
  /* height: 500px; */
  /* display: flex;
  align-items: center; */
  justify-content: center;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
