export function createTheBookmarklet(emoji, bookmarkletName, search) {
  const divElement = document.createElement('div');

  const URI = getURI(search);

  divElement.innerHTML = `
    ---->
    <a
      href="javascript:(function() {
        function se(d) {
            return d.selection ? d.selection.createRange().text : d.getSelection()
        } 
        s = se(document); 
        for (i=0; i<frames.length && (s==null || s==''); i++) s = se(frames[i].document); 
        if (!s || s=='') s = prompt('Enter search terms for ${search}',''); 
        open(${URI} + encodeURIComponent(s) : '')).focus();
        })();
    "
    >
      ${emoji} ${bookmarkletName}
    </a>
    <---- (Drag to bookmarks of your browser)
    `;
  return divElement;
}

function getURI(search) {
  switch (search) {
    case 'google':
      return `'https://www.google.com'+ (s ? '/search?q='`;

    case 'youtube':
      return `'https://www.youtube.com'+ (s ? '/results?search_query='`;

    default:
      return `'https://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search='`;
  }
}
