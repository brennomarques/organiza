<template>
  <div>
    <button type="button" @click="add">Adicionar outro</button>

    <div v-for="(user, idx) in users" :key="idx">

      <input type="text" v-model="user.name"/>
      <input type="number" v-model="user.sobre"/>

      <button type="button" @click="remove(user)">Remover</button>

    </div>
    
  </div>
</template>

<script>

export default {
  data(){
    return {
      users: [{
          name: '',
          sobre:''
        }
      ]
    }
  },
  methods: {
    add() {
      this.users.push({ name: '', sobre:'' });
    },
    remove(user) {
      this.users = this.users.filter(u => u !== user);
    }
  }
}
</script>