const mainPost = document.getElementById("mainPost");

getLatestPost().then(post => {
    mainPost.innerHTML = "";

    const title = document.createElement("h2");
    const info = document.createElement("p");
    const date = document.createElement("span");
    const author = document.createElement("span");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const content = document.createElement("p");

    title.innerHTML = post.title;
    title.classList.add("post-title");

    date.innerHTML = new Date(post.timestamp).toLocaleDateString();

    author.innerHTML = post.author;

    info.appendChild(date);
    info.appendChild(document.createElement("br"));
    info.appendChild(author);
    info.classList.add("post-info");

    image.src = "/card/banner.png";
    image.alt = "Page Banner";
    image.classList.add("post-image");

    imageContainer.appendChild(image);
    imageContainer.classList.add("post-image-cont");

    content.appendChild(parseMarkdown(post.markdown));
    content.classList.add("post-text");

    mainPost.appendChild(title);
    mainPost.appendChild(info);
    mainPost.appendChild(imageContainer);
    mainPost.appendChild(content);
});