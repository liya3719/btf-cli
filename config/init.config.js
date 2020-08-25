/*
 * @description: 脚手架初始化模板列表
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2019-03-25 15:06:38
 * @LastEditors: liya
 * @LastEditTime: 2020-08-25 17:45:09
 */
const promptList = [
  {
    type: 'list',
    message: '请选择工程模板',
    name: 'template',
    choices: [
      'Vue SSR组件工程模板',
      'Vue Component开发模板',
      'Vue Typescript前后端分离单页工程模板',
      'Koa Typescript后端工程模板'
    ],
    filter: function(val) {
      if(val.indexOf('Vue SSR') != -1) {
        return 'VueSSR';
      };
      if(val.indexOf('Vue Component') != -1) {
        return 'VueComponent'
      }
      if(val.indexOf('Vue Typescript') != -1) {
        return 'VueTemplate';
      };
      if(val.indexOf('Koa Typescript') != -1) {
        return 'KoaNode';
      }
    }
  },
  {
    type: 'input',
    name: 'author',
    message: 'Author: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'description: '
  }
];
module.exports = promptList;