<template>
  <div class="body-of-login">
    <div class="container">
      <div class="card card-container">
        <img
          id="profile-img"
          class="profile-img-card"
          src="@/assets/PIlogodark.png"
        />
        <p id="profile-name" class="profile-name-card"></p>
        <button
          class="btn btn-lg btn-primary btn-block btn-signin" 
          @click.prevent="google_signin"
        >
          <i class="fab fa-google mr-2"></i>Sign in with google
        </button>
        <!-- </form> -->
        <form class="form-signin" @submit.prevent="addmessage">
          <span id="reauth-email" class="reauth-email"></span>
          <input
            type="email"
            name="email"
            v-model="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <p v-if="feedback">{{ feedback }}</p>
          <input
            type="password"
            name="password"
            v-model="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
          />
          <!-- <div id="remember" class="checkbox">
            <label>
              <input type="checkbox" value="remember-me" />
              Remember me
            </label>
          </div> -->
          <button
            class="btn btn-lg btn-primary btn-block btn-signin"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <!-- /form -->
        <p>
          No account? sign up
          <!-- <a to="signup" class="forgot-password"> here </a> -->
          <a href="/signup">here</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "login",
  data() {
    return { email: null, password: null, feedback: "" };
  },
  methods: {
    async google_signin() {
      console.log("Works!");
      var provider = new firebase.auth.GoogleAuthProvider();
      try {
        var user = await firebase
          .auth()
          .signInWithPopup(provider)
          .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token + user);
            console.log("Completed Successfully");
          });
        this.$router.push("/");
        console.log(user);
      } catch (error) {
        // Handle Errors here.
        //   var errorCode = error.code;
        //   var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        var pwd = error.password;
        // The firebase.auth.AuthCredential type that was used.
        //   var credential = error.credential;
        console.log(email + pwd);
        console.log("Error");
        // ...
      }
    },
    async addmessage() {
      if (this.email) {
        try {
          const user = await firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.push("/");
        } catch (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode + " => " + errorMessage);
          if (errorCode == "auth/user-not-found")
            alert("Please signup first or check your email");
          else if (errorCode == "auth/wrong-password") alert("Wrong Password!");
        }
      }
    }
  }
};
</script>

<style scoped>
.body-of-login {
  /* height: 100%; */
  min-height: 100vh;

  padding: 0;
  background-image: url("../../assets/ocean.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
}
.card-container.card {
  max-width: 350px;
  padding: 40px 40px;
}

.btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
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

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
}

.reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signin #inputEmail,
.form-signin #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form-signin input[type="email"],
.form-signin input[type="password"],
.form-signin input[type="text"],
.form-signin button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signin .form-control:focus {
  border-color: rgb(104, 145, 162);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgb(104, 145, 162);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(104, 145, 162);
}

.btn.btn-signin {
  /*background-color: #4d90fe; */
  background-color: rgb(83, 158, 243);
  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/
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

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
  background-color: rgb(12, 97, 33);
}
</style>
