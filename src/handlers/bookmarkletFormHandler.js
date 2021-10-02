import { createTheBookmarklet } from '../logic/bookmarklet.js';

export function bookmarkletFormHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const codeElement = document.getElementById('bookmarklet-code');

  const bookmarkletElement = document.getElementById('bookmarklet-container');

  const emojiElement = document.getElementById('emoji-select');
  const nameElement = document.getElementById('BookmarkletName');
  const searchElement = document.getElementById('search-engine');

  const emoji = emojiElement.value;
  let bookmarkletName = nameElement.value;
  const search = searchElement.value;

  if (bookmarkletName.length === 0) {
    bookmarkletName = 'Wiki Search...';
  }

  bookmarkletElement.innerHTML = '';

  bookmarkletElement.appendChild(
    createTheBookmarklet(emoji, bookmarkletName, search)
  );

  const aElement = bookmarkletElement.querySelector('a');

  codeElement.innerText = decodeURI(aElement.href);
}
