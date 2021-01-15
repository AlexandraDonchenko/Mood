const url: string = 'http://localhost:3000/';
const Obj = {
  postEntrie: function (content: object) {
    return fetchItems(`${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify(content),
    });
  },
};

function fetchItems(url: string, options: any) {
  return fetch(url, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((error) => console.log(error));
}

export default Obj;
