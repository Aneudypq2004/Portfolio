export const handleScroll = e => {
    e.preventDefault()
    const seccionScroll = e.target.attributes.href?.value || '#Home';
    console.log(seccionScroll)
    const seccion = document.querySelector(seccionScroll)
    seccion.scrollIntoView({ behavior: 'smooth' });
}