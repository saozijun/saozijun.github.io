import{_ as s,c as n,o as a,a as p}from"./app.44bba36b.js";const A=JSON.parse('{"title":"\u8FC7\u6EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"setup \u8BED\u6CD5\u7CD6 + typescript","slug":"setup-\u8BED\u6CD5\u7CD6-typescript","link":"#setup-\u8BED\u6CD5\u7CD6-typescript","children":[]}],"relativePath":"web/Vue/Vue3_filters.md","lastUpdated":1670478751000}'),l={name:"web/Vue/Vue3_filters.md"},e=p(`<h1 id="\u8FC7\u6EE4" tabindex="-1">\u8FC7\u6EE4 <a class="header-anchor" href="#\u8FC7\u6EE4" aria-hidden="true">#</a></h1><p>\u57283.x\u4E2D\uFF0C\u8FC7\u6EE4\u5668\u88AB\u5220\u9664\uFF0C\u4E0D\u518D\u53D7\u652F\u6301\u3002<br> \u53EF\u4EE5\u7528\u65B9\u6CD5\u8C03\u7528\u6216\u8BA1\u7B97\u5C5E\u6027\u3002</p><h2 id="setup-\u8BED\u6CD5\u7CD6-typescript" tabindex="-1">setup \u8BED\u6CD5\u7CD6 + typescript <a class="header-anchor" href="#setup-\u8BED\u6CD5\u7CD6-typescript" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> cxcgg </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- $123 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">computed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> cxc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cxcgg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> cxc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4),o=[e];function t(r,c,D,y,F,i){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
