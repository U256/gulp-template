function handleWebp() {
   var webP = new Image()
   webP.onload = webP.onerror = function () {
      const isWebp = webP.height == 2
      document.querySelector('body').classList.add(isWebp ? 'webp' : 'no-webp')
   }
   webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}

export default handleWebp
