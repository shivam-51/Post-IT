<template>
  <section class="body">
      <div>
      <h1 class=heading>Notice Board</h1>
      <Notice v-on:add-not="addnotice"/>
      <ul v-if="noticearr.length!==0">
          <li v-for="not in noticearr" :key="not.id">{{not.notices}}</li>
      </ul>
     
      <ul v-else>
        <li>There is no notice at present right now</li>
      </ul>
        <!-- <p>Want to Add a notice?<router-link to="/notice"> Click here!</router-link></p> -->
      </div>
       
  </section>
</template>

<script>
import Notice from "./Notice";
export default {
    
  components:{
      Notice,
  },
  name: "AllNotice",
  data(){
      return{
          noticearr:[
            {
                id:1,
                notices:'xyz',
               
            }
          ]
      }

  },
  methods:{
      addnotice(newnotice){
          this.noticearr=[...this.noticearr,newnotice];
      }
  }
};
</script>

<style scoped>
.body{
    background-color:yellowgreen;
    padding: 15px;

}

.heading{
    background-color:teal;
    margin:auto;
    width:90%;
    max-width:30rem;
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
    background-color:thistle;
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
