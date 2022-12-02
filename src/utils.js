export function getRandomColor() {
  const R = getRandomInt(256)
  const G = getRandomInt(256)
  const B = getRandomInt(256)
  return `rgb(${R}, ${G}, ${B})`
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
