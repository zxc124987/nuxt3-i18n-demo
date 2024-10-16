import xss from "xss";

const whiteList = () => {
  const whiteListMap = { ...xss.whiteList };
  Object.keys(whiteListMap).forEach((keyName) => {
    // 把全部的標籤 attr 變成只剩下 style 可用
    whiteListMap[keyName] = ["style"];
  });
  return whiteListMap;
};

export const xssParse = (str) => {
  return xss(str, {
    whiteList: whiteList(),
    stripIgnoreTag: true,
    stripIgnoreTagBody: ["script"], // script 全面禁止
  });
};
