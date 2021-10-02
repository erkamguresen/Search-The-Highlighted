import { bookmarkletFormHandler } from '../handlers/bookmarkletFormHandler.js';

document
  .getElementById('bookmarklet-form')
  .addEventListener('change', bookmarkletFormHandler);

document
  .getElementById('bookmarklet-form')
  .addEventListener('submit', bookmarkletFormHandler);
