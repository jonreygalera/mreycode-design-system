
const stringJSON = (data, key = null, defaultValue = '') => {
  if(typeof data !== 'string') throw 'stringJSON: data must be a type of string';
  const parsedData = JSON.parse(data);
  return key ? (parsedData[key] ?? defaultValue) : parsedData;
}

export default stringJSON;