(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"fn/S":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),m=t.n(r);t("5Yjd");e["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u4e09\u6570\u4e4b\u548c"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4e09\u6570\u4e4b\u548c"},l.a.createElement("span",{className:"icon icon-link"})),"\u4e09\u6570\u4e4b\u548c"),l.a.createElement("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5305\u542b n \u4e2a\u6574\u6570\u7684\u6570\u7ec4 \xa0",l.a.createElement("code",null,"nums"),"\uff0c\u5224\u65ad ",l.a.createElement("code",null,"nums")," \u4e2d\u662f\u5426\u5b58\u5728\u4e09\u4e2a\u5143\u7d20 a\uff0cb\uff0cc \uff0c\u4f7f\u5f97 \xa0",l.a.createElement("code",null,"a + b + c = 0"),"\uff1f\u8bf7\u4f60\u627e\u51fa\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u4e14\u4e0d\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002"),l.a.createElement("p",null,"\u6ce8\u610f\uff1a\u7b54\u6848\u4e2d\u4e0d\u53ef\u4ee5\u5305\u542b\u91cd\u590d\u7684\u4e09\u5143\u7ec4\u3002"),l.a.createElement("p",null,"\u793a\u4f8b\uff1a"),l.a.createElement(m.a,{code:"\u7ed9\u5b9a\u6570\u7ec4 nums = [-1, 0, 1, 2, -1, -4]\uff0c\n\n\u6ee1\u8db3\u8981\u6c42\u7684\u4e09\u5143\u7ec4\u96c6\u5408\u4e3a\uff1a\n[\n  [-1, 0, 1],\n  [-1, -1, 2]\n]\n",lang:"plain"}),l.a.createElement("h2",{id:"\u89e3\u9898\u601d\u8def"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u89e3\u9898\u601d\u8def"},l.a.createElement("span",{className:"icon icon-link"})),"\u89e3\u9898\u601d\u8def"),l.a.createElement("h3",{id:"\u66b4\u529b\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u66b4\u529b\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u66b4\u529b\u6cd5"),l.a.createElement(m.a,{code:"var threeSum = function(nums) {\n  let res = [];\n\n  if (nums === null || nums.length < 3) return res;\n\n  for (let i = 0; i < nums.length - 2; i++) {\n    for (let j = i + 1; j < nums.length - 1; j++) {\n      for (let k = i + 2; k < nums.length - 1; k++) {\n        if (nums[i] + nums[j] + num[k] === 0) {\n          res.push([nums[i], nums[j], nums[k]]);\n        }\n      }\n    }\n  }\n\n  return res;\n};\n",lang:"js"}),l.a.createElement("h3",{id:"\u53cc\u6307\u9488"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53cc\u6307\u9488"},l.a.createElement("span",{className:"icon icon-link"})),"\u53cc\u6307\u9488"),l.a.createElement("p",null,"\u65b9\u6cd5\uff1a\u6392\u5e8f + \u53cc\u6307\u9488"),l.a.createElement("p",null,"\u672c\u9898\u7684\u96be\u70b9\u5728\u4e8e\u5982\u4f55\u53bb\u9664\u91cd\u590d\u89e3\u3002"),l.a.createElement(m.a,{code:"var threeSum = function(nums) {\n  const res = [];\n\n  if (nums === null || nums.length < 3) return res;\n\n  // \u5bf9\u6570\u7ec4\u8fdb\u884c\u6392\u5e8f\n  nums.sort((a, b) => a - b);\n\n  // \u904d\u5386\u6392\u5e8f\u540e\u7684\u6570\u7ec4\n  for (let i = 0; i < nums.length; i++) {\n    // \u56e0\u4e3a\u5df2\u7ecf\u6392\u5e8f\u597d\uff0c\u6240\u4ee5\u540e\u9762\u4e0d\u53ef\u80fd\u6709\u4e09\u4e2a\u6570\u4e4b\u548c\u7b49\u4e8e 0\uff0c\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c\n    if (nums[i] > 0) break;\n\n    // \u5bf9\u4e8e\u91cd\u590d\u5143\u7d20\uff0c\u8df3\u8fc7\uff0c\u907f\u514d\u51fa\u73b0\u91cd\u590d\u89e3\uff08\u5f53\u524d\u503c\u4e0e\u4e0a\u4e2a\u5faa\u73af\u503c\u76f8\u7b49\uff09\n    if (i && nums[i] === nums[i - 1]) continue;\n\n    let left = i + 1;\n    let right = nums.length - 1;\n\n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n\n      if (sum === 0) {\n        // \u7b26\u5408\u4e09\u6570\u4e4b\u548c\u4e3a\u96f6\u7684\u6761\u4ef6\n        res.push([nums[i], nums[left++], nums[right--]]);\n\n        // \u5224\u65ad\u5de6\u754c\u548c\u53f3\u754c\u662f\u5426\u548c\u4e0b\u4e00\u4f4d\u7f6e\u91cd\u590d\uff0c\u53bb\u9664\u91cd\u590d\u89e3\n        // \u5e76\u540c\u65f6\u5c06\u5de6\u6307\u9488\u548c\u53f3\u6307\u9488\u79fb\u5230\u4e0b\u4e00\u4f4d\u7f6e\uff0c\u5bfb\u627e\u65b0\u7684\u89e3\n\n        // \u5411\u6570\u7ec4\u4e2d\u95f4\u9760\u62e2\uff0c\u8df3\u8fc7\u91cd\u590d\u6570\u5b57\n        while (nums[left] === nums[left - 1]) {\n          left++;\n        }\n\n        // \u5411\u6570\u7ec4\u4e2d\u95f4\u9760\u62e2\uff0c\u8df3\u8fc7\u91cd\u590d\u6570\u5b57\n        while (nums[right] === nums[right + 1]) {\n          right--;\n        }\n      } else if (sum < 0) {\n        // \u4e09\u6570\u4e4b\u548c\u5c0f\u4e8e 0\uff0c\u8bf4\u660e nums[left] \u592a\u5c0f\uff0c\u5de6\u6307\u9488\u53f3\u79fb\n        left++;\n      } else if (sum > 0) {\n        // \u4e09\u6570\u4e4b\u548c\u5927\u4e8e 0\uff0c\u8bf4\u660e nums[right] \u592a\u5927\uff0c\u53f3\u6307\u9488\u5de6\u79fb\n        right--;\n      }\n    }\n  }\n\n  return res;\n};\n",lang:"js"}),l.a.createElement("h4",{id:"\u590d\u6742\u5ea6\u5206\u6790"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u590d\u6742\u5ea6\u5206\u6790"},l.a.createElement("span",{className:"icon icon-link"})),"\u590d\u6742\u5ea6\u5206\u6790"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",l.a.createElement("code",null,"O(n^2)"),"\uff0c\u6570\u7ec4\u6392\u5e8f ",l.a.createElement("code",null,"O(nLogn)"),"\uff0c\u904d\u5386\u6570\u7ec4 ",l.a.createElement("code",null,"O(n)"),"\uff0c\u53cc\u6307\u9488\u904d\u5386 ",l.a.createElement("code",null,"O(n)"),"\uff0c\u603b\u4f53 ",l.a.createElement("code",null,"O(nLogn) + O(n) * O(n)")),l.a.createElement("li",null,"\u7a7a\u95f4\u590d\u6742\u5ea6\uff1a",l.a.createElement("code",null,"O(1)")))))}}}]);