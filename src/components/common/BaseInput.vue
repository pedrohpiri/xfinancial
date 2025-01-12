<template>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full px-4 py-2 bg-secondary/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none"
      v-bind="$attrs"
    />
  </template>
  
  <script setup lang="ts">
  defineProps<{
    modelValue: string
  }>()
  
  defineEmits<{
    'update:modelValue': [value: string]
  }>()
  </script>