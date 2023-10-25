const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f5ba809441msh34a10a9248c1fafp11889bjsn79e35f5add48",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

fetch("https://shazam.p.rapidapi.com/charts/track", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
