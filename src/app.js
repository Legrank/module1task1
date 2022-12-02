import { getRandomColor } from './utils'

export default function initApp() {
  console.log('Hello world')
  const btn = document.createElement('button')
  btn.classList.add('button')
  btn.textContent = 'Изменить цвет страницы'
  btn.style = { height: '2px' }
  btn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor()
  })
  document.body.append(btn)
}
