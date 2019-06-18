<template>
  <div class="about">
      <city-map/>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CityMap from '../../components/echarts/CityMap.vue'; // @ is an alias to /src

    @Component({
        components: {
            CityMap,
        },
    })

    export default class About extends Vue {
        private mounted() {
            this.init();
        }

        private init() {
            console.log(this);
            const self: any = this;
            self.$axios.post(self.$apis.address.addRess).then((res: any) => {
                // this.$store.dispatch('user/userInfo', this.userinfo);
            }).catch((err: any) => {
                console.log(err);
            });
        }
    }
</script>
