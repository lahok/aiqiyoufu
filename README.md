<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Build and Deploy

The corporate website is designed to be compiled locally into a static site.

1. Build for production:
   `npm run build`
2. After building, all static assets will be generated in the `out` directory.
3. The `out` directory is the final static website that you can deploy directly to your web server or CDN.

## Configuration

### AI Consultant (Chatbot)

The AI dialogue function is **disabled by default**. To enable it:

1. Open `siteConfig.ts`.
2. Find the `features` object at the bottom.
3. Set `aiConsultant` to `true`:
   ```typescript
   features: {
     aiConsultant: true
   }
   ```
4. Ensure you have set the `GEMINI_API_KEY` in your environment (see "Run Locally" section).

（本企业官网会在本地编译输出到 `out` 目录，该目录即为最终发布的静态页面网站。）
展会详细：设置时行首不要有缩进， 不然markdown渲染会失败。
