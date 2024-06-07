import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"

import { useUsersStore } from "../store/user"
import { storeToRefs } from "pinia"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    redirect: { name: "PageOne" },
  },
  {
    path: "/page-one",
    name: "PageOne",
    component: () => import("../pages/PageOne.vue"),
  },
  {
    path: "/page-two",
    name: "PageTwo",
    meta: { isPageTwoRight: true },
    component: () => import("../pages/PageTwo.vue"),
  },
  {
    path: "/page-three",
    name: "PageThree",
    meta: { isPageThreeRight: true },
    component: () => import("../pages/PageThree.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "main" },
  },
]

const router = createRouter({
  history: createWebHistory("/jwt-test/"),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
})

router.beforeEach(async (to, _from, next) => {
  const { permissions } = storeToRefs(useUsersStore())
  if (JSON.stringify(permissions.value) === "{}") await initialize()

  to.meta.isPageTwoRight && !permissions.value.pageTwo
    ? next({ name: "main" })
    : to.meta.isPageThreeRight && !permissions.value.pageThree
    ? next({ name: "main" })
    : next()
})

async function initialize() {
  const { getJwtToken } = useUsersStore()
  await getJwtToken()
}

export default router
