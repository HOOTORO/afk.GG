fetch("../../../memes.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => initialize(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

function initialize(memes) {
    const memesContainer = document.getElementById("memes");
    let eles = [];
    const smems = memes.memes.sort((a, b) => {
        return sortNumStr(a, b);
    });

    const colNum = 4,
        rowsPerCol = Math.round(smems.length / colNum),
        leftover = smems.length - colNum * rowsPerCol;

    console.log(`${colNum} - ${rowsPerCol} - ${leftover}`);

    for (let i = 0; i < colNum; i++) {
        const column = nodeAttributes("div", [
            { key: "class", value: "column" },
        ]);

        for (let j = 0; j < rowsPerCol; j++) {
            if (i * rowsPerCol + j >= smems.length) {
                break;
            }
            const image = nodeAttributes("img", [
                    {
                        key: "src",
                        value: `../../../assets/images/meme/${
                            smems[i * rowsPerCol + j]
                        }`,
                    },
                    { key: "alt", value: `meme-${i * rowsPerCol + j}` },
                    { key: "class", value: "mem" },
                    {
                        key: "style",
                        value: "width: 300px; height: 300px; object-fit: cover;",
                    },
                ]),
                glbox = nodeAttributes("a", [
                    { key: "class", value: "glightbox" },
                    {
                        key: "href",
                        value: `/afk.GG/assets/images/meme/${
                            smems[i * rowsPerCol + j]
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
            glbox.appendChild(image);
            column.appendChild(glbox);
        }
        memesContainer.appendChild(column);
    }

    runGLBox();
}

function nodeAttributes(nodeName, attr) {
    let d = document.createElement(nodeName);
    attr.forEach((e) => {
        d.setAttribute(e.key, e.value);
    });
    return d;
}

function sortNumStr(a, b) {
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

function runGLBox() {
    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: false,
    });

    const myGallery = GLightbox({
        elements: eles,
        autoplayVideos: false,
    });

    lightbox.on("open", () => {
        myGallery.open();
    });
    // If later you need to modify the elements you can use setElements
    // myGallery.setElements([...]);
}
