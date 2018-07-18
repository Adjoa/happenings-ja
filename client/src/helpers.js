const ellipsis = require('text-ellipsis');

export function formatDescription(description) {
  return ellipsis(description, 100);
}