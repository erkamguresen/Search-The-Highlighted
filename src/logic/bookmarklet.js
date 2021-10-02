export function createTheBookmarklet(emoji, bookmarkletName, search) {
  const divElement = document.createElement('div');

  const URI = getURI(search);

  divElement.innerHTML = `
    ---->
    <a
      href="javascript:(function() {
        function getSelectedText(page) {
            return page.selection ? page.selection.createRange().text : page.getSelection()
        } 
        searchText = getSelectedText(document); 
        for (i=0; i < frames.length && (searchText==null || searchText==''); i++) searchText = getSelectedText(frames[i].document); 
        if (!searchText || searchText=='') searchText = prompt('Enter search terms for ${search}',''); 
        open(${URI} + encodeURIComponent(searchText) : '')).focus();
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
