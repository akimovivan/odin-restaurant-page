const menuItems = [
  {
    name: "Stardust Bruschetta",
    description:
      "Toasted artisan bread with solar-dried tomatoes, whipped moon cheese, and a sprinkle of edible gold stardust",
  },
  {
    name: "Crispy Cloud Fritters",
    description:
      "Light-as-air tempura-battered zucchini flowers served with a dipping sauce of honey from singing bees",
  },
  {
    name: "Dragonfire-Grilled Steak",
    description:
      "Aged ribeye seared over enchanted oak, served with roasted root vegetables and a whiskey-peppercorn glaze that flickers with harmless blue flame",
  },
  {
    name: "Enchanted Forest Mushroom Risotto",
    description:
      "Creamy arborio rice with foraged mythical mushrooms, white wine, and truffle oil, finished with shaved Parmesan from happy cows",
  },
  {
    name: "Neptune's Treasure Pasta",
    description:
      "Handmade squid-ink linguine with scallops, clams, and lobster in a saffron-infused sea broth",
  },
  {
    name: "Philosopher's Stone Bowl",
    description:
      "A hearty vegan feast of quinoa, roasted sweet potato, black beans, avocado, and seasonal greens, said to grant clarity with every bite",
  },
];

export function populateMenuTab(el) {
  el.innerHTML = "";

  const menu = document.createElement("div");
  menu.classList.add("menu");
  for (const item of menuItems) {
    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("h2");
    header.innerText = item.name;
    card.appendChild(header);

    const description = document.createElement("p");
    description.innerText = item.description;
    card.appendChild(description);

    menu.appendChild(card);
  }

  el.appendChild(menu);
}
