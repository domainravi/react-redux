export default function searchByInput (input, array, property) {
  if(input !== '') {
    return array.filter(item => item[property].indexOf(input) !== -1);
  }
  else {
    return array;
  }
}