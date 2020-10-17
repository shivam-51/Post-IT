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
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      title: null,
      description: null
    };
  },
  methods: {
    AddBlog() {
      // Add a new document in collection "blogs"
      var db = firebase.firestore();
      db.collection("blogs")
        .doc("October")
        .set({
          title: this.title,
          description: this.description
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
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
  max-width: 550px;
  max-height: 550px;
  height: 520px;
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
  height: 150px;
}

.btn.btn-addblog {
  width: 50vh;
  margin-top: 30px;
  background-color: rgb(104, 145, 162);
  padding: 0px;
  font-weight: 700;
  font-size: 14px;
  height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: none;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
}
</style>
