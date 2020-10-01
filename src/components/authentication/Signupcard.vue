<template>
    <body class="body_signup">
        <div>
        <!--Step 1:Adding HTML-->
        <div class="card card-container">
        <form action="/action_page.php" class="signup">
            
                <img
                    class="profile-img-card"
                    src="@/assets/PIlogodark.png"
                />
            <br>
            <div>
                <label class=div><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="name"
                    required
                />

                <label><b>Email</b></label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                />

                <label><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    required
                />

                <label><b>Repeat Password</b></label>
                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="psw-repeat"
                    required
                />
                <input type="checkbox" checked="checked" /> Remember me

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>
        </div>
    </div>
        
    </body>
</template>

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
    height:710px;
    width:450px;
    background-color: #f7f7f7;
    /* just in case there no content */
    padding: 15px 25px 30px;
    margin: 20px auto 25px;
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
    margin-top:0px;
    margin-left:120px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 2px solid #ccc;
    box-sizing: border-box;
}
/* set a style for all buttons*/

button {
    background-color: #563d7c;
    color: white;
    padding: 15px 20px;
    margin: 8px 0;
    cursor: pointer;
    width: 100%;
}
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}
img.avatar {
    width: 40%;
    border-radius: 50%;
}
/*set styles for the cancel button*/

.cancelbtn {
    padding: 15px 20px;
    background-color: #ff2e00;
}
/*float cancel and signup buttons and add an equal width*/

.cancelbtn
 {
    margin-left:40px;
    width: 120px;
    border-radius: 3px;
}
.cancelbtn:hover{
    background-color: black;
}
.signupbtn
 {
    margin-left:40px;
    width: 120px;
    border-radius: 3px;
    background-color:rgb(104, 145, 162);
}
.signupbtn:hover{
    background-color:  rgb(12, 97, 33);

}
/*add padding to container elements*/

.container {
    padding: 16px;
}
/*clear floats*/

.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
/*styles for cancel button and signup button 
	on extra small screens*/

@media screen and (max-width:450px) {
    .cancelbtn,
    .signupbtn,.div {
        width: 100%;
    }
}
</style>
