<template>
  <div>
    <p>
      <input type="text" placeholder="Email">
    </p>
    <p>
      <input type="text" placeholder="Username">
    </p>
    <p>
      <input type="password" placeholder="password">
    </p>
    <p>
      <input type="password" placeholder="password again">
    </p>
    <button>Cancel</button>
    <button @click="clickSignUp">SignUp</button>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  methods: {
    clickSignUp () {
      alert('click SignUp')
    }
  }
}
</script>
