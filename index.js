window.onload = function () {
  document.querySelector('.menuMobile').addEventListener('click', function () {
    if (document.querySelector('.menu nav ul').style.display == 'flex') {
      document.querySelector('.menu nav ul').style.display = 'none'
    } else {
      document.querySelector('.menu nav ul').style.display = 'flex'
    }
  })
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) {
      document.querySelector('.menu nav ul').style.display = 'flex'
    } else {
      document.querySelector('.menu nav ul').style.display = 'none'
    }
  })
}
