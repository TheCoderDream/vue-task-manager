<template>
  <Loading v-if="loading"></Loading>
  <div class="login-container">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <h1>Sign in to task Manager</h1>
    <Card class="sign-in-card">
      <div v-if="err" class="err">
        {{err}}
      </div>
      <Input v-model="username" placeholder="you@example.com" label="Email" />
      <Input v-model="password" placeholder="Password" label="Password" type="password" />
      <div class="confirmation">
        <Checkbox v-model="confirmed" label="Keep me logged in"></Checkbox>
        <a href="#">Forgot password?</a>
      </div>
      <button class="btn btn--primary btn--full" @click="signIn" >Sign in</button>
    </Card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import Card from '@/libs/ui/common/Card'
import Loading from '@/libs/ui/common/Loading'

import Input from '@/libs/ui/form/Input'
import Checkbox from '@/libs/ui/form/Checkbox'
import { AuthServiceToken } from '@/libs/api/auth'

export default defineComponent({
  name: 'Login',
  inject: {
    authService: {
      from: AuthServiceToken
    }
  },
  components: {
    Loading,
    Checkbox,
    Input,
    Card
  },
  data: function () {
    return {
      username: '',
      password: '',
      confirmed: false,
      err: '',
      loading: false
    }
  },
  methods: {
    signIn () {
      this.loading = true
      this.authService.login(
        this.username,
        this.password
      ).subscribe(
        () => {
          this.$router.push('/')
        },
        (err) => {
          this.err = err
          this.loading = false
        },
        () => {
          this.loading = false
        }
      )
    }
  }
})
</script>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 33px;
    text-align: center;
    text-transform: capitalize;
    color: #212121;
    margin-bottom: 40px;
  }

  & .btn {
    margin-top: 40px;
  }
}

.sign-in-card {
  padding: 27px 35px 40px 35px;
  min-width: 420px;
}

.confirmation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  & > a {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #24599C;
    text-decoration: none;
  }
}
.err {
  padding: 15px;
  background-color: #ad3030;
  text-align: center;
  width: 100%;
  font-size: 12px;
  margin-bottom: 10px;
  color: #fff;
}
</style>
