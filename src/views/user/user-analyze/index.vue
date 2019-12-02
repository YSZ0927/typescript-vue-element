<template>
  <div class="user-analyze">
    <div>
      <h4>客群分布</h4>
      <city-map :width="'850px'" :height="'700px'"/>
    </div>
  </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CityMap from '../../../components/echarts/CityMap.vue'; // @ is an alias to /src

    @Component({
        components: {
            CityMap,
        },
    })
    export default class userAnalyze extends Vue {}
</script>
