export default function elementDisplayNameByElement(element) {
  return element.displayName || element.type.displayName;
}
