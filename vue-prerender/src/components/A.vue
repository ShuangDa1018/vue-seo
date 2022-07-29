<template>
  <div>你好  {{util}}</div>
</template>

<script>
import MateInfo from '../vue-mate-info'
import util from './util'
export default {
  metaInfo: MateInfo.second,
  data(){
    return {
      util
    }
  }
}
</script>
