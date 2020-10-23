<template>
    <section class='body'>
        
    <div class='formbody'>
        <h1 style="font-family:san-serif">Add a Notice</h1>
      <form @submit="addnot" class="form">
      <input class="inp" type="text" placeholder="Add a Notice..." v-model="notices">
      <input type="submit" value="Submit" class="btn">
      </form>
          
  </div>
    </section>
</template>

<script>
// import uuid from 'uuid';
import firebase from 'firebase';
export default {
    name:"Notice",
    data(){
        return{
            notices:'',
            createdtime:null,
            user:''
        }
    },
    methods:
    {
        addnot()
        {
          var db=firebase.firestore();
          db.collection('noticeboard').add(
              {
                  notices:this.notices,
                  createdtime:new Date(),
                  user:this.user.displayName,
              }
          )
          this.$router.push("/allnotice");
          this.notices='';
        }
      },
      created(){
      firebase.auth().onAuthStateChanged(user=>{
          if(user){
              this.user=user;    

          }
      })
      this.fetchnotice();
  },

   
  
}

</script>

<style scoped>
.body{
        background-image: url('../assets/down.jpg');
        

}
.formbody{
    
    max-width: 60%;
    margin:auto;
    padding:100px;
}
.form{
    flex:auto;
    padding:15px;
    

}
.heading{
    background-color:teal;
   
    margin:5rem auto;
    margin-bottom:2rem;
    width:90%;
    max-width:50rem;
    padding:15px;
    border-radius:10px;
    color:whitesmoke;
    text-align: center;
    box-shadow:gray 3px 3px 3px;


}
.btn{
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    margin:5px 5px;
    color: white;
    padding:15px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  
    width:80px;
    /* height:60px; */
    display: inline-block;
}
.btn:hover{
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
.inp{
    margin-top:10px;
    margin-bottom:10px;
    width:100%;
    max-width:70rem;
    padding:15px;
    color:black;
    border:2px solid darkblue;
    box-shadow:gray 3px 3px 3px;
    /* text-align: center; */
}
</style>