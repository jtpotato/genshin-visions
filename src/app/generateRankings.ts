function euclidianDistance(array1: number[], array2: number[]) {
  if (array1.length != array2.length) throw "Arrays are not the same length.";

  const differences = [];
  for (let i = 0; i < array1.length; i++) {
    differences.push((array2[i] - array1[i]) ** 2);
  }

  return Math.sqrt(differences.reduce((partialSum, a) => partialSum + a, 0));
}

function rankDifferences(differences: {
  anemo: number;
  hydro: number;
  geo: number;
  electro: number;
  dendro: number;
  cryo: number;
  pyro: number;
}) {
  let entries = Object.entries(differences);
  // [["you",100],["me",75],["foo",116],["bar",15]]

  let sorted = entries.sort((a, b) => a[1] - b[1]);
  return sorted
}

export default function generateRankings(values: number[]) {
  const anemoValues = [3, 2, 3, 4, 5, 3, 3, 4, 3, 3, 4, 3];
  const hydroValues = [4, 2, 4, 2, 3, 5, 4, 3, 3, 4, 3, 5];
  const geoValues = [5, 1, 4, 3, 3, 4, 3, 4, 5, 4, 3, 4];
  const electroValues = [1, 3, 3, 2, 5, 3, 5, 3, 2, 3, 2, 3];
  const dendroValues = [3, 1, 5, 2, 4, 3, 3, 4, 5, 5, 3, 2];
  const cryoValues = [1, 5, 3, 3, 4, 3, 4, 4, 2, 3, 4, 3];
  const pyroValues = [3, 1, 2, 5, 3, 3, 2, 4, 4, 3, 4, 2];

  const differences = {
    anemo: euclidianDistance(anemoValues, values),
    hydro: euclidianDistance(hydroValues, values),
    geo: euclidianDistance(geoValues, values),
    electro: euclidianDistance(electroValues, values),
    dendro: euclidianDistance(dendroValues, values),
    cryo: euclidianDistance(cryoValues, values),
    pyro: euclidianDistance(pyroValues, values),
  };

  return rankDifferences(differences);
}
