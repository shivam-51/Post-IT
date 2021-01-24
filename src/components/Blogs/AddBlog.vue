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
              id="title"
              v-model="title"
              required
              autofocus
              placeholder="Title"
            />
            <textarea
              type="text"
              id="description"
              v-model="description"
              placeholder="Description"
              required
            />
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
      title: null,
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
      var str = this.description;
      if (!str || !str.trim()) {
        alert("Empty description");
        return;
        //str is null, undefined, or contains only spaces
      }
      db.collection("blogs_third")
        .doc()
        .set({
          title: this.title,
          description: this.description,
          timestamp: Date.now(),
          user: curusername,
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.$router.push("/allblog");
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
  margin-top:20px;
  max-width: 750px;
  max-height: 720px;
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
#title,
#description {
  padding: 10px;
  width: 100%;
  /* display: block; */
  margin-bottom: 20px;
  font-size: 20px;
  /* height: 50px;
  max-height: 50px; */
  z-index: 1;
  /* position: relative; */
  /* -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box; */
}

#description {
  max-height: 320px;
  min-height: 320px;
}
</style>
