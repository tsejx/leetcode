(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"Heh/":function(e,n,t){e.exports=t.p+"static/selection-sort.0c55da12.gif"},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},aYhl:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),l=t("q1tI"),r=t.n(l),c=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(c),m=t("5Yjd"),u=t.n(m),o=r.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("Heh/")),l=function(){return n["default"].createElement("img",{alt:"\u9009\u62e9\u6392\u5e8f",src:a["default"],width:"64%",height:"64%"})};return n["default"].createElement(l)}));n["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u9009\u62e9\u6392\u5e8f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u9009\u62e9\u6392\u5e8f"},r.a.createElement("span",{className:"icon icon-link"})),"\u9009\u62e9\u6392\u5e8f"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u9009\u62e9\u6392\u5e8f"),"\uff08Selection Sort\uff09\u662f\u4e00\u4e2a\u7b80\u5355\u76f4\u89c2\u7684\u6392\u5e8f\u65b9\u6cd5\uff0c\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u5f88\u7b80\u5355\uff0c\u9996\u5148\u4ece ",r.a.createElement("strong",null,"\u672a\u6392\u5e8f\u5e8f\u5217")," \u4e2d\u627e\u5230\u6700\u5927\u7684\u5143\u7d20\uff0c\u653e\u5230\u5df2\u6392\u5e8f\u5e8f\u5217\u7684\u672b\u5c3e\uff0c\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\uff0c\u76f4\u5230\u6240\u6709\u5143\u7d20\u6392\u5e8f\u5b8c\u6bd5\u3002"),r.a.createElement("h2",{id:"\u7b97\u6cd5\u539f\u7406"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u539f\u7406"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u539f\u7406"),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5047\u8bbe\u4e3a\u6392\u5e8f\u5e8f\u5217\u7684\u7b2c\u4e00\u4e2a\u662f\u6700\u5927\u503c\uff0c\u8bb0\u4e0b\u8be5\u5143\u7d20\u7684\u4f4d\u5b50\uff0c\u4ece\u524d\u5f80\u540e\u6bd4\u8f83"),r.a.createElement("li",null,"\u82e5\u67d0\u4e2a\u5143\u7d20\u6bd4\u8be5\u5143\u7d20\u5927\uff0c\u8986\u76d6\u4e4b\u524d\u7684\u4f4d\u7f6e"),r.a.createElement("li",null,"\u91cd\u590d\u7b2c\u4e8c\u4e2a\u6b65\u9aa4\uff0c\u76f4\u5230\u627e\u5230\u4e3a\u6392\u5e8f\u7684\u672b\u5c3e"),r.a.createElement("li",null,"\u5c06\u672a\u6392\u5e8f\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u548c\u6700\u5927\u5143\u7d20\u4ea4\u6362\u4f4d\u7f6e"),r.a.createElement("li",null,"\u91cd\u590d\u524d\u9762\u51e0\u4e2a\u6b65\u9aa4\uff0c\u76f4\u5230\u6240\u6709\u5143\u7d20\u90fd\u5df2\u7ecf\u6392\u5e8f"))),r.a.createElement(u.a,Object(a["a"])({source:{jsx:'import React from \'react\';\nimport img from \'../../assets/sorting/selection-sort.gif\';\n\nexport default () => <img alt="\u9009\u62e9\u6392\u5e8f" src={img} width="64%" height="64%" />;'}},{inline:!0,dependencies:{},files:{}}),r.a.createElement(o,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u7b97\u6cd5\u5206\u6790"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u5206\u6790"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u5206\u6790"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5e73\u5747\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n^2)")),r.a.createElement("li",null,"\u6700\u4f73\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n^2)")),r.a.createElement("li",null,"\u6700\u5dee\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(n^2)")),r.a.createElement("li",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",r.a.createElement("code",null,"O(1)")),r.a.createElement("li",null,"\u6392\u5e8f\u65b9\u5f0f\uff1aIn-place"),r.a.createElement("li",null,"\u7a33\u5b9a\u6027\uff1a\u4e0d\u7a33\u5b9a")),r.a.createElement("p",null,"\u9009\u62e9\u6392\u5e8f\u7684\u4ea4\u6362\u64cd\u4f5c\u4ecb\u4e8e\u548c ",r.a.createElement("code",null,"n - 1")," \u6b21\u4e4b\u95f4\u3002\u9009\u62e9\u6392\u5e8f\u7684\u6bd4\u8f83\u64cd\u4f5c\u4e3a ",r.a.createElement("code",null,"n * (n-1) / 2")," \u6b21\u4e4b\u95f4\u3002\u9009\u62e9\u6392\u5e8f\u7684\u8d4b\u503c\u64cd\u4f5c\u4ecb\u4e8e 0 \u548c 3(n-1)\u6b21\u4e4b\u95f4\u3002"),r.a.createElement("p",null,"\u6bd4\u8f83\u6b21\u6570 ",r.a.createElement("code",null,"O(n^2)"),"\uff0c\u6bd4\u8f83\u6b21\u6570\u4e0e\u5173\u952e\u5b57\u7684\u521d\u59cb\u72b6\u6001\u65e0\u5173\uff0c\u603b\u7684\u6bd4\u8f83\u6b21\u6570 ",r.a.createElement("code",null,"N = (n-1) + (n-2) +\u2026+ 1 = n x (n-1)/2"),"\u3002\u4ea4\u6362\u6b21\u6570 ",r.a.createElement("code",null,"O(n)"),"\uff0c\u6700\u597d\u60c5\u51b5\u662f\uff0c\u5df2\u7ecf\u6709\u5e8f\uff0c\u4ea4\u6362 ",r.a.createElement("code",null,"0")," \u6b21\uff1b\u6700\u574f\u60c5\u51b5\u662f\uff0c\u9006\u5e8f\uff0c\u4ea4\u6362 ",r.a.createElement("code",null,"n - 1")," \u6b21\u3002"),r.a.createElement("h2",{id:"\u7b97\u6cd5\u5b9e\u73b0"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7b97\u6cd5\u5b9e\u73b0"},r.a.createElement("span",{className:"icon icon-link"})),"\u7b97\u6cd5\u5b9e\u73b0"),r.a.createElement(i.a,{code:"const selectionSort = function(arr) {\n  const len = arr.length;\n  // \u7528\u4e8e\u7f13\u5b58\u672a\u6392\u5e8f\u533a\u95f4\u6700\u5c0f\u503c\u7684\u7d22\u5f15\n  let minIndex;\n\n  // \u5916\u5faa\u73af\u904d\u5386\u672a\u6392\u5e8f\u90e8\u5206\u5143\u7d20\uff08\u9664\u4e86\u6700\u540e\u4e00\u4e2a\u4e0d\u7528\u904d\u5386\uff0c\u56e0\u4e3a\u662f\u4ec5\u6709\u7684\u672a\u6392\u5e8f\u5143\u7d20\uff09\n  for (let i = 0; i < len - 1; i++) {\n    // \u672a\u6392\u5e8f\u5e8f\u5217\u4e2d\u6700\u5c0f\u503c\u7684\u7d22\u5f15\n    minIndex = i;\n\n    // \u5185\u5faa\u73af\u672a\u6392\u5e8f\u533a\u95f4\uff0ci \u662f\u5de6\u8fb9\u754c\uff0clen \u662f\u53f3\u8fb9\u754c\n    for (let j = i + 1; j < len; j++) {\n      // \u5f53\u524d\u503c\u6bd4\u5f53\u524d\u6700\u5c0f\u503c\u5c0f\u65f6\uff0c\u6807\u8bc6\u5f53\u524d\u503c\u672a\u6700\u5c0f\u503c\n      if (arr[j] < arr[minIndex]) {\n        minIndex = j;\n      }\n    }\n\n    // \u5982\u679c\u7f13\u5b58\u7684\u6700\u5c0f\u503c\u975e\u672a\u6392\u5e8f\u533a\u95f4\u9996\u4e2a\u5143\u7d20\n    // \u5219\u4f7f\u7528\u89e3\u6784\u8d4b\u503c\u4ea4\u6362\u5f53\u524d\u7d22\u5f15\u7684\u503c\n    if (minIndex !== i) {\n      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];\n    }\n  }\n\n  return arr;\n};\n",lang:"js"})))}}}]);