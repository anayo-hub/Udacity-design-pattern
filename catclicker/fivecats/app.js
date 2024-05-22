const images = document.querySelectorAll(".images");
const article = document.querySelector("article");
const catTemplate = document.getElementById("cat-template").content;

const names = ["one", "two", "three", "four", "five"];

// Create an array to store click counts for each cat
const clickCounts = new Array(names.length).fill(0);

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    const catInfo = catTemplate.cloneNode(true);

    catInfo.querySelector(".cat-name").textContent = names[index];
    catInfo.querySelector(".image-content").src = image.src;
    catInfo.querySelector(".image-content").alt = names[index];

    // Get the click count span and update its text
    const clickCountSpan = catInfo.querySelector(".click-count");
    clickCounts[index]++;
    clickCountSpan.textContent = `Clicks: ${clickCounts[index]}`;

    article.innerHTML = "";
    article.appendChild(catInfo);
  });
});
