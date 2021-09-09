const radioList = document.querySelector(".radio-list");
const radioFooter = document.querySelector(".radio-footer");

const radioInterractive = () => {

  fetch("https://teclead.de/recruiting/radios")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      data.radios.map((radio) => {
        const listContent = `
        <div class="radio-infos">
          <p>${radio.name}</p>
          <p>${radio.frequency}</p>
        </div>
        <div class="border-bottom"></div>
        <div class="image-display">
          <i class="fas fa-minus-circle"></i>
            <img src="${radio.image}">
            <i class="fas fa-plus-circle"></i>
        </div>`;

        const footerContent = `
        <h2>CURRENTLY PLAYING</h2>
        <p>${radio.name}</p>`;

        radioList.insertAdjacentHTML("beforeend", listContent);
        radioFooter.insertAdjacentHTML("beforeend", footerContent);

        display();

      });
    });

  const display = () => {
    const radioInfos = document.querySelectorAll(".radio-infos");
    radioInfos.forEach((radio) => {
      radio.addEventListener("click", (event) => {
        event.preventDefault();
        radio.nextElementSibling.nextElementSibling.style.display = 'flex';
      });
    });
  };
}

export { radioInterractive };
