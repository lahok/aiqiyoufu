# 项目开发需求文档：爱优企服 (AIYOU) 企业官网

## 1. 项目背景与定位

* **企业名称**：爱优企服 (AIYOU Business Group)
* **核心业务**：组织中国企业赴俄罗斯参展、中俄贸易服务咨询。
* **技术栈**：Next.js 14+ (App Router), Tailwind CSS, Lucide React (图标).
* **架构模式**：**无后端 (Serverless)**。采用静态导出模式 (`output: 'export'`)，部署于 Yandex Cloud Object Storage。
* **合规性要求**：彻底剔除 Google Fonts, Google Analytics, Vercel 等美国服务依赖。

## 2. 语言与内容逻辑

站点支持三种语言路由：`zh` (中文), `en` (英语), `ru` (俄语)。

* **差异化显示**：**“重点展会计划表格”仅在中文 (`zh`) 环境下显示**，英文和俄语环境下需完全隐藏该模块。
* **对标参考**：视觉风格对标 `cewgroup.cn`（商务深蓝、简约大气、响应式设计）。

## 3. 页面结构规划 (Single Page / Multi-language)

### A. 全局导航 (Navbar)

* 左侧：Logo (AIYOU 爱优企服)。
* 中间：关于我们、行业领域、展会计划 (仅ZH)、联系我们。
* 右侧：语言切换器 (Select 组件)。

### B. 核心模块 (Sections)

1. **Hero Section**：高质量背景图（莫斯科商务区/红场风格），三语核心标语（Slogan）。
2. **Service Grid**：展示三大核心业务：海外组展、展台设计搭建、商务咨询。
3. **Industry Focus**：展示优势行业，如工业机械、电子信息、农业机械等。
4. **Exhibition Calendar (ZH Only)**：
* **仅在 `locale === 'zh'` 时渲染**。
* 包含：展会名称、城市、时间、操作（了解详情）。
* 数据来源：本地常量或 JSON 文件。


5. **Contact Section **：
* 不设后端表单，直接放置联系卡片。
* **行动呼吁 (CTA)**：点击“立即咨询”按钮，根据语言或业务需求跳转至：
* **Telegram**: `https://t.me/your_account`
* **WhatsApp**: `https://wa.me/your_number`
* **VK**: `https://vk.com/your_id`


* 同时显示企业邮箱和北京/莫斯科两地办公地址。



## 4. 技术实现要点 (Claude 提示词参考)

请 Claude 根据以下指令生成代码：

* **多语言实现**：使用 `next-intl` 或简单的 `params.locale` 路径匹配方案。
* **静态导出配置**：配置 `next.config.js` 以支持 `output: 'export'`。
* **响应式设计**：使用 Tailwind CSS 确保手机、平板、PC 完美适配。
* **字体处理**：禁止调用远程字体，使用系统原生字体族：`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`。
* **条件渲染逻辑**：
```tsx
{locale === 'zh' && <ExhibitionTable data={data} />}

```



## 5. 虚构内容填充

* **中文标语**：连接中俄市场，助力中国制造。
* **英文标语**：Connecting Sino-Russian Markets, Empowering Global Trade.
* **俄语标语**：Ваш мост в бизнес между Китаем и Россией.
* **表格数据**：预填 2-3 个虚构展会，如“2025俄罗斯国际石油天然气展”。

---

代码开发完成后，我需要在本地执行 `npm run build`，然后将得到的 `out` 文件夹里的东西放到web云服务器上线。


> “请按照上述文档，为一个初创的企业服务公司实现这个 Next.js 14 静态单页面项目。代码要求模块化，视觉上要有高级感，且确保在没有后端支持的情况下，通过静态数据和外部社交媒体链接完成所有交互。请优先生成首页的核心框架代码。”

