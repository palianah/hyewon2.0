<template>
  <div>
    <form action="" @submit="submit">
      <input type="text" name="email" v-model="form.email" />
      <input type="password" name="password" v-model="form.password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit(e) {
      e.preventDefault()

      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "admin" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>

<style lang="less" scoped>

</style>