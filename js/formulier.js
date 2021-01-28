<script>
'use strict'
window.addEventListener('DOMContentLoaded', function () {
  let mailBtn = document.querySelector('#mailBtn')
  let formulier = document.querySelector('#formulier')
  let closeBtn = document.querySelector('#closeBtn')

  mailBtn.addEventListener('click', function () {
    formulier.classList.add('formUp')
  })

  mailBtn.addEventListener('click', function () {
    formulier.classList.remove('formUp')
  })
})

console.log(typeof mailBtn)
</script>
