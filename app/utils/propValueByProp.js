export default function propValueByProp(prop) {
  if (!prop) {
    return undefined;
  }

  return prop.get('value', undefined);
}
