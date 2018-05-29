import Vue from 'vue'
import format from 'date-fns/format'
Vue.filter('date-format', function (val, formatStr) {
  return format(val, formatStr || 'YYYY-MM-DD HH:mm:ss')
})
