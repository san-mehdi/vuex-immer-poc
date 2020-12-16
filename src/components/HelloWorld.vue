<template>
  <div class="hello">
    <div>State object :</div>
    <div>{{ state }}</div>
    <div style="height: 50px" />
    <div>Mutations :</div>
    <div><button @click="inc">increment</button></div>
    <div><button @click="setObjBasic">setObjBasic</button></div>
    <div><button @click="setObjImmer">setObjImmer</button></div>
  </div>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(_, context) {
    const store = context.root.$store;
    const state = computed(() => store.state);

    return {
      state,
      inc: () => store.commit("increment"),
      setObjBasic: () =>
        store.commit("setObjBasic", { k: "key", v: "helloObject" }),
      setObjImmer: () =>
        store.commit("setObjImmer", { k: "key", v: "helloImmer" }),
    };
  },
};
</script>

