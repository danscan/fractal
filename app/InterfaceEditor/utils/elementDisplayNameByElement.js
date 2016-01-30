export default function elementDisplayNameByElement(element) {
  if (typeof element === 'string') {
    return element;
  }

  return element.displayName || element.type.displayName;
}
