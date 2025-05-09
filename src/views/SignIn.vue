<template>
  <div class="signin-container">
    <h2>تسجيل الدخول</h2>
    <form @submit.prevent="signIn">
      <div class="form-group">
        <label for="username">اسم المستخدم:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">كلمة المرور:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button class="bg-green-700 hover:bg-green-500" type="submit">تسجيل الدخول</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      // Store credentials in session storage
      sessionStorage.setItem('userName', this.username);
      sessionStorage.setItem('password', this.password);

      // Redirect to the Home page
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.signin-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

button {
  width: 100%;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

</style>
