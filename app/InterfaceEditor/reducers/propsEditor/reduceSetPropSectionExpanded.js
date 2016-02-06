export default function reduceSetPropSectionExpanded(state, { expanded, propName }) {
  const expandedSectionPropNames = state.get('expandedSectionPropNames');
  const newExpandedSectionPropNames = !!expanded
                                    ? expandedSectionPropNames.add(propName)
                                    : expandedSectionPropNames.delete(propName);


  return state.set('expandedSectionPropNames', newExpandedSectionPropNames);
}
