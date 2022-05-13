const strCutter = (str) => {
  let returnStr = "";
  for (let i = 2; i < str.length; i += 3) {
    returnStr += str[i];
  }
  return {return_string: returnStr};
};

export default strCutter;