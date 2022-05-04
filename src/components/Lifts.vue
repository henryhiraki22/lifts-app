<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
        <select v-model="selected">
            <option disabled value="">Escolha um treino</option>
            <option value="a">Treino A</option>
            <option value="b">Treino B</option>
        </select>
    </div>
    <br>
    <form @submit.prevent="createPost">
    <div v-if="selected === 'a'">
        Squat: <input value="squat"/>
        <br><br>
        Bench Press: <input value="bench_press"/>
        <br><br>
        Barbel Row: <input value="barbel_row"/>
        <br><br>
        Data de treino: <input value="date"/>
        <br><br>
        <button>Salvar</button>
    </div>
    <div v-if="selected === 'b'">
        Squat: <input value="squat"/>
        <br><br>
        OverHead Press: <input value="over_head_press"/>
        <br><br>
        DeadLift: <input value="barbel_row"/>
        <br><br>
        Data de treino: <input value="date"/>
        <br><br>
        <button>Salvar</button>
    </div>
   </form>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Lifts',
  data () {
    return {
      msg: 'Traning stronlifts 5x5',
      selected: '',
    }
  },
    methods:{
        createPost(){
         if (this.selected === 'a'){
            axios.post('http://localhost:8090/api/createlifta', {
                squat: this.squat,
                bench_press: this.bench_press,
                barbel_row: this.barbel_row,
                date: this.date
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
            return
    }
    if (this.selected === 'b'){
        axios.post('http://localhost:8090/api/createliftb', {
            squat: this.squat,
            over_head_press: this.over_head_press,
            dead_lift: this.dead_lift,
            date: this.date
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
        return
        }
     }
   }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b981;
}
</style>
