(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"50Bp":function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a);t("B2uJ"),t("+su7"),t("qOys"),t("5Yjd");l["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"b-\u6811"},n.a.createElement("a",{"aria-hidden":"true",href:"#b-\u6811"},n.a.createElement("span",{className:"icon icon-link"})),"B \u6811"),n.a.createElement("p",null,"B-\u6811\u5c31\u662f B \u6811\uff0c",n.a.createElement("code",null,"-")," \u53ea\u662f\u4e00\u4e2a\u7b26\u53f7\u3002"),n.a.createElement("p",null,"B \u6811\uff08B-Tree\uff09\u662f\u4e00\u79cd\u81ea\u5e73\u8861\u7684\u6811,\u5b83\u662f\u4e00\u79cd\u591a\u8def\u641c\u7d22\u6811\uff08\u5e76\u4e0d\u662f\u4e8c\u53c9\u7684\uff09\uff0c\u80fd\u591f\u4fdd\u8bc1\u6570\u636e\u6709\u5e8f\u3002\u540c\u65f6\u5b83\u8fd8\u4fdd\u8bc1\u4e86\u5728\u67e5\u627e\u3001\u63d2\u5165\u3001\u5220\u9664\u7b49\u64cd\u4f5c\u65f6\u6027\u80fd\u90fd\u80fd\u4fdd\u6301\u5728 ",n.a.createElement("code",null,"O(logn)"),"\uff0c\u4e3a\u5927\u5757\u6570\u636e\u7684\u8bfb\u5199\u64cd\u4f5c\u505a\u4e86\u4f18\u5316,\u540c\u65f6\u5b83\u4e5f\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u5916\u90e8\u5b58\u50a8\uff08\u652f\u6301\u5bf9\u4fdd\u5b58\u5728\u78c1\u76d8\u6216\u8005\u7f51\u7edc\u4e0a\u7684\u7b26\u53f7\u8868\u8fdb\u884c\u5916\u90e8\u67e5\u627e\uff09"),n.a.createElement("p",null,"\u7279\u70b9\uff1a"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5b9a\u4e49\u4efb\u610f\u975e\u53f6\u5b50\u7ed3\u70b9\u6700\u591a\u53ea\u6709 M \u4e2a\u513f\u5b50\uff1b\u4e14 M>2"),n.a.createElement("li",null,"\u6839\u7ed3\u70b9\u7684\u513f\u5b50\u6570\u4e3a[2, M]"),n.a.createElement("li",null,"\u9664\u6839\u7ed3\u70b9\u4ee5\u5916\u7684\u975e\u53f6\u5b50\u7ed3\u70b9\u7684\u513f\u5b50\u6570\u4e3a[M/2, M]"),n.a.createElement("li",null,"\u6bcf\u4e2a\u7ed3\u70b9\u5b58\u653e\u81f3\u5c11 M/2-1\uff08\u53d6\u4e0a\u6574\uff09\u548c\u81f3\u591a M-1 \u4e2a\u5173\u952e\u5b57\uff1b\uff08\u81f3\u5c11 2 \u4e2a\u5173\u952e\u5b57\uff09"),n.a.createElement("li",null,"\u975e\u53f6\u5b50\u7ed3\u70b9\u7684\u5173\u952e\u5b57\u4e2a\u6570=\u6307\u5411\u513f\u5b50\u7684\u6307\u9488\u4e2a\u6570-1"),n.a.createElement("li",null,"\u975e\u53f6\u5b50\u7ed3\u70b9\u7684\u5173\u952e\u5b57\uff1aK[1], K[2], \u2026, K[M-1]\uff1b\u4e14 K[i] < K[i+1]"),n.a.createElement("li",null,"\u975e\u53f6\u5b50\u7ed3\u70b9\u7684\u6307\u9488\uff1aP[1], P[2], \u2026, P[M]\uff0c\u5176\u4e2d P[1]\u6307\u5411\u5173\u952e\u5b57\u5c0f\u4e8e K[1]\u7684\u5b50\u6811\uff0cP[M]\u6307\u5411\u5173\u952e\u5b57\u5927\u4e8e K[M-1]\u7684\u5b50\u6811\uff0c\u5176\u5b83 P[i]\u6307\u5411\u5173\u952e\u5b57\u5c5e\u4e8e(K[i-1], K[i])\u7684\u5b50\u6811"),n.a.createElement("li",null,"\u6240\u6709\u53f6\u5b50\u7ed3\u70b9\u4f4d\u4e8e\u540c\u4e00\u5c42")),n.a.createElement("hr",null),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.jianshu.com/p/912357993486",target:"_blank",rel:"noopener noreferrer"},"\u5e38\u7528\u6570\u636e\u7ed3\u6784\u2014\u2014\u6811",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://my.oschina.net/u/4116286/blog/3107389",target:"_blank",rel:"noopener noreferrer"},"\u9762\u8bd5\u5b98\u95ee\u4f60 B \u6811\u548c B+\u6811\uff0c\u5c31\u628a\u8fd9\u7bc7\u6587\u7ae0\u4e22\u7ed9\u4ed6",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);