<template>
  <div class="blogs">
    <div class="card">
      <h1
        style="
                    margin-left: 20px;
                    padding:10px;
                    font-family: san-serif;
                    color: black;
                "
      >
        ADD A BLOG
      </h1>

      <form method="POST">
        <input
          id="div"
          type="text"
          placeholder="ENTER THE TITLE OF BLOG"
          required
        />
        <br /><br />

        <input id="div" type="text" placeholder="ADD HASHTAGS IF NECESSARY" />
        <br /><br />

        <form>
          <p style="font: medium; margin-left: -355px;color:black;">
            Choose an image
          </p>
          <input id="div" type="file" />
        </form>
        <br />
        <textarea
          id="div1"
          placeholder="ADD A DESCRIPTION OF THE BLOG"
          required
        ></textarea>
        <br /><br />

        <input
          id="sub"
          type="submit"
          value="POST!"
          style="
                        width: 150px;
                        border-radius: 5px;
                        align-content: center;
                        margin-left:375px;
                    "
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "blog"
};
</script>

<style scoped>
.blogs {
  background: linear-gradient(to bottom right, white, #bcbdc4);
  height: 630px;
  padding: 0px;
  margin: 0px;
  margin-top: 0;
  /* float: left;; */
}
.card {
  width: 600px;
  margin: auto;
  /* padding:15px; */
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: 10px 16px 16px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 10px 16px 16px rgba(0, 0, 0, 0.3);
  box-shadow: 10px 16px 16px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  margin-bottom: 20px;
}
#div {
  width: 500px;
  height: 70px;
  padding: 15px;
  color: black;
  background-color: white;
  border-radius: 9px;
  font-size: medium;
  /* box-sizing: border-box; */
  float: none;
  align-content: flex-start;
  margin-left: 20px;
  border: 3px solid black;
}
#div:hover {
  background-color: black;
  color: white;
}
#div1 {
  width: 500px;
  height: 117px;
  max-height: 117px;
  min-height: 117px;
  padding: 15px;
  color: black;
  background-color: white;
  border-radius: 9px;
  font-size: medium;
  /* box-sizing: border-box; */
  float: none;
  align-content: center;
  margin-left: 20px;
  border: 3px solid black;
}
#div1:hover {
  background-color: black;
  color: white;
}
#sub {
  margin-left: 45px;
  /* background-color: plum; */
  margin-bottom: 10px;
  font-weight: bold;
  border: 3px solid black;
  background-color: white;
  color: black;
}
#sub:hover {
  background-color: black;
  color: white;
}
.main_nav {
  background-color: #563d7c;
  margin-left: 0px;
  margin-top: 0px;
  box-shadow: 5px 5px 5px black;
}
.main_nav > ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.main_nav > ul > li {
  display: inline-block;
}
.main_nav > ul > li > a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 15px;
  font-family: san-serif;
  font-size: 18px;
}
.main_nav > ul > li > a:hover {
  color: tomato;
}
.icon {
  display: inline-block;
  margin-right: 3px;
  margin-top: 7px;
}
</style>
