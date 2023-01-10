import{_ as s,c as n,o as a,a as l}from"./app.44bba36b.js";const C=JSON.parse('{"title":"css\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027\u9009\u62E9\u5668","slug":"\u5C5E\u6027\u9009\u62E9\u5668","link":"#\u5C5E\u6027\u9009\u62E9\u5668","children":[]},{"level":2,"title":"\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA","slug":"\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA","link":"#\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA","children":[]},{"level":2,"title":"nth \u5143\u7D20\u9009\u62E9","slug":"nth-\u5143\u7D20\u9009\u62E9","link":"#nth-\u5143\u7D20\u9009\u62E9","children":[]},{"level":2,"title":"before && after","slug":"before-after","link":"#before-after","children":[{"level":3,"title":"\u4F7F\u7528\u4F2A\u7C7B after \u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C","slug":"\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C","link":"#\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C","children":[]},{"level":3,"title":"\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247","slug":"\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247","link":"#\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247","children":[]}]},{"level":2,"title":"CSS3\u4F2A\u7C7B\u9009\u62E9\u5668","slug":"css3\u4F2A\u7C7B\u9009\u62E9\u5668","link":"#css3\u4F2A\u7C7B\u9009\u62E9\u5668","children":[]}],"relativePath":"web/css/css_selector.md","lastUpdated":1670942336000}'),e={name:"web/css/css_selector.md"},p=l(`<h1 id="css\u9009\u62E9\u5668" tabindex="-1">css\u9009\u62E9\u5668 <a class="header-anchor" href="#css\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><h2 id="\u5C5E\u6027\u9009\u62E9\u5668" tabindex="-1">\u5C5E\u6027\u9009\u62E9\u5668 <a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#C3E88D;">cxc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  //a\u6807\u7B7E\u91CC \u7C7B\u5C5E\u6027 \u5F00\u5934\u5E26\u6709cxc</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">herf</span><span style="color:#89DDFF;">$=</span><span style="color:#C3E88D;">cxc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">   //a\u6807\u7B7E\u91CC herf\u5C5E\u6027 \u7ED3\u5C3E\u6709cxc</span></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">*=</span><span style="color:#C3E88D;">cxc</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">  //a\u6807\u7B7E\u91CC title\u5C5E\u6027 \u5305\u542B\u4E86cxc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">^=</span><span style="color:#C3E88D;">cxc</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA" tabindex="-1">\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA <a class="header-anchor" href="#\u9632\u6B62\u5355\u884C\u6587\u5B57\u6EA2\u51FA" aria-hidden="true">#</a></h2><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">text</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">hidden</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="nth-\u5143\u7D20\u9009\u62E9" tabindex="-1">nth \u5143\u7D20\u9009\u62E9 <a class="header-anchor" href="#nth-\u5143\u7D20\u9009\u62E9" aria-hidden="true">#</a></h2><ul><li>div:nth-child(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u5176\u7236\u5143\u7D20\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\uFF1B</li><li>div:nth-last-child(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u5176\u5143\u7D20\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20\uFF0C\u4ECE\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u5F00\u59CB\u8BA1\u6570\uFF1B</li><li>div:nth-of-type(n) \u9009\u62E9\u5668\u5339\u914D\u5C5E\u4E8E\u7236\u5143\u7D20\u7684\u7279\u5B9A\u7C7B\u578B\u7684\u7B2C N \u4E2A\u5B50\u5143\u7D20\u7684\u6BCF\u4E2A\u5143\u7D20</li></ul><h2 id="before-after" tabindex="-1">before &amp;&amp; after <a class="header-anchor" href="#before-after" aria-hidden="true">#</a></h2><ul><li>div:before\uFF1A\u5143\u7D20\u7684\u5185\u5BB9\u4E4B\u524D\u63D2\u5165\u65B0\u5185\u5BB9\u3002</li><li>div:after\uFF1A\u5143\u7D20\u7684\u5185\u5BB9\u4E4B\u540E\u63D2\u5165\u65B0\u5185\u5BB9\u3002</li></ul><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u5185\u5BB9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C" tabindex="-1">\u4F7F\u7528\u4F2A\u7C7B after \u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C <a class="header-anchor" href="#\u4F7F\u7528\u4F2A\u7C7B-after-\u6E05\u9664\u5143\u7D20\u5185\u90E8\u6D6E\u52A8\u6548\u679C" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">item</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247" tabindex="-1">\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247 <a class="header-anchor" href="#\u5728\u5143\u7D20\u5185\u5BB9\u5F00\u59CB\u524D\u63D2\u5165\u56FE\u7247" aria-hidden="true">#</a></h3><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">div</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">12px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">img.jpg</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> center  no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cover</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="css3\u4F2A\u7C7B\u9009\u62E9\u5668" tabindex="-1">CSS3\u4F2A\u7C7B\u9009\u62E9\u5668 <a class="header-anchor" href="#css3\u4F2A\u7C7B\u9009\u62E9\u5668" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">\u4F2A\u7C7B\u9009\u62E9\u5668</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">a:root</td><td style="text-align:center;">\u4F2A\u7C7B\u9009\u62E9\u5668 \u7B49\u540C\u4E8E\u9009\u62E9html</td></tr><tr><td style="text-align:center;">a:not</td><td style="text-align:center;">\u5426\u5B9A\u9009\u62E9\u5668 \u5C31\u662F\u4E0D\u9009\u62E9\u8FD9\u4E2A</td></tr><tr><td style="text-align:center;">a:empty</td><td style="text-align:center;">\u9009\u62E9\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u7684\u5BB9\u5668</td></tr><tr><td style="text-align:center;">a:target</td><td style="text-align:center;">\u76EE\u6807\u9009\u62E9\u5668 \u7528\u6765\u5339\u914D\u9875\u9762url\u7684\u67D0\u4E2A\u6807\u5FD7\u7B26\u7684\u76EE\u6807\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:first-child</td><td style="text-align:center;">\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:last-child</td><td style="text-align:center;">\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:nth-child(n)</td><td style="text-align:center;">n=odd\u6216\u8005even,\u4E5F\u53EF\u4EE5\u662F\u6570\u5B57</td></tr><tr><td style="text-align:center;">a:nth-last-child(n)</td><td style="text-align:center;">\u4ECE\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u5F00\u59CB\u8BA1\u7B97</td></tr><tr><td style="text-align:center;">a:first-of-type</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:last-of-type</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:nth-of-type(n)</td><td style="text-align:center;">\u6307\u5B9A</td></tr><tr><td style="text-align:center;">a:nth-last-of-type(n)</td><td style="text-align:center;">[...]</td></tr><tr><td style="text-align:center;">a:only-child</td><td style="text-align:center;">\u9009\u7684\u8FD9\u4E2A\u5143\u7D20\u4ED6 \u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u5B50\u5143\u7D20</td></tr><tr><td style="text-align:center;">a:only-of-type</td><td style="text-align:center;">\u9009\u62E9\u8FD9\u4E2A\u5143\u7D20\u4E0B \u4ED6\u7684\u552F\u4E00\u7C7B\u578B\u7684\u5B50\u5143\u7D20</td></tr></tbody></table>`,17),t=[p];function o(r,c,i,y,D,d){return a(),n("div",null,t)}const b=s(e,[["render",o]]);export{C as __pageData,b as default};
