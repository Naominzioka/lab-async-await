function displayPosts(posts) {
    const postList = document.getElementById("post-list")
    posts.forEach(post => {
        const listItem = document.createElement("li");
        const postTitle = document.createElement("h1");
        postTitle.textContent = post.title
        const paragraph = document.createElement("p")
        paragraph.textContent = post.body
        listItem.appendChild(postTitle)
        listItem.appendChild(paragraph)
        postList.appendChild(listItem)
    });
}

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const postsArray = await response.json();
        displayPosts(postsArray);
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

getPosts();