## 介绍

ssr 实战项目

oppo 官网，实现了 OPPO 专区、OnePlus 专区、智能硬件、详情页 的内容。

服务、登录、注册 只实现了简单的页面跳转实现。

OPPO 专区 轮播图下的那 8 个 分类可以点击跳转到 详情页，其他两个页面的不行。

另外封装了 useFetch 进行数据请求，并且做了数据备份，即使后面的 api 失效了，会自动使用本地数据。

详细的介绍可以前往: [网站](https://ran-up.github.io/2025/02/13/SSR/nuxt/nuxt%E7%AE%80%E6%98%93%E5%AE%9E%E6%88%98oppo%E5%AE%98%E7%BD%91/)

## 项目演示

<img src="./assets/images/演示.gif" />
<img src="/images/演示.gif" />

## 项目技术

- vue3
- nuxt3
- element-plus
- TypeScript
- pinia
- scss
- normalize.css

## 项目目录

- assets
  - css
    - global.scss -- 全局的样式重置
    - variables.scss -- 全局变量
  - cus-font/ -- iconfont 文件
  - images
    - saveImg/ -- 备份图片
- components
  - appFooter.vue -- 尾部组件
  - appHeader.vue -- 头部组件
  - baseContent.vue -- 统一管理组件
  - categoryGrid.vue -- 分类信息内容组件
  - categorySection.vue -- 分类信息组件
  - categoryTitle.vue -- 分类信息的名称组件
  - gridItem.vue -- 分类信息的小 i tem 组件
  - navbar.vue -- 导航组件
  - search.vue -- 搜索框组件
  - swiper.vue -- 轮播图组件
  - tabCategory.vue -- 分类组件
- layouts
  - default.vue -- 默认布局
  - empty.vue -- 空布局，登录、注册、404 等组件使用
- pages
  - [...slug].vue -- 404 组件
  - category-detail.vue -- 分类详情
  - index.vue -- 主页、OPPO 专区
  - intelligent.vue -- 智能硬件
  - login.vue -- 登录
  - one-plus.vue -- OnePlus 专区
  - oppo-service.vue -- 服务
  - register.vue -- 注册
- plugins
  - element-plus.client.js -- ElementPlus 中文化配置
- public/ -- 静态目录，可以直接使用该目录下的图片
- service
  - saveData -- 备份的 api 数据
    - detailInfo.ts -- 详情信息
    - homeInfo.ts -- OPPO 专区
    - homeIntelligentInfo.ts -- 智能硬件
    - onePlusInfo.ts -- OnePlus 专区
  - detail.ts -- 详情页 的接口请求
  - home.ts -- 首页等三个页面的 接口请求
  - index.ts -- useFetch() 接口封装
- store
  - detail.ts -- 详情页类型定义
  - home.ts -- 首页类型定义与 pinia 使用
- utils
  - reqUnite.ts -- 请求数据和设置备用数据的抽离代码
- app.vue
- nuxt.config.ts
- package-lock.json
- package.json
- README.md
- tsconfig.json

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
