const pockemonAPI = pockemonName => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`).then(
    res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Жопа... покемона з именем ${pockemonName} нет!`);
    },
  );
};
export default pockemonAPI;
