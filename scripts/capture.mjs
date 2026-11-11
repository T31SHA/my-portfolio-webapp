import { chromium } from 'playwright'

const browser = await chromium.launch({ channel: 'chrome', headless: true })

async function shoot(width, height, scale, path) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: scale,
  })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(200)
  const metrics = await page.evaluate(() => {
    const boxes = [...document.querySelectorAll('header, main > section, footer')].map((el) => {
      const r = el.getBoundingClientRect()
      return {
        id: el.id || el.tagName.toLowerCase(),
        top: Math.round((r.top + window.scrollY) * 10) / 10,
        height: Math.round(r.height * 10) / 10,
        left: Math.round(r.left * 10) / 10,
        width: Math.round(r.width * 10) / 10,
      }
    })
    return {
      boxes,
      docHeight: document.documentElement.scrollHeight,
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }
  })
  await page.screenshot({ path, fullPage: true })
  await page.close()
  return metrics
}

const desktop = await shoot(1440, 900, 1, 'screenshots/portfolio-1440.png')
const mobile = await shoot(390, 844, 2, 'screenshots/portfolio-390.png')
console.log(JSON.stringify({ desktop, mobile }, null, 2))
await browser.close()
