export default function elementPathByTreePath(treePath) {
  return treePath
    .filterNot(value => ['props', 'children'].indexOf(value) > 0);
}
