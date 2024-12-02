import { Command } from 'commander'
import { MpaOptions, AllowedEvent } from 'vite-plugin-virtual-mpa'
import pages from './mpa-entry'

// 多页面插件配置项
const mpa_options: MpaOptions<string, string, string, AllowedEvent, string> = {
  htmlMinify: true,
  verbose: false,
  template: 'config/mpa-template.html',
  pages,
  rewrites: [{ from: /^\/$/, to: '/index.html' }]
}

// 命令行参数
const options = new Command()
  .name('多页面按需构建指令')
  .description('可选参数：-p , --page, 指定打包的页面值为目录名称，多个值用逗号隔开, 例如：-- -p page_a,page_b')
  .allowUnknownOption(true)
  .option('-p, --page <value>')
  .parse(process.argv.slice(2))
  .opts()

if (options.page && mpa_options.pages) {
  mpa_options.pages = mpa_options.pages.filter(page => options.page.split(',').includes(page.name))

  // 转为单页面，更改页面名称为index
  if (mpa_options.pages.length === 1) {
    mpa_options.pages[0].name = 'index'
  }
}

export default mpa_options
