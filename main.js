onload = () =>{
        document.body.classList.remove("container");
};
{
  const nameElement = document.getElementById('name');
  setInterval(() => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    nameElement.style.color = randomColor;
  }, 1000); // Cambia el color cada segundo
}
