import fs from 'fs'
import { PNG } from 'pngjs'
import pixelmatch from 'pixelmatch'

const desktopSections = [
  ['nav', 28, 66],
  ['hero', 130, 640],
  ['intro', 806, 433],
  ['services', 1275, 322],
  ['skills', 1633, 584],
  ['work', 2253, 582],
  ['clients', 2871, 300],
  ['cta', 3207, 428],
  ['footer', 3671, 299],
]

const mobileSections = [
  ['nav', 20, 56],
  ['hero', 104, 719],
  ['intro', 851, 514],
  ['services', 1393, 466],
]

function read(path) {
  return PNG.sync.read(fs.readFileSync(path))
}

function crop(src, x, y, w, h) {
  const dst = new PNG({ width: w, height: h })
  PNG.bitblt(src, dst, x, y, w, h, 0, 0)
  return dst
}

function compare(name, design, build, x, y, w, h, outDir) {
  const height = Math.min(h, design.height - y, build.height - y)
  if (height <= 0 || y + height > design.height || y + height > build.height) {
    console.log(name, 'SKIP', { y, h, designH: design.height, buildH: build.height })
    return
  }
  const a = crop(design, x, y, w, height)
  const b = crop(build, x, y, w, height)
  const diff = new PNG({ width: w, height })
  const mismatched = pixelmatch(a.data, b.data, diff.data, w, height, { threshold: 0.1 })
  fs.mkdirSync(outDir, { recursive: true })
  const side = new PNG({ width: w * 2 + 8, height })
  PNG.bitblt(a, side, 0, 0, w, height, 0, 0)
  PNG.bitblt(b, side, 0, 0, w, height, w + 8, 0)
  fs.writeFileSync(`${outDir}/${name}-side.png`, PNG.sync.write(side))
  fs.writeFileSync(`${outDir}/${name}-diff.png`, PNG.sync.write(diff))
  const pct = (100 * mismatched / (w * height)).toFixed(2)
  console.log(`${name}\t${pct}%\t${mismatched} px`)
}

const design = read('design/design-desktop-1440.png')
const build = read('screenshots/portfolio-1440.png')
console.log('desktop sizes', design.width, design.height, build.width, build.height)
fs.mkdirSync('screenshots/diff', { recursive: true })
for (const [name, y, h] of desktopSections) compare(`desktop-${name}`, design, build, 0, y, 1440, h, 'screenshots/diff')

const designM = read('design/design-mobile-390.png')
const buildM = read('screenshots/portfolio-390.png')
console.log('mobile sizes', designM.width, designM.height, buildM.width, buildM.height)
for (const [name, y, h] of mobileSections) {
  compare(`mobile-${name}`, designM, buildM, 0, y * 2, 780, h * 2, 'screenshots/diff')
}
