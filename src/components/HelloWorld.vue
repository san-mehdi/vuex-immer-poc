<template>
  <div class="hello">
    <div>{{ state }}</div>
    <button @click="inc">+</button>
    <button @click="setObjBasic">setObjBasic</button>
    <button @click="setObjImmer">setObjImmer</button>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(_, context) {
    const store = context.root.$store;
    const state = computed(() => store.state);

    return {
      state,
      inc: () => store.commit('increment'),
      setObjBasic: () => store.commit(
        'setObjBasic',
        { k: 'o', v: 'helloObject' },
      ),
      setObjImmer: () => store.commit(
        'setObjImmer',
        { k: 'o', v: 'helloImmer' },
      ),
    };
  }
}
</script>

