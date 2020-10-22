<template>
  <div class="component">
    <div class="row">
      <div class="card column" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">asjk</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card column" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card column" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      <div class="card column" style="width: 18rem;">
        <img
          class="card-img-top"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
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
  data() {
    return {
      users: []
    };
  },
  async created() {
    const db = app.firestore();
    try {
      const database = await db
        .collection("users_first")
        .orderBy("timestamp", "desc");
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
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}
.card {
  margin: 25px;
  padding: 5px;
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
