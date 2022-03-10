<template>
    <div class="column">
      <q-btn color="primary" icon="print" label="Material| print" />
      <q-separator />
      <q-btn color="primary" icon="dt: message-okay" label="MyIcons| dt: message-okay" />
      <q-separator />
      <q-btn color="primary" icon="dt: night-shift" label="MyIcons| dt: night-shift -- Should be a Moon" />
      <q-separator />
      <q-btn color="primary" class="detact-icon-font df-late-shift" label="MyIcons| class=detact-icon-font df-late-shift" push/>
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
