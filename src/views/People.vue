<template>
  <div style="overflow: hidden">
    <div class="center mt-4 mb-4 heading1" style="text-align: center">
      <h1 v-if="kind != 'alumni' && kind != 'faculty'">
        Meet the {{ kind }} year students of IT department
      </h1>
      <h1 v-else>Meet the {{ kind }} of IT department</h1>
    </div>
    <div class="twitter-wrap">
      <div class="sidebar-container">
        <ul class="sidebar-navigation">
          <li>
            <b-button @click.prevent="first">First Year</b-button>
          </li>
          <li>
            <b-button @click.prevent="second">Second Year</b-button>
          </li>
          <li>
            <b-button @click.prevent="third">Third Year</b-button>
          </li>
          <li>
            <b-button @click.prevent="fourth">Fourth Year</b-button>
          </li>
          <li>
            <b-button @click.prevent="alumni">Alumni</b-button>
          </li>
          <li>
            <b-button @click.prevent="faculty">Faculty</b-button>
          </li>
        </ul>
        <!-- <v-select options="['first', 'second', 'third','fourth','alumni','faculty']"></v-select> -->
        <select v-model="kind" class="content">
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
            <option value="fourth">Fourth Year</option>
            <option value="alumni">Alumni</option>
            <option value="faculty">Faculty</option>
            
        </select>
      </div>
      <div class="side-main">
        <span v-show="kind == 'first'"> <First username="first_year" /> </span>
        <span v-show="kind == 'second'">
          <First username="second_year" />
        </span>
        <span v-show="kind == 'third'"> <First username="third_year" /> </span>
        <span v-show="kind == 'fourth'">
          <First username="fourth_year" />
        </span>
        <span v-show="kind == 'alumni'"> <First username="alumni" /> </span>
        <span v-show="kind == 'faculty'"> <First username="faculty" /> </span>
      </div>
      <div class="side-main center">
        <div class="fixed-btn ml-auto">
          <router-link v-show="kind == 'first'" to="/addpeople/first_year"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
          <router-link v-show="kind == 'second'" to="/addpeople/second_year"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
          <router-link v-show="kind == 'third'" to="/addpeople/third_year"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
          <router-link v-show="kind == 'fourth'" to="/addpeople/fourth_year"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
          <router-link v-show="kind == 'alumni'" to="/addpeople/alumni"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
          <router-link v-show="kind == 'faculty'" to="/addpeople/faculty"
            ><i class="fas fa-plus fa-sm"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import First from "../components/Family/First";

export default {
  name: "People",
  data() {
    return {
      kind: "first",
    };
  },
  components: {
    First
  },
  methods: {
    first() {
      this.kind = "first";
    },
    second() {
      this.kind = "second";
    },
    third() {
      this.kind = "third";
    },
    fourth() {
      this.kind = "fourth";
    },
    alumni() {
      this.kind = "alumni";
    },
    faculty() {
      this.kind = "faculty";
    },
  },
};
</script>
>

<style scoped>
.twitter-wrap {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  /* position: relative; */
}

.heading1 {
  text-shadow: 0px 1px 2px;
}
.center {
  /* height: 500px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-secondary {
  width: 150px;
  margin-bottom: 20px;
}

.fixed-btn {
  position: fixed;
  height: 80px;
  text-shadow: 1px 1px 1px #ccc;
  text-shadow: 0 0 9px #000;
  right: 3%;
  top: 12%;
  cursor: pointer;
  display: flex;
  width: 5vw;
  height: 5vw;
  font-size: 4rem;
  border-radius: 25vw;
  overflow: hidden;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #ffe14d;
  /* box-shadow: 0 1px 10px rgba(0, 0, 0, 0.46); */
  opacity: 0.8;
  transition: background 0.5s, color 1s, opacity 0.5s, border 0.5s;
}
.sidebar-container {
  /* display: flex; */
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  max-width: 320px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  color: #fff;
}

.content-container {
  padding-top: 20px;
}

.sidebar-logo {
  padding: 10px 15px 10px 30px;
  font-size: 20px;
  background-color: #2574a9;
}

.sidebar-navigation {
  padding: 50px;
  margin-top: 150px;
  margin-bottom: 150px;
  list-style-type: none;
  position: relative;
}

.sidebar-navigation li {
  background-color: transparent;
  position: relative;
  display: inline-block;
  line-height: 20px;
}

.sidebar-navigation li a {
  padding: 10px 15px 10px 30px;
  display: block;
  color: #fff;
}

.sidebar-navigation li .fa {
  margin-right: 10px;
}

.sidebar-navigation li a:active,
.sidebar-navigation li a:hover,
.sidebar-navigation li a:focus {
  text-decoration: none;
  outline: none;
}

.sidebar-navigation li::before {
  background-color: #2574a9;
  position: absolute;
  content: "";
  height: 100%;
  left: 0;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}
.sidebar-container select {
  display: none;
}
.content{
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  overflow:none;
  z-index: 1;
}
.sidebar-navigation .header {
  font-size: 12px;
  text-transform: uppercase;
  background-color: #151515;
  padding: 10px 15px 10px 30px;
}

.sidebar-navigation .header::before {
  background-color: transparent;
}

.content-container {
  padding-left: 220px;
}
@media (max-width: 1024px) {
  .sidebar-container ul {
    display: none;
  }
  .sidebar-container select {
    display: inline-block;
    margin: 1rem;
  }
}
@media (max-width: 640px) {
  .sidebar-container ul {
    display: none;
  }
  .sidebar-container select {
    display: inline-block;
    margin: 0.5rem;

  }
  .side-main{
    margin-top:3rem;
  }
}
</style>
