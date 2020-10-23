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
            <span style="color:blue">Choose your profile picture</span>
            <input
              type="file"
              @change="previewImage"
              required
              accept="image/*"
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
import "firebase/storage";

export default {
  name: "login",
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      description: null,
      timestamp: null,
      imageData: null,
      picture: null,
      uploadValue: null
    };
  },
  methods: {
    previewImage(event) {
      this.picture = null;
      this.imageData = null;
      this.imageData = event.target.files[0];
      //   if (this.imageData == null)
      //     this.imageData = "https://source.unsplash.com/user/erondu/1600x900";
      const storageRef = app
        .storage()
        .ref("peoples/" + Date.now())
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    },
    async AddBlog() {
      const db = app.firestore();
      var curusername = app.auth().currentUser.displayName;
      db.collection("users_firstf_ff")
        .doc()
        .set({
          name: this.name,
          phone: this.phone,
          email: this.email,
          image: this.picture,
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

      //   await setTimeout(() => {
      //     console.log("World!");
      //   }, 7000);
      const delay = ms => new Promise(res => setTimeout(res, ms));

      await delay(1500);

      this.$router.push("/people");
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
  max-width: 600px;
  width: 400px;
  max-height: 650px;
  height: 470px;
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
