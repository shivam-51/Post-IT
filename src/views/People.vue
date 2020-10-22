<template>
  <div class="component row" style="overflow: hidden">
    <div class="sidebar-container">
      <ul class="sidebar-navigation">
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-home" aria-hidden="true"></i> Homepage
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  height: 700px;
}
.col-1-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: center; */
  /* padding: 20px; */
  float: left;
  width: 33%;
}
.col-2-3 {
  float: right;
  width: 66%;
}
.sidebar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: fixed; */
  width: 320px;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background: #1a1a1a;
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
</style>
