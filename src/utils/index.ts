/**
 * 适配文字大小，动态设置html的font-size值
 * @param {number} minClientWidth
 * @param {number} maxClientWidth
 */
export function setRootFontSize(minClientWidth: number, maxClientWidth: number) {
  const resize = () => {
    let rootWidth: number
    const rootHtml = document.documentElement
    if (rootHtml.clientWidth < minClientWidth) {
      rootWidth = minClientWidth
    } else if (rootHtml.clientWidth > maxClientWidth) {
      rootWidth = maxClientWidth
    } else {
      rootWidth = rootHtml.clientWidth
    }

    const rem = rootWidth / 12 / 10
    rootHtml.style.fontSize = `${rem}px`
  }

  resize()
  window.onresize = resize
}
