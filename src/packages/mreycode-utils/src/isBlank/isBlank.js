
const isBlank = (value) => {
  return value === null || value === undefined || value === '' || /^\s*$/.test(value);
};

export default isBlank;