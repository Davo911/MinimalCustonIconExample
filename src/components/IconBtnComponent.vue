<template>
    <div class="column">
      <q-btn color="primary" icon="android" label="On Left" />
      <q-separator />
      <q-btn color="primary" icon="dt: message-okay" label="On Left" />
      <q-separator />
      <q-btn color="primary" icon="DetactFont df-night-shift" label="On Left" />
      <q-separator />
      <q-btn color="primary" icon="detact-icon-font df-late-shift" label="On Left" />
      <q-separator />
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'IconBtnComponent',
  props: {},
  setup() {
    return {};
  },
});
</script>
