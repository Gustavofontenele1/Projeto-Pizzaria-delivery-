let modalQt = 1;

const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = select(".models .pizza-item").cloneNode(true);

  pizzaItem.setAttribute("data-key", index);
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector("a").addEventListener("click", (event) => {
    event.preventDefault();
    let key = event.target.closest(".pizza-item").getAttribute("data-key");
    modalQt = 1;

    select(".pizzaBig img").src = pizzaJson[key].img;
    select(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    select(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    select(".pizzaInfo--actualPrice").innerHTML = `R$ ${pizzaJson[
      key
    ].price.toFixed(2)}`;
    select(".pizzaInfo--size.selected").classList.remove("selected");
    selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
      if (sizeIndex == 2) {
        size.classList.add("selected");
      }
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });

    select(".pizzaInfo--qt").innerHTML = modalQt;

    select(".pizzaWindowArea").style.opacity = 0;
    select(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      select(".pizzaWindowArea").style.opacity = 1;
    }, 200);
  });

  select(".pizza-area").append(pizzaItem);
});
