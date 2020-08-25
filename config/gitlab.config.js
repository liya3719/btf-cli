/*
 * @description: 代码仓库配置列表
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-25 20:06:21
 * @LastEditors: liya
 * @LastEditTime: 2020-08-25 20:27:31
 */
const GitLabConfigList = [
  {
    type: 'input',
    name: 'gitlabUrl',
    message: '请输入代码仓库托管地址: '
  },
  {
    type: 'input',
    name: 'gitlabAccount',
    message: '请输入代码仓库登录账户: '
  },
  {
    type: 'password',
    name: 'gitlabPassword',
    message: '请输入代码仓库登录密码: '
  },
];
module.exports = GitLabConfigList;