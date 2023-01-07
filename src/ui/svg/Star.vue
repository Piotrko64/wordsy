<script setup lang="ts">
const { isActive, callback } = defineProps<{
    isActive?: boolean;
    callback?: (a?: any, b?: any) => void;
}>();

const emits = defineEmits(["click-star"]);
</script>

<template>
    <svg
        @click="emits('click-star', $event)"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path
            :class="{ activePath: isActive }"
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />
    </svg>
</template>
<style>
svg {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
path {
    stroke: var(--green);
    fill: white;
}
.activePath {
    fill: var(--green);
}
</style>
