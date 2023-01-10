import{_ as s,c as n,o as l,a as e}from"./app.44bba36b.js";const y=JSON.parse('{"title":"JS \u4E8B\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F5B1}\uFE0F \u9F20\u6807\u4E8B\u4EF6","slug":"\u{1F5B1}\uFE0F-\u9F20\u6807\u4E8B\u4EF6","link":"#\u{1F5B1}\uFE0F-\u9F20\u6807\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u{1F446} \u89E6\u6478\u4E8B\u4EF6","slug":"\u{1F446}-\u89E6\u6478\u4E8B\u4EF6","link":"#\u{1F446}-\u89E6\u6478\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u2328\uFE0F \u952E\u76D8\u4E8B\u4EF6","slug":"\u2328\uFE0F-\u952E\u76D8\u4E8B\u4EF6","link":"#\u2328\uFE0F-\u952E\u76D8\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u{1F418} \u6846\u67B6/\u5BF9\u8C61\u4E8B\u4EF6","slug":"\u{1F418}-\u6846\u67B6-\u5BF9\u8C61\u4E8B\u4EF6","link":"#\u{1F418}-\u6846\u67B6-\u5BF9\u8C61\u4E8B\u4EF6","children":[]},{"level":2,"title":"\u{1F4C4} \u8868\u5355\\\\\u6587\u672C \u4E8B\u4EF6","slug":"\u{1F4C4}-\u8868\u5355-\u6587\u672C-\u4E8B\u4EF6","link":"#\u{1F4C4}-\u8868\u5355-\u6587\u672C-\u4E8B\u4EF6","children":[]}],"relativePath":"web/JavaScript/JS_events.md","lastUpdated":1670478751000}'),o={name:"web/JavaScript/JS_events.md"},a=e(`<h1 id="js-\u4E8B\u4EF6" tabindex="-1">JS \u4E8B\u4EF6 <a class="header-anchor" href="#js-\u4E8B\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u{1F5B1}\uFE0F-\u9F20\u6807\u4E8B\u4EF6" tabindex="-1">\u{1F5B1}\uFE0F \u9F20\u6807\u4E8B\u4EF6 <a class="header-anchor" href="#\u{1F5B1}\uFE0F-\u9F20\u6807\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><code>onclick()</code> \u9F20\u6807\u70B9\u51FB</li><li><code>ondblclick()</code> \u9F20\u6807\u53CC\u51FB</li><li><code>onmousedown()</code> \u9F20\u6807\u88AB\u6309\u4E0B</li><li><code>onmouseup()</code> \u9F20\u6807\u6309\u4E0B\u540E\u7684\u677E\u5F00</li><li><code>oncontextmenu()</code> \u9F20\u6807\u53F3\u952E\u6253\u5F00\u4E0A\u4E0B\u6587\u83DC\u5355\u65F6\u89E6\u53D1</li><li><code>oncontextmenu=&quot;return false&quot;</code> \u5C4F\u853D\u53F3\u952E\u83DC\u5355</li><li><code>onmouseenter()</code> \u9F20\u6807\u79FB\u5230: \u4E0D\u652F\u6301\u5192\u6CE1</li><li><code>onmouseover()</code> \u9F20\u6807\u79FB\u5230:\u5F71\u54CD\u5B50\u5143\u7D20</li><li><code>onmouseleave()</code> \u9F20\u6807\u79FB\u5F00: \u4E0D\u652F\u6301\u5192\u6CE1</li><li><code>onmouseout()</code> \u9F20\u6807\u79FB\u5F00:\u5F71\u54CD\u5B50\u5143\u7D20</li><li><code>onmousemove()</code> \u9F20\u6807\u88AB\u79FB\u52A8</li></ul><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- \u5728html\u4E2D\u4F7F\u7528 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onclick</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">cxc</span><span style="color:#C3E88D;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u70B9\u51FB\u6211</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">&lt;!-- \u5728js\u4E2D\u4F7F\u7528 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u70B9\u6211\u9E2D\uFF01</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onclick</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">btn</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6211\u70B9\u51FB\u4E86\uFF01</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">&lt;!-- \u5728vue\u4E2D\u4F7F\u7528 \u7528@ --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#82AAFF;">cxc</span><span style="color:#89DDFF;">()</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u70B9\u51FB\u6211</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u{1F446}-\u89E6\u6478\u4E8B\u4EF6" tabindex="-1">\u{1F446} \u89E6\u6478\u4E8B\u4EF6 <a class="header-anchor" href="#\u{1F446}-\u89E6\u6478\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><code>touchstart</code> \u624B\u6307\u3010\u89E6\u6478\u3011\u5230\u4E00\u4E2ADOM\u5143\u7D20\u65F6\u89E6\u53D1</li><li><code>touchmove</code> \u624B\u6307\u5728\u4E00\u4E2ADOM\u5143\u7D20\u3010\u6ED1\u52A8\u3011\u65F6\u89E6\u53D1</li><li><code>touchend</code> \u624B\u6307\u4ECE\u4E00\u4E2ADOM\u5143\u7D20\u3010\u79FB\u5F00\u3011\u65F6\u89E6\u53D1</li><li><code>touches</code> \u6B63\u5728\u89E6\u6478\u5C4F\u5E55\u7684\u6240\u6709\u624B\u6307\u7684\u4E00\u4E2A\u5217\u8868</li><li><code>targetTouches</code> \u6B63\u5728\u89E6\u6478\u3010\u5F53\u524DDOM\u5143\u7D20\u3011\u4E0A\u7684\u624B\u6307\u7684\u4E00\u4E2A\u5217\u8868</li><li><code>changedTouches</code> \u624B\u6307\u72B6\u6001\u53D1\u751F\u4E86\u6539\u53D8\u7684\u5217\u8868\uFF0C\u4ECE\u65E0\u5230\u53C8\uFF0C\u4ECE\u6709\u5230\u65E0</li></ul><h2 id="\u2328\uFE0F-\u952E\u76D8\u4E8B\u4EF6" tabindex="-1">\u2328\uFE0F \u952E\u76D8\u4E8B\u4EF6 <a class="header-anchor" href="#\u2328\uFE0F-\u952E\u76D8\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><code>onkeydown()</code> \u952E\u76D8\u6309\u4E0B</li><li><code>onkeypress()</code> \u952E\u76D8\u6309\u4E0B\u5E76\u4E14\u677E\u5F00</li><li><code>onkeyup()</code> \xA0 \xA0 \u952E\u76D8\u677E\u5F00</li></ul><h2 id="\u{1F418}-\u6846\u67B6-\u5BF9\u8C61\u4E8B\u4EF6" tabindex="-1">\u{1F418} \u6846\u67B6/\u5BF9\u8C61\u4E8B\u4EF6 <a class="header-anchor" href="#\u{1F418}-\u6846\u67B6-\u5BF9\u8C61\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><code>onabort</code> \u56FE\u50CF\u7684\u52A0\u8F7D\u88AB\u4E2D\u65AD</li><li><code>onbeforeunload</code> \u5373\u5C06\u79BB\u5F00\u9875\u9762(\u5237\u65B0\u6216\u5173\u95ED)\u65F6\u89E6\u53D1</li><li><code>onerror</code> \u52A0\u8F7D\u6587\u6863\u6216\u56FE\u50CF\u65F6\u53D1\u751F\u9519\u8BEF</li><li><code>onhashchange</code> \u8BE5\u4E8B\u4EF6\u5728\u5F53\u524D URL \u7684\u951A\u90E8\u5206\u53D1\u751F\u4FEE\u6539\u65F6\u89E6\u53D1\u3002</li><li><code>onload</code> \u6D4F\u89C8\u5668\u5DF2\u5B8C\u6210\u9875\u9762\u52A0\u8F7D:</li><li><code>onpageshow</code> \u8BE5\u4E8B\u4EF6\u5728\u7528\u6237\u8BBF\u95EE\u9875\u9762\u65F6\u89E6\u53D1</li><li><code>onpagehide</code> \u8BE5\u4E8B\u4EF6\u5728\u7528\u6237\u79BB\u5F00\u5F53\u524D\u7F51\u9875\u8DF3\u8F6C\u5230\u53E6\u5916\u4E00\u4E2A\u9875\u9762\u65F6\u89E6\u53D1</li><li><code>onresize</code> \u7A97\u53E3\u6216\u6846\u67B6\u88AB\u91CD\u65B0\u8C03\u6574\u5927\u5C0F\u3002</li><li><code>onscroll</code> \u5F53\u6587\u6863\u88AB\u6EDA\u52A8\u65F6\u53D1\u751F\u7684\u4E8B\u4EF6\u3002</li><li><code>onunload</code> \u7528\u6237\u9000\u51FA\u9875\u9762\u3002 ( <code>&lt;body&gt;</code> \u548C <code>&lt;frameset&gt;</code>)</li></ul><h2 id="\u{1F4C4}-\u8868\u5355-\u6587\u672C-\u4E8B\u4EF6" tabindex="-1">\u{1F4C4} \u8868\u5355\\\u6587\u672C \u4E8B\u4EF6 <a class="header-anchor" href="#\u{1F4C4}-\u8868\u5355-\u6587\u672C-\u4E8B\u4EF6" aria-hidden="true">#</a></h2><ul><li><code>onchange</code> \u6539\u53D8</li><li><code>onfocus</code> \u805A\u7126:(\u4E0D\u652F\u6301\u5192\u6CE1)</li><li><code>onfocusin</code> \u805A\u7126:(\u5F71\u54CD\u5B50\u5143\u7D20)</li><li><code>onblur</code> \u5931\u7126:(\u4E0D\u652F\u6301\u5192\u6CE1)</li><li><code>onfocusout</code> \u5931\u7126:(\u5F71\u54CD\u5B50\u5143\u7D20)</li><li><code>oninput</code> \u6709\u8F93\u5165\u65F6</li><li><code>onreset</code> \u8868\u5355\u91CD\u7F6E\u65F6</li><li><code>onsearch</code> \u7528\u6237\u5411\u641C\u7D22\u57DF\u8F93\u5165\u6587\u672C\u65F6\u89E6\u53D1(<code>&lt;input=&quot;search&quot;&gt;</code>)</li><li><code>onselect</code> \u7528\u6237\u9009\u53D6\u6587\u672C\u65F6\u89E6\u53D1(<code>&lt;input&gt;</code>\u548C<code>&lt;textarea&gt;</code>)</li><li><code>onsubmit</code> \u8868\u5355\u63D0\u4EA4\u65F6\u89E6\u53D1</li></ul>`,14),c=[a];function p(t,r,i,d,F,D){return l(),n("div",null,c)}const h=s(o,[["render",p]]);export{y as __pageData,h as default};
