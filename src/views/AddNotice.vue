<template>
  <div class="addblog">
    <div class="container">
      <div class="card card-container">
        <h1 id="header">Enter a new Notice</h1>
        <br />
        <form action="" class="signup" @submit.prevent="AddNotice">
          <div>
            <input
              class="input"
              type="text"
              id="name"
              v-model="title"
              required
              autofocus
              placeholder="Title of the Notice"
            />
            <br />
            <br />
            <span style="color:blue;padding:5px;">Upload the Notice</span>
            <input type="file" @change="previewImage" accept=".pdf" alt="img" />
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
import "firebase/storage";

export default {
  name: "addpeople",
  data() {
    return {
      id: this.$route.params.id,
      name: null,
      timestamp: null,
      imageData: null,
      picture: null,
      uploadValue: null
    };
  },
  methods: {
    gettime() {
      console.log("Entering");
      var today = new Date();
      var date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      var time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.timestamp = date + " " + time;
    },
    async previewImage(event) {
      this.picture = null;
      this.imageData = null;
      this.imageData = event.target.files[0];
    },
    async AddNotice() {
      this.gettime();
      console.log("Now here");
      const db = app.firestore();
      var snapshot;
      try {
        snapshot = await app
          .storage()
          .ref("notices/" + Date.now())
          .put(this.imageData);
      } catch (error) {
        console.log(error.message);
      }
      this.picture = await snapshot.ref.getDownloadURL();
      //   this.picture = "https://source.unsplash.com/user/erondu/1600x900";

      console.log("Now here again");

      var curusername = app.auth().currentUser.displayName;
      await db
        .collection("noticeboard3")
        .doc()
        .set({
          title: this.title,
          image: this.picture,
          timestamp: this.timestamp,
          user: curusername
        })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
      this.$router.push("/allnotice");
    }
  }
};
</script>

<style scoped>
.input {
  font-size: 16px;
  padding: 5px;
  width: 100%;
}
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
  max-width: 600px;
  width: 400px;
  max-height: 650px;
  padding: 40px 40px;
}
#header {
  text-align: center;
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
