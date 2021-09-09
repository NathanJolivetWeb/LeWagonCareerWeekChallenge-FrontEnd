const radioList = document.querySelector(".radio-list");
const radioFooter = document.querySelector(".radio-footer");

const radioInterractive = () => {

  fetch("https://teclead.de/recruiting/radios")
    .then((resp) => resp.json())
    .then((data) => {
      data.radios.map((radio) => {
        const listContent = `
        <div class="radio-infos" data-name="${radio.name}">
          <p>${radio.name}</p>
          <p>${radio.frequency}</p>
        </div>
        <div class="border-bottom"></div>
        <div class="image-display">
          <i class="fas fa-minus-circle"></i>
            <img src="${radio.image}">
            <i class="fas fa-plus-circle"></i>
        </div>`;

        radioList.insertAdjacentHTML("beforeend", listContent);

        display();

      });
    });

  const resetDisplay = () => {
    const imgs = document.querySelectorAll(".image-display");
    imgs.forEach((img) => {
      img.style.display = "none";
    });
  };

  const resetFooter = () => {
    const footers = document.querySelectorAll(".currently-playing");
    footers.forEach((footer) => {
      footer.style.display = "none";
    });
  };

  const display = () => {
    const radioInfos = document.querySelectorAll(".radio-infos");
    radioInfos.forEach((radio) => {
      radio.addEventListener("click", (event) => {
        event.preventDefault();
        resetDisplay();
        resetFooter();
        radio.nextElementSibling.nextElementSibling.style.display = 'flex';
        const dataSet = event.currentTarget.dataset.name;
        const footerContent = `
        <div class="currently-playing">
          <h2>CURRENTLY PLAYING</h2>
          <p>${dataSet}</p>
        </div>`;
        radioFooter.insertAdjacentHTML("beforeend", footerContent);
      });
    });
  };
}

export { radioInterractive };
