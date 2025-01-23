<script setup>
import { onMounted, ref } from 'vue';

// const model = defineModel({
//     type: String,
//     required: true,
// });

// Define props for the input component
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off', // Default to "off" unless specified
  },
  required: {
    type: Boolean,
    default: false, // Default to false
  },
});
const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input ref="input" :type="props.type" :value="props.modelValue" :placeholder="props.placeholder" :autocomplete="props.autocomplete" :required="props.required"   @input="$emit('update:modelValue', $event.target.value)"   
    class="block w-full  py-2 px-12   text-center text-gray-700 bg-white  border-[0.2px] rounded-lg  dark:bg-gray-900 dark:text-gray-300 dark:border-pink-600 focus:border-pink-400 dark:focus:border-pink-300 focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40"
    >
</template>
