window.onload = () => {
    document.querySelector(".addImageButton").addEventListener("click", () => {
        let image = document.createElement("img");
        const randomValue = Math.floor(Math.random() * 2000);
        image.src =
            `https://picsum.photos/200/200?random=${randomValue}`;
        document.querySelector(".imageContainer").appendChild(image);
    });
};

