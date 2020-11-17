function parseMarkdown(markdownString) {
    const header = /^# (.*$)/gim;
    const boldital = /\*\*\*(.*)\*\*\*/gim;
    const bold = /\*\*(.*)\*\*/gim;
    const italics = /\*(.*)\*/gim;
    const underline = /\_(.*)\_/gim;
    const link = /\[(.*?)\]\((.*?)\)/gim;
    const lineBreak = /\n$/gim;

    const finalString = markdownString
        .replace(header, `<h3>$1</h3>`)
        .replace(boldital, `<b><i>$1</i></b>`)
        .replace(bold, `<b>$1</b>`)
        .replace(italics, `<i>$1</i>`)
        .replace(underline, `<u>$1</u>`)
        .replace(underline, `<u>$1</u>`)
        .replace(link, `<a href="$2">$1</a>`)
        .replace(lineBreak, `<br />`);
    
    return finalString.trim();
};