<template>
  <body class="body_signup">
    <div>
      <!--Step 1:Adding HTML-->
      <div class="card card-container">
        <form @submit.prevent="Signup" class="signup">
          <img class="profile-img-card" src="@/assets/PIlogodark.png" />
          <br />
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              v-model="username"
              name="name"
              autofocus
              required
            />
            <br />

            <input
              type="email"
              name="email"
              placeholder="Email"
              v-model="email"
              required
            />

            <input
              type="password"
              placeholder="Password"
              v-model="password"
              name="psw"
              required
            />

            <input
              type="password"
              placeholder="Repeat Password"
              v-model="repeatpassword"
              name="psw-repeat"
              required
            /><button
              class="btn btn-lg btn-primary btn-block btn-signup"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<script>
// import firebase from "firebase";

export default {
  name: "signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatpassword: ""
    };
  },
  methods: {
    async Signup() {
      if (this.password != this.repeatpassword) {
        alert("Passwords do not match");
        return;
      }
      const firebase = require("firebase/app");
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        var curuser = firebase.auth().currentUser;

        curuser.updateProfile({
          displayName: this.username
        });
        console.log(this.username);
        console.log(user);
        this.$router.push("/");
      } catch (error) {
        // Handle Errors here.
        var errorCode, errorMessage;
        errorCode = error.code;
        errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use") {
          alert("Email already in use.");
        } else if (errorCode == "auth/weak-password") {
          alert("The password is too weak. Should be of length atleast 6");
        }
        console.log(errorCode + " => " + errorMessage);
      }
    }
  }
};
</script>
>

<style scoped>
/*add full-width input fields*/
.body_signup {
  /* height: 100%; */
  min-height: 100vh;
  max-width: 2006px;
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
  max-width: 450px;
  padding: 30px 40px;
}
.card {
  height: 550px;
  width: 450px;
  background-color: #f7f7f7;
  /* just in case there no content */
  padding: 15px 25px 30px;
  /* margin: 20px auto 25px; */
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}
.profile-img-card {
  width: 120px;
  height: 120px;
  margin-top: 0px;
  margin-left: 120px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid #ccc;
  box-sizing: border-box;
}
/* set a style for all buttons*/

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}
img.avatar {
  width: 40%;
  border-radius: 50%;
}

.btn.btn-signup {
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

.btn.btn-signup:hover,
.btn.btn-signup:active,
.btn.btn-signup:focus {
  background-color: rgb(12, 97, 33);
}
.container {
  padding: 16px;
}

/*styles for cancel button and signup button 
	on extra small screens*/

@media screen and (max-width: 450px) {
  .cancelbtn,
  .signupbtn {
    width: 50%;
  }
}
</style>
