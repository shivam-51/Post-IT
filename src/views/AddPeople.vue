<template>
  <div class="addblog">
    <div class="container">
      <div class="card card-container">
        <h1>Enter a new Entry</h1>
        <br />
        <form action="" class="signup" @submit.prevent="AddBlog">
          <div>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              autofocus
              placeholder="name"
            />
            <br />
            <br />
            <input
              type="text"
              id="name"
              v-model="phone"
              required
              autofocus
              placeholder="Number"
            />
            <br />
            <br />
            <input
              type="text"
              id="name"
              v-model="email"
              required
              autofocus
              placeholder="Email"
            />
            <br />
            <br />
            <input
              type="text"
              id="name"
              v-model="description"
              required
              autofocus
              placeholder="Description about you"
            />
            <br />
            <br />
            <button
              class="btn btn-lg btn-primary btn-block btn-postit"
              type="submit"
            >
              Post IT
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export default {
  name: "login",
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      description: null,
      timestamp: null
    };
  },
  methods: {
    AddBlog() {
      // Add a new document in collection "blogs"
      const db = app.firestore();
      //   var curuser = firebase.auth().currentUser;
      //   console.log(curuser);
      var curusername = app.auth().currentUser.displayName;

      //   if (curuser) {
      //     console.log("User" + "=>" + firebase.auth().currentUser.email);
      //     // User is signed in.
      //   } else {
      //     console.log("No User");
      //     // No user is signed in.
      //   }
      db.collection("users_firstf")
        .doc()
        .set({
          name: this.name,
          phone: this.phone,
          email: this.email,
          description: this.description,
          timestamp: Date.now(),
          user: curusername
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.$router.push("/people");
      this.title = null;
      this.description = null;
    }
  }
};
</script>

<style scoped>
.addblog {
  min-height: 100vh;
  padding: 0;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 51%,
    rgba(148, 187, 233, 1) 100%
  );
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
}
.card-container.card {
  max-width: 500px;
  width: 400px;
  max-height: 650px;
  height: 420px;
  padding: 40px 40px;
}
/*
 * Card component
 */
.card {
  background-color: #f7f7f7;
  /* just in case there no content*/
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
/*
 * Form styles
 */
</style>
