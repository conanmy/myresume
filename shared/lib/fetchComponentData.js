export default function fetchComponentData(store, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current.needs || []).concat(prev);
  }, []);

  const promises = needs.map(need => need(store, params)));
  return Promise.all(promises);
}