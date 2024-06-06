// @ts-ignore
import VueJwtDecode from "vue-jwt-decode"
import { defineStore } from "pinia"
import { ref } from "vue"

import { UserPermissions } from "../model/permissions"
import { jwts } from "../mock"

export const useUsersStore = defineStore("users", () => {
  const permissions = ref<UserPermissions>({})
  const isLoading = ref(false)
  const selectedJwt = ref(0)

  async function getJwtToken() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(jwts[selectedJwt.value])
      }, 2000)
    })

    isLoading.value = true
    const baseJwt = await promise

    const jwtData = VueJwtDecode.decode(baseJwt)
    permissions.value = jwtData.permissions
    isLoading.value = false
    console.log(permissions.value)
  }

  return {
    permissions,
    getJwtToken,
    isLoading,
    selectedJwt,
  }
})
