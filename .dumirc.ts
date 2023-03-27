import { defineConfig } from 'dumi';

let base = '/bai-design-react' // 此处更换为自己的仓库名
let publicPath = '/bai-design-react/' // 此处更换为自己的仓库名

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Baiyunfei React UI', // 站点名称
  // mode: 'site', // 2.0，由于 doc 模式已废弃，所以该配置项也一并废弃
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  // dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度; tips: 2.0自动开启，无需设置
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
  base,
  publicPath,
});