const minifyXMLString = xml => xml.replace(/\s{0,}\</gm, '<');

const extractDynamic = (targetKey, obj) => {
  return obj[
    Object.keys(obj).find(key => {
      const re = new RegExp(`.{0,}${targetKey}`, 'g');
      const match = key.match(re);
      const realKey = match ? match[0] : null;
      return realKey;
    })
  ];
};

const uglifyKey = (token, methodName, requestBody) => {
  let uglifyToken = '';
  if (token.length % 3 === 0) {
    uglifyToken =
      token.substring(0, token.length / 3) +
      '-' +
      token.substring((token.length * 2) / 3, token.length);
  } else if (token.length % 3 > 1.5) {
    uglifyToken =
      token.substring(0, token.length / 3 + 1) +
      '-' +
      token.substring((token.length * 2) / 3, token.length);
  } else {
    uglifyToken =
      token.substring(0 token.length / 3) +
      '-' +
      token.substring((token.length * 2) / 3 + 1, token.length);
  }

  return `${uglifyToken}:${methodName}:${requestBody}`;
};


const edgeCase1 = '/** some */'
const edgeCase2 = '// fafa'
const edgeCase3 = "/** some 1 */"
const edgeCase4 = "// example"
const edgeCase5 = `// teacher`
const edgeCase6 = `/** create a lot of stuf */`

module.exports = {
  extractDynamic,
  minifyXMLString,
  uglifyKey,
};
,
