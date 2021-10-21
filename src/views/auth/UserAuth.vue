<template>
  <div class="signup-container">
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <p v-if="!formIsValid">
        Please enter a valid e-mail address and password (must be at least 6
        characters long)
      </p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button
        class="nom"
        type="button"
        mode="flat"
        @click="switchAuthMode"
      >
        {{ switchModeButtonCaption }}
      </base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode == 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.mode == 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.nom {
  margin-right: 0;
  margin-left: 1rem;
}

.signup-container {
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 400px;
  border-radius: 4px;
  box-shadow: 0 1px 8px #2323232d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}

h3 {
  margin-bottom: 1rem;
  margin-top: 0;
}

form {
  margin: 0;
  padding: 0;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 97%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  &:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }
}
</style>
