<template>
  <div class="table">
      <el-table
        :data="tableData">
        <el-table-column
          v-for="(item,key) in columnsConfig"
          :key="key"
          :label="item.label"
          :prop="item.prop">
            <template slot-scope="scope">
              {{scope.row[item.prop]}}
              <!-- <template v-if="!item.render">
                <span>{{scope.row[item.prop]}}</span>
              </template>
              <template v-else>
                  <expand-dom :column="item"
                    :row="scope.row"
                    :render="item.render" :index="key"></expand-dom>
              </template> -->
            </template>
          </el-table-column>
      </el-table>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
      // name: 'table',
      // components: {
      //   functional: true,
      //   props: {
      //     row: Object,
      //     render: Function,
      //     index: Number,
      //     column: {
      //       type: Object,
      //       default: null,
      //     },
      //   },
      //   render: () => {
      //   },
      // }
    })
    export default class table extends Vue {
      @Prop() private columnsConfig!: object;

      @Prop() private tableData!: object;
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
