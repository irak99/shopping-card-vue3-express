<template>
  <div>
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition name="router" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.router-enter-active,
.router-leave-active {
  transition: all 0.3s ease;
}
.router-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
