/**
 * 脚手架初始化配置单
 */
const promptList = [
  {
    type: 'list',
    message: '请选择工程模板',
    name: 'template',
    choices: [
      '适用于vue ssr的组件工程模板',
      '基于vue+ts的前后端分离单页工程模板',
      '基于vue+ts的前后端分离多页工程模板',
      '基于koa2的前后端分离工程模板',
      '基于koa2+ts的后端工程模板'
    ],
    filter: function(val) {
      if(val.indexOf('vue ssr') != -1) {
        return 'ssr';
      };
      if(val.indexOf('单页') != -1) {
        return 'vueMulit';
      };
      if(val.indexOf('多页') != -1) {
        return 'vueSingle';
      };
      if(val.indexOf('koa2') != -1) {
        return 'koa2fe';
      };
      if(val.indexOf('koa+ts') != -1) {
        return 'koa2node';
      }
    }
  },
  // {
  //   type: 'list',
  //   name: 'webpack4',
  //   message: '是否需要webpack4构建服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'publish',
  //   message: '是否需要安装一键发布服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'install',
  //   message: '是否需要分源下载服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'mock',
  //   message: '是否需要mock服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'monitor',
  //   message: '是否需要监控服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  // {
  //   type: 'list',
  //   name: 'upload',
  //   message: '是否需要上传服务?',
  //   choices: [
  //     '是',
  //     '否'
  //   ],
  //   filter: function(val) {
  //     return val === '是' ? true : false;
  //   }
  // },
  {
    type: 'input',
    name: 'author',
    message: ' Author: '
  },
  {
    type: 'input',
    name: 'description',
    message: ' description: '
  },
];
module.exports = promptList;