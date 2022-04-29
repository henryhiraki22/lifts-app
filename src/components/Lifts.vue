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
    <div v-if="selected === 'a'">
        Squat: <input value="squat"/>
        <br><br>
        Bench Press: <input value="bench_press"/>
        <br><br>
        Barbel Row: <input value="barbel_row"/>
        <br><br>
        Data de treino: <input value="date"/>
    </div>
    <div v-if="selected === 'b'">
        Squat: <input value="squat"/>
        <br><br>
        OverHead Press: <input value="over_head_press"/>
        <br><br>
        DeadLift: <input value="barbel_row"/>
        <br><br>
        Data de treino: <input value="date"/>
    </div>
    

  </div>


</template>

<script>
export default {
  name: 'Lifts',
  data () {
    return {
      msg: 'Traning stronlifts 5x5',
      selected: '',
    }
  },

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
  color: #42b983;
}
</style>
