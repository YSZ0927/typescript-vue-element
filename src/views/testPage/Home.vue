<template>
  <div class="home">
    <DisMap/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import DisMap from '@/components/echarts/DisMap.vue'; // @ is an alias to /src

    @Component({
      components: {
        DisMap,
      },
    })
    export default class Home extends Vue {}
</script>
