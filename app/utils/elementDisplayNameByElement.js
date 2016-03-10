export default function elementDisplayNameByElement(element) {
  if (typeof element === 'string') {
    return element;
  }

  return element.get('displayName') || element.get('type').displayName;
}
