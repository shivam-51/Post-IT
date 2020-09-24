<template>
    <body  style="background-color:lavenderblush;">
	
	<!--Step 1:Adding HTML-->
	<form action="/action_page.php" style="border:1px solid #ccc">
		<div class="imgcontainer">
		<img src= "./pilogo.png" alt="Avatar" style="width: 10%; height: 10%" class="avatar">
	</div>
		<div class="container">
			<label><b>Username</b></label>
			<input type="text" placeholder="Enter Username" name="name" required>

			<label><b>Email</b></label>
			<input type="text" placeholder="Enter Email" name="email" required>

			<label><b>Password</b></label>
			<input type="password" placeholder="Enter Password" name="psw" required>

			<label><b>Repeat Password</b></label>
			<input type="password" placeholder="Repeat Password" name="psw-repeat" required>
			<input type="checkbox" checked="checked"> Remember me
			<p>To create an account you have to agree our <a href="#">Terms & Privacy</a>.</p>

			<div class="clearfix">
				<button type="button" class="cancelbtn">Cancel</button>
				<button type="submit" class="signupbtn">Sign Up</button>
			</div>
		</div>
	</form>

</body>

</template>


<style scoped>

	/*add full-width input fields*/
	
	input[type=text],
	input[type=password] {
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
		background-color: #FF2E00;
	}
	/*float cancel and signup buttons and add an equal width*/
	
	.cancelbtn,
	.signupbtn {
		float: left;
		width: 50%;
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
	
	@media screen and (max-width: 300px) {
		.cancelbtn,
		.signupbtn {
			width: 100%;
		}
	}

</style>
