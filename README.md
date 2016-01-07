# hexo-theme-meizi

[demo](https://imochen.com)

## 怎么使用

### 安装Hexo

```bash
	npm install hexo-cli -g
```
### 初始化项目
```bash
	hexo init blog
	cd blog
	npm install
	hexo server --debug
```

### 安装Meizi主题
```bash
	cd theme
	git clone https://github.com/imochen/hexo-theme-meizi.git
	mv hexo-theme-meizi meizi
```

### 配置主题

在根目录找到`_config.yml`,将theme改为`meizi`

```javascript
	theme: meizi
```

### 初始化主题

#### 友情链接页面初始化

```bash
	hexo new page links
```
打开新创建的`links/index.md`
修改其内容为
```md
	title: "友情链接"
	layout: "links"
	---

	<!-- 这里写你的友情链接列表 -->

	- <i class="iconfont icon-https"></i>[JerryQu 的小站](https://imququ.com/)（万能的屈屈大神）
	这样前面会带一个小锁，标明是 https 的站点
```

#### 关于我页面初始化
```bash
	hexo new page about
```
打开新创建的`about/index.md`
修改其内容为
```md
	title: "关于我"
	layout: "about"
	---

	<!-- 这里写你的简介 -->
```

#### 归档页面初始化
```bash
	hexo new page archive
```
打开新创建的`archive/index.md`
修改其内容为，里面无需再追加任何内容
```md
	title: "归档"
	layout: "all-archives"
	---
```

#### 标签页面初始化
```bash
	hexo new page tags
```
打开新创建的`tags/index.md`
修改其内容为，里面无需再追加任何内容
```md
	title: "标签"
	layout: "tags"
	---
```

### 启动预览

重新启动Hexo
```bash
hexo server --debug
```

## 二次开发

### 安装开发依赖工具

进入主题目录，安装依赖
```bash
	npm install
```

安装完成后启动gulp任务即可

```bash
	gulp watch
```