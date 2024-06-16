[//]: # (quickStart-快速上手)

# 快速上手

<div class="tagBarBadge">
    <Badge type="info" text="原创" />
    <span>📝 chandler</span>
    <span>📆 2024-04-16 23:17</span>
</div>

## 环境准备

### 环境版本

| 名称    | 版本   | 是否必须 | 备注          |
|-------|:-----|:----:|-------------|
| JDK   | 8    |  ✔️  | 硬性条件，请勿切换版本 |
| Maven | 3.8+ |  ✔️  |             |
| MySQL | 8.0+ |  ✔️  |             |
| Redis | 3.2+ |  ✔️  |             |

### 运行环境

| 名称     | 地址 |  说明   |
|--------|:---|:-----:|
| Maven源 |    | 阿里云仓库 |

### 开发工具

| 名称                            | 版本      | 系统  | 用途      | 下载地址        | 备注 |
|-------------------------------|---------|-----|---------|-------------|----|
| IntelliJ IDEA                 | 2024.1+ | w/m | 程序编写    | 官网(破解版联系群主) |    |
| DataGrip                      | 2024.1+ | w/m | 数据库查询   | 官网(破解版联系群主) |    |
| OffsetExplorer3               |         | w/m | kafka工具 | 官网          |    | 
| Another Redis Desktop Manager |         | win | Redis工具 | 官网          |    | 
| RedisInsight                  |         | mac | Redis工具 | 官网          |    | 

### 插件列表

| 名称                                 | 软件   | 作用                     | 
|------------------------------------|------|------------------------| 
| Lombok                             | IDEA | getter/setter/toString |
| Adapter for Eclipse Code Formatter | IDEA | 代码格式化                  |

## 插件配置

### 插件:Lombok

#### 打开

## 代码地址

```html
https://gitee.com/haimashale/three-bird-cloud
```

## 分支说明

### 本地host配置

文件地址：

- windows：
  `
  C:\Windows\System32\drivers\etc\hosts
  `
- mac：
  `
  /etc/hosts
  `

*温馨提示：*

- windows 为了避免修改错误，请在修改之前自行备份一份，以作备用，并且需要使用管理员模式打开才能编辑
- mac可以下载SwitchHosts软件来更改hosts

```cmd
# three-bird配置开始
# 注册中心
127.0.0.1  three-bird-register
# 数据库
127.0.0.1  three-bird-mysql
# Redis
127.0.0.1  three-bird-redis
# three-bird配置结束
```

## 初始化数据库

## 配置文件修改

## 启动顺序
