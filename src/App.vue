<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'App',
  setup() {
    
    const $q = useQuasar();
    // icon-mapper
    $q.iconMapFn = iconName => {
      if (iconName.startsWith('dt:')) {
        const name = iconName.substring(4);
        return {
          cls: 'detact-icon-font df-' + name
        };
      }else{
        return {
          cls: iconName
        };
      }
    };
    
    return {};
  }
})
</script>
