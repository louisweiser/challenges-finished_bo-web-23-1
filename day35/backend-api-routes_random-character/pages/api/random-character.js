import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    gender: chance.gender(),
    birthDate: chance.birthday(),
    favoritColor: chance.color({ format: "hex" }),
    email: chance.email(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };

  res.status(200).json(character);
}
