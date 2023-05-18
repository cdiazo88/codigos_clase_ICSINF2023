// Import stylesheets

var length = 3,
  page = 1,
  btnMore = document.getElementById("btn");

function getJson() {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${length}&_page=${page}`
  )
    .then(res => res.json())
    .then(posts => {
      console.log(posts);
      // var i, item;
      // var output = "";
      // for (i = 0; i < length; ++i) {
      //   item = data[i];
      //   output += `
      //       <div class="card">
      //         <h3>${item.title}</h3>
      //         <p>${item.body}</p>
      //       </div>
      //     `;
      // }
      var output = "";
      posts.forEach(post => {
        output += `
            <div class="card">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
          `;
      });

      document.getElementById("app").insertAdjacentHTML("beforeend", output);

      if (page >= 10) {
        btnMore.style.display = "none";
      }
    })
    .catch(err => console.log(err));
}

btnMore.addEventListener("click", function() {
  // length += 3;
  page++;
  getJson();
});

getJson();
