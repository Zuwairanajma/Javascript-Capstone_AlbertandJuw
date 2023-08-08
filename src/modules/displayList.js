
// export async function getData() {
//     const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//     const data = await response.json();
//     const showList = document.querySelector(".show-home");
// console.log(data);
//     for (let i = 0; i < 15; i += 1) {
//         if (data[i] && data[i].show) {
//         const showData = data[i].show;
//         }
//         const list = document.createElement("div");
//         list.className = "shows";

//         const div = document.createElement("div");
//         div.className = "div-img";
//         list.appendChild(div);

//         const img = document.createElement("img");
//         img.src = showData.image ? showData.image.medium : 'placeholder.jpg';
//         div.appendChild(img);

//         // Create and add title
//         const title = document.createElement("h3");
//         title.textContent = showData.name || "Title Not Available";
//         list.appendChild(title);
//         showList.appendChild(list);
//     }
// }
export async function getData() {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    const data = await response.json();
    const showList = document.querySelector(".show-home");

    for (let i = 0; i < 15; i += 1) {
        let showData = null; // Declare the variable in a higher scope

        if (data[i] && data[i].show) {
            showData = data[i].show; // Assign the value if condition is met
        }
        
        const list = document.createElement("div");
        list.className = "shows";

        const div = document.createElement("div");
        div.className = "div-img";
        list.appendChild(div);

        const img = document.createElement("img");
        img.src = showData ? showData.image.medium : './assets/placeholder.png';
        div.appendChild(img);

        // Create and add title
        const title = document.createElement("h3");
        title.textContent = showData ? showData.name : "Title Not Available";
        list.appendChild(title);

        showList.appendChild(list);
    }
}
