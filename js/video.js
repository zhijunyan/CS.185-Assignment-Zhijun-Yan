const lightbox = document.createElement('div')
lightbox.id = 'LB'
document.body.appendChild(lightbox)






const images = document.querySelectorAll('img')

images.forEach(image => {
  image.addEventListener('click', e => {
    
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {

  if (e.target !== e.currentTarget) 
    return
  lightbox.classList.remove('active')
})

































// Quote and inspired by WEB DEV SIMPLIFIED CHANNEL fROM yOUTUBE https://www.youtube.com/watch?v=uKVVSwXdLr0