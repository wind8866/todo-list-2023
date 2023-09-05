- ✅next + tailwind
- ~~redux-tookit 1d~~
- ⏳vite 1d
- qiankun 1d
- 支持部署到 vercel

## next

202309
- 使用 `web components` 实现
- 使用 [stencil](https://github.com/ionic-team/stencil) 实现并提供向上的vue接口
- 将所有项目接入微前端

- 服务端渲染 ✅
  - 非交互组件使用服务端渲染，交互使用客户端
  - 已有数据直接返回而不是前端请求
- 接口服务
  - 对外提供完整的接口服务
  - 接口遵循 RESTful API ✅ 基本
  - 对外提供自动生成的接口文档（可选）可选用[next-swagger-doc](https://github.com/jellydn/next-swagger-doc)
- 数据存储使用数据库
  - 在适当的时候关闭数据库连接
- v2.0
  - 支持操作日志
  - 支持按用户的鉴权管理
  - 支持第三方登录（github、微信）
  - 参考 github 的 RESTful 的错误处理

**MySQL**

```
# 新增
affectedRows: 1
fieldCount: 0
info: ''
insertId: 3
serverStatus:2
warningStatus: 0


# 删除
affectedRows: 1
fieldCount: 0
info: ''
insertId: 0
serverStatus: 2
warningStatus: 0
```

### 命令记录

```shell
pnpm init

# next目录下
pnpm install @todo-list/server
```

## Nuxt

安装时选择 husky 并且不选择 git，需要删除这一行`"prepare": "husky install",`

- 怎么能自动导入 ITodo 类型？
- 统一的接口处理
-
