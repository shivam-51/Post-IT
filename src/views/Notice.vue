<template>
   <section>
      <form @submit="addnot" class="form">
      <input class="inp" type="text" placeholder="Add a Notice..." v-model="notices">
      <input type="submit" value="Submit" class="btn">
      </form>
          
  </section>
</template>

<script>
import uuid from 'uuid';
import firebase from 'firebase';
export default {
    name:"Notice",
    data(){
        return{
            notices:'',
            // info:'',
        }
    },
    methods:
    {
        addnot(e)
        {
          e.preventDefault();
          const newnotice={
          id:uuid.v4(),
          notices:this.notices,
          }
          this.$emit('add-not',newnotice);
          this.notices='';
        }
      }

   
  
}

</script>

<style scoped>
.form{
    flex:auto;
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
    width:90%;
    max-width:50rem;
    padding:15px;
    color:black;
    border:2px solid black;
    box-shadow:gray 3px 3px 3px;
    /* text-align: center; */
}
</style>