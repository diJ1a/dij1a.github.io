import{i as a,o as n,c as t,g as l}from"./app.3ad51472.js";const c=l(`<div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u6784\u5EFA\u8FC7\u7A0B\u662F\u5728\u8282\u70B9\u73AF\u5883\u800C\u4E0D\u662F\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u7684\uFF0C\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u6CA1\u6709\u5B9A\u4E49fetch\u3002</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">vitepress\u8C03\u7528created\u94A9\u5B50\u6765\u751F\u6210\u9759\u6001html\u6587\u4EF6\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">\u5982\u679C\u53EA\u60F3\u5728\u5BA2\u6237\u7AEF\u8C03\u7528fetch\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5728mountedhook\u4E0A\u8C03\u7528\u5B83\uFF0C\u800C\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u4E0D\u4F1A\u8C03\u7528\u5B83\u3002</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,1),o=[c],_=JSON.parse('{"title":"XHR","description":"","frontmatter":{"title":"XHR"},"headers":[],"relativePath":"articles/xhr.md","lastUpdated":1663127566000}'),p={name:"articles/xhr.md"},m=Object.assign(p,{setup(r){return a(async()=>{const s=await(await fetch("https://www.powerbeijing-ec.com/bidprocurement/common-user/user/platformConfig/initPlatformConfig")).json();console.log("res.data.title",s.data.title)}),(e,s)=>(n(),t("div",null,o))}});export{_ as __pageData,m as default};