// src/fragment-masking.ts
function useFragment(_documentNode, fragmentType) {
  return fragmentType;
}
function makeFragmentData(data, _fragment) {
  return data;
}
function isFragmentReady(queryNode, fragmentNode, data) {
  const deferredFields = queryNode.__meta__?.deferredFields;
  if (!deferredFields)
    return true;
  const fragDef = fragmentNode.definitions[0];
  const fragName = fragDef?.name?.value;
  const fields = fragName && deferredFields[fragName] || [];
  return fields.length > 0 && fields.every((field) => data && (field in data));
}
// src/gql.ts
function graphql(source) {
  return documents[source] ?? {};
}
var documents = [];
export {
  useFragment,
  makeFragmentData,
  isFragmentReady,
  graphql
};
