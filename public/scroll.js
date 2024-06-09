window.addEventListener('scroll', () => {
    const spanElement = document.getElementById('imgbranding');
    const navliElement = document.getElementById('navli');
    if (window.scrollY > 50) {
      spanElement.classList.remove('sm:h-7');
      spanElement.classList.add('sm:h-5');
    
      navliElement.classList.remove('pt-8');
      navliElement.classList.add('pt-6');
    } else {
      spanElement.classList.remove('sm:h-5');
      spanElement.classList.add('sm:h-7');

      navliElement.classList.remove('pt-6');
      navliElement.classList.add('pt-8');
    }
  });
  