<template>
    <div class="column">
        <q-icon name="print" color="teal" size="4.4em" />
        <span>Material Icons works without problem</span>
        <q-separator spaced />
        <q-icon name="dt: message-okay" color="teal" size="4.4em" />
        <span>This should be a check icon</span>
        <q-separator spaced />
        <q-icon name="dt: night-shift" color="teal" size="4.4em" /> 
        <span>Called: q-icon name="dt: night-shift"</span>
        <q-separator spaced />
        <q-icon class="detact-icon-font df-late-shift" color="teal" size="4.4em" />
        <span>Calling in class kinda works, but breaks @ buttons</span>
        <span>q-icon class="detact-icon-font df-late-shift"</span>
    </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'IconComponent',
  props: {},
  setup() {
    return {};
  },
});
</script>
