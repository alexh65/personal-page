<template>
  <div>
    <button class="next" @click="$refs.fullpage.api.moveSectionUp()">
      <md-icon>chevron_right</md-icon>
    </button>
    <button class="back" @click="$refs.fullpage.api.moveSectionDown()">
      <md-icon>chevron_left</md-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ScrollControl'
}
</script>>