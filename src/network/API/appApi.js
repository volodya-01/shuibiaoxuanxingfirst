//appApi.js是存放接口的文件
import Vue from 'vue'
import axios from 'axios'

export default {
  // 获取分类
  show_category: function () {
    return axios.post('/point-api-show_category');
  },
  // 获取商品
  get_product: function (data) {
    return axios.post('/point-api-get_product',data);
  }  
}