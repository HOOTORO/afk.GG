const desc = getMeta("description");
if (desc?.includes("@")) {
    const regex = /@(\w+)/g;


    let m;
    
    while ((m = regex.exec(desc)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
}


function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');
  
    for (const element of metas) {
      if (element.getAttribute('name') === metaName) {
        return element.getAttribute('content');
      }
    }
  
    return '';
  }
  