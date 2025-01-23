const findKey = (obj, callback) => {
  const objKeys = Object.keys(obj);

  for (const key of objKeys) {
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;