function parseMarkdown(markdownString) {
    const header = /^# (.*$)/gim;
    const boldital = /\*\*\*(.*)\*\*\*/gim;
    const bold = /\*\*(.*)\*\*/gim;
    const italics = /\*(.*)\*/gim;
    const underline = /\_(.*)\_/gim;
    const link = /\[(.*?)\]\((.*?)\)/gim;
    const lineBreak = /\n$/gim;
    const lineBreak2 = /\r\n$/gim;

    const finalElm = document.createElement("div");
    finalElm.classList.add("post-textelm");

    const linesOfText = markdownString.split(lineBreak);

    for (let i in linesOfText) {
        const newLineElm = document.createElement("p");

        const newLineText = linesOfText[i]
        .replace(lineBreak2, `<br />`)
        .replace(lineBreak, `<br />`)
        .replace(header, `<h3>$1</h3>`)
        .replace(boldital, `<b><i>$1</i></b>`)
        .replace(bold, `<b>$1</b>`)
        .replace(italics, `<i>$1</i>`)
        .replace(underline, `<u>$1</u>`)
        .replace(underline, `<u>$1</u>`)
        .replace(link, `<a href="$2">$1</a>`);

        newLineElm.innerHTML = newLineText.trim();

        finalElm.appendChild(newLineElm);
    };
    
    return finalElm;
};