<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <label class="flex justify-end mb-2  font-bold text-gray-600 dark:text-gray-200"
                >
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
