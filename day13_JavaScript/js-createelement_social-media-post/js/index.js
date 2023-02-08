console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newElement = document.createElement("article");
newElement.classList.add("post");
document.body.append(newElement);

const articlePost = document.createElement("p");
articlePost.classList.add("post__content");
articlePost.textContent = "lorem";
newElement.append(articlePost);

const footer = document.createElement("footer");
footer.classList.add("post__footer");
newElement.append(footer);

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@user42";
footer.append(span);

const button = document.createElement("");
