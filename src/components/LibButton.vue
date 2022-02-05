<script setup lang="ts">
import { reactive } from 'vue';

interface Props {
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: false,
});

const { primary } = reactive(props);
</script>

<template>
  <table>
    <tr>
      <th>BB</th>
      <th>BB</th>
      <th>BB</th>
    </tr>
    <tr>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
    </tr>
    <tr>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
    </tr>
    <tr>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
    </tr>
    <tr>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
      <td>asd</td>
    </tr>
  </table>
</template>
 