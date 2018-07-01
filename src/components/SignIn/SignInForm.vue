<template>
  <div>
    <div>
      <p>
      <input type="text" placeholder="Username or Email">
      </p>
      <p>
        <input type="password" placeholder="Password">
      </p>

      <button @click="clickLogin">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignInForm',
  methods: {
    clickLogin () {
      alert('click Login Btn')
    }
  }
}
</script>
