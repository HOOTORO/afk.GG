fetch("/afk.GG/memes.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => initialize(json))
  .catch((err) => console.error(`Fetch problem: ${err.message}`));

function initialize(memes: { memes: any }) {
  const memesContainer = document.getElementById("memes");

  const sortedMems = memes.memes.toSorted((a: any, b: any) => {
    return sortNumStr(a, b);
  });

  const colNum = 4,
    rowsPerCol = Math.round(sortedMems.length / colNum),
    leftover = sortedMems.length - colNum * rowsPerCol;

  console.log(`Memender running => 
                      Memes found: ${sortedMems.length}
                      N columns:  ${colNum}
                      Overall: ${rowsPerCol} rows, with ${leftover} leftover`);

  for (let i = 0; i < colNum; i++) {
    const column = nodeAttributes("div", [{ key: "class", value: "column" }]);

    for (let j = 0; j < rowsPerCol; j++) {
      if (i * rowsPerCol + j >= sortedMems.length) {
        break;
      }
      const image = nodeAttributes("img", [
          {
            key: "src",
            value: `/afk.GG/assets/images/meme/${
              sortedMems[i * rowsPerCol + j]
            }`,
          },
          { key: "alt", value: `meme-${i * rowsPerCol + j}` },
          { key: "class", value: "mem" },
          {
            key: "style",
            value: "width: 300px; height: 300px; object-fit: cover;",
          },
        ]),
        glBox = nodeAttributes("a", [
          { key: "class", value: "glightbox" },
          {
            key: "href",
            value: `/afk.GG/assets/images/meme/${
              sortedMems[i * rowsPerCol + j]
            }`,
          },
          { key: "data-type", value: "image" },
          { key: "data-width", value: "200px" },
          { key: "data-height", value: "300px" },
          {
            key: "data-sizes",
            value: "(max-width: 600px) 480px, 800px",
          },
          { key: "data-title", value: `meme-${i * rowsPerCol + j}` },
          { key: "data-desc-position", value: "bottom" },
          { key: "ata-zoomable", value: "true" },
          { key: "data-draggable", value: "false" },
        ]);
      glBox.appendChild(image);
      column.appendChild(glBox);
    }
    memesContainer.appendChild(column);
  }
}

function nodeAttributes(nodeName: string, attr: any[]) {
  let d = document.createElement(nodeName);
  attr.forEach((e: { key: any; value: any }) => {
    d.setAttribute(e.key, e.value);
  });
  return d;
}

function sortNumStr(a: string, b: string) {
  const nameA = parseInt(a.split(".").slice(0, -1).join("."), 10); // ignore upper and lowercase
  const nameB = parseInt(b.split(".").slice(0, -1).join("."), 10); // ignore upper and lowercase
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
}
