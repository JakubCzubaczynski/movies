const getData = async (url) => {
  const data = await fetch(url)
    .then((response) => response.json())
    .then((item) => item);
  return data;
};
export default getData;
