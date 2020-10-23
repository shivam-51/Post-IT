<template>
  <section class="body">
      <div>
      <h1 class=heading>Notice Board</h1>
      <!-- <Notice/> -->
      <p style="padding:10px;">Want to Add a notice?<router-link to="/notice"> Click here!</router-link></p>
      <ul v-if="noticearr.length!==0">
          <li v-for="not in noticearr" :key="not.id"><small>Published by: {{not.user}}</small><br>{{not.notices }}</li>
      </ul>
     
      <ul v-else>
        <li>There is no notice at present right now</li>
      </ul>
        
      </div>
       
  </section>
</template>

<script>
// import Notice from "./Notice";
import firebase from 'firebase';
export default {
    
  components:{
    //   Notice,
  },
  name: "AllNotice",
  data(){
      return{
          noticearr:[],
      }

  },
  methods:{
      fetchnotice(){
          var db=firebase.firestore();
          db.collection('noticeboard').orderBy('createdtime','desc').onSnapshot((querySnapshot)=>{
              let allnotice=[];
              querySnapshot.forEach(doc=>{
                  allnotice.push(doc.data())
              })
            
              this.noticearr=allnotice;
          })
      }
  },
  created(){
      this.fetchnotice();
  },
  beforeRouteEnter(to,from,next){
      next(vm=>{
          firebase.auth().onAuthStateChanged(user=>{
              if(user){
                  vm.$router.push('/allnotice')

              }
              else{
                  alert('You need to Sign-in to see the Noticeboard');
                  vm.$router.push('/login')
              }
          })
      })
  }
};
</script>

<style scoped>
.body{
    background-image: url('../assets/down.jpg');
    padding: 15px;
    min-height:400px;

}

.heading{
    background-color:darkblue;
    margin:auto;
    width:90%;
    max-width:40rem;
    padding:15px;
    border-radius:10px;
    color:whitesmoke;
    text-align: center;


}
p{
  font-size: large;  
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
li{
    box-shadow: 0 2px 8px blue;
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    background-color:whitesmoke;
    font-family: 'Times New Roman', Times, serif;
    font-size: larger;
    
    
}
button{
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
button:hover{
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
.inp{
    margin:1rem auto;
    width:90%;
    max-width:50rem;
    padding:15px;
    border-radius:10px;
    color:black;
    /* text-align: center; */
}
</style>
