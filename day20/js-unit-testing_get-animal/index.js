export function getAnimal(animal) {
  if (animal === "cats") {
    return `I totally love ${animal}!`;
  }
  if (animal === undefined) {
    return "I do not like animals at all!";
  }
  return `I like ${animal}!`;
}
