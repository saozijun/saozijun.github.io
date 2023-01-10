import{_ as s,c as n,o as a,a as l}from"./app.44bba36b.js";const d=JSON.parse('{"title":"TypeScript \u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u{1F615} \u7B80\u4ECB\uFF1A","slug":"\u{1F615}-\u7B80\u4ECB","link":"#\u{1F615}-\u7B80\u4ECB","children":[]},{"level":2,"title":"\u5B89\u88C5\uFF1A","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[{"level":3,"title":"\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF1A","slug":"\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F","link":"#\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F","children":[]},{"level":3,"title":"\u628ATS\u7F16\u8BD1\u6210JS\uFF1A","slug":"\u628Ats\u7F16\u8BD1\u6210js","link":"#\u628Ats\u7F16\u8BD1\u6210js","children":[]},{"level":3,"title":"\u6267\u884Cjs\u6587\u4EF6\uFF1A","slug":"\u6267\u884Cjs\u6587\u4EF6","link":"#\u6267\u884Cjs\u6587\u4EF6","children":[]}]},{"level":2,"title":"\u58F0\u660E\u53D8\u91CF\uFF1A","slug":"\u58F0\u660E\u53D8\u91CF","link":"#\u58F0\u660E\u53D8\u91CF","children":[]},{"level":2,"title":"\u6570\u636E\u7C7B\u578B\uFF1A","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[{"level":3,"title":"\u9AD8\u7EA7\u7C7B\u578B\uFF1A","slug":"\u9AD8\u7EA7\u7C7B\u578B","link":"#\u9AD8\u7EA7\u7C7B\u578B","children":[]}]},{"level":2,"title":"as\uFF1A","slug":"as","link":"#as","children":[]},{"level":2,"title":"Interface\u63A5\u53E3\uFF1A","slug":"interface\u63A5\u53E3","link":"#interface\u63A5\u53E3","children":[]},{"level":2,"title":"class \u7C7B\uFF1A","slug":"class-\u7C7B","link":"#class-\u7C7B","children":[]},{"level":2,"title":"Access Modifier \u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1A","slug":"access-modifier-\u8BBF\u95EE\u4FEE\u9970\u7B26","link":"#access-modifier-\u8BBF\u95EE\u4FEE\u9970\u7B26","children":[]},{"level":2,"title":"Module\u6A21\u5757\uFF1A","slug":"module\u6A21\u5757","link":"#module\u6A21\u5757","children":[]},{"level":2,"title":"Generics \u6CDB\u578B\uFF1A","slug":"generics-\u6CDB\u578B","link":"#generics-\u6CDB\u578B","children":[]}],"relativePath":"web/TypeScript/TS_Note.md","lastUpdated":1670478751000}'),p={name:"web/TypeScript/TS_Note.md"},e=l(`<h1 id="typescript-\u7B14\u8BB0" tabindex="-1">TypeScript \u7B14\u8BB0 <a class="header-anchor" href="#typescript-\u7B14\u8BB0" aria-hidden="true">#</a></h1><h2 id="\u{1F615}-\u7B80\u4ECB" tabindex="-1">\u{1F615} \u7B80\u4ECB\uFF1A <a class="header-anchor" href="#\u{1F615}-\u7B80\u4ECB" aria-hidden="true">#</a></h2><p>TypeScript\u662FJavaScropt\u7684\u8D85\u96C6\uFF0C\u6240\u6709\u8FD0\u884C\u5728 JS\u7684\u4EE3\u7801\u90FD\u53EF\u4EE5\u4EE5TS\u8FD0\u884C\u3002</p><ol><li>TypeScript\u53EF\u4EE5\u5F88\u597D\u7684\u89C4\u8303\u4EE3\u7801</li><li>\u6709\u6548\u89C4\u907F\u5F00\u53D1\u65F6\u671F\u7684\u4F4E\u7EA7\u9519\u8BEF</li><li>\u6BD4JS\u66F4\u65E9\u517C\u5BB9ES6/7/8</li></ol><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5\uFF1A <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li>\u5148\u5B89\u88C5node.js</li></ol><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g typescropt</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F" tabindex="-1">\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF1A <a class="header-anchor" href="#\u68C0\u67E5\u5B89\u88C5\u662F\u5426\u6210\u529F" aria-hidden="true">#</a></h3><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tsc </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">v</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u628Ats\u7F16\u8BD1\u6210js" tabindex="-1">\u628ATS\u7F16\u8BD1\u6210JS\uFF1A <a class="header-anchor" href="#\u628Ats\u7F16\u8BD1\u6210js" aria-hidden="true">#</a></h3><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">tsc \u6587\u4EF6\u540D.ts</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u6267\u884Cjs\u6587\u4EF6" tabindex="-1">\u6267\u884Cjs\u6587\u4EF6\uFF1A <a class="header-anchor" href="#\u6267\u884Cjs\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">node \u6587\u4EF6\u540D.js</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u58F0\u660E\u53D8\u91CF" tabindex="-1">\u58F0\u660E\u53D8\u91CF\uFF1A <a class="header-anchor" href="#\u58F0\u660E\u53D8\u91CF" aria-hidden="true">#</a></h2><ol><li>\u4E0D\u8981\u4F7F\u7528<strong>var</strong>\u58F0\u660E\u53D8\u91CF\uFF08\u6709\u4F5C\u7528\u57DF\u95EE\u9898\uFF09</li><li>\u4F7F\u7528<strong>let</strong>\u58F0\u660E\u53D8\u91CF</li><li>\u4F7F\u7528<strong>const</strong>\u58F0\u660E\u5E38\u91CF</li></ol><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B\uFF1A <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><ol><li><strong>boolean\u5E03\u5C14</strong></li><li><strong>string\u5B57\u7B26\u4E32</strong></li><li><strong>number\u6570\u5B57</strong></li><li><strong>array\u6570\u7EC4</strong><ol><li><strong>number\uFF3B\uFF3D</strong></li><li><strong>any\uFF3B\uFF3D</strong></li></ol></li><li>tuple\u5143\u7EC4\uFF08\u56FA\u5B9A\u957F\u5EA6\u3001\u56FA\u5B9A\u7C7B\u578B\u7684\u6570\u7EC4\uFF09 <ol><li>\uFF3Bnumber\uFF0Cstring\uFF3D\uFF08\u7B2C\u4E00\u4F4D\u5FC5\u987B\u662Fnumber\uFF0C\u7B2C\u4E8C\u4F4D\u5FC5\u987B\u662Fstring\uFF0C\u5E76\u4E14\u53EA\u6709\u8FD9\u4E24\u4F4D\uFF09</li></ol></li><li><strong>null</strong></li><li><strong>object\u5BF9\u8C61</strong></li><li>enum\u679A\u4E3E\u7C7B\u578B <ol><li>enum cxc\uFF5Bred blue\uFF5D\uFF08red\u662F0\uFF0Cblue\u662F1\uFF09</li><li>enum cxc \uFF5Bred=&quot;Red&quot; blue=&quot;3&quot;}</li></ol></li><li>void\uFF08\u6CA1\u6709\u8FD4\u56DE\u503C\u5C31\u7528void\uFF09</li><li><strong>undefined \uFF08\u6709\u8FD9\u4E2A\u4E1C\u897F\uFF0C\u4F46\u662F\u672A\u5B9A\u4E49\uFF09</strong></li><li>never</li><li><strong>any\u4EFB\u610F\u7C7B\u578B</strong></li></ol><h3 id="\u9AD8\u7EA7\u7C7B\u578B" tabindex="-1">\u9AD8\u7EA7\u7C7B\u578B\uFF1A <a class="header-anchor" href="#\u9AD8\u7EA7\u7C7B\u578B" aria-hidden="true">#</a></h3><ol><li>union\u7EC4\u5408\u7C7B\u578B\uFF08\u5B9A\u4E49\u591A\u79CD\u7C7B\u578B\u60C5\u51B5\uFF09</li></ol><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> nuion </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> \uFF5C</span><span style="color:#FFCB6B;">number</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="2"><li>Nullable\u53EF\u7A7A\u7C7B\u578B</li><li>Literal\u9884\u5B9A\u4E49\u7C7B\u578B\uFF08\u4E8B\u5148\u4E4B\u524D\u5B83\u5C06\u6765\u4F1A\u662F\u54EA\u51E0\u79CD\u53D8\u91CF\uFF09</li></ol><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> literal</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="as" tabindex="-1">as\uFF1A <a class="header-anchor" href="#as" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> cxc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> xg </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> \uFF08cxc </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="interface\u63A5\u53E3" tabindex="-1">Interface\u63A5\u53E3\uFF1A <a class="header-anchor" href="#interface\u63A5\u53E3" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> cxc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">lala</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Point</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lala</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="class-\u7C7B" tabindex="-1">class \u7C7B\uFF1A <a class="header-anchor" href="#class-\u7C7B" aria-hidden="true">#</a></h2><ol><li>\u516C\u6709\u5C5E\u6027</li><li>\u79C1\u6709\u5C5E\u6027</li><li>\u4F20\u53C2</li><li>\u65B9\u6CD5</li><li>\u79C1\u6709\u65B9\u6CD5</li><li>\u5C01\u88C5</li><li>\u7EE7\u627F</li><li>\u591A\u6001</li></ol><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IPoint</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">drawPoint</span><span style="color:#89DDFF;">:()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getDistances</span><span style="color:#89DDFF;">:(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">IPoint</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Ipoint</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">?:</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">drawPoint</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">log(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,this.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,this.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">getDistances</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">IPoint</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pow(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#F07178;">pow(</span><span style="color:#A6ACCD;">p</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> point </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Point</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;">//\u5BF9\u8C61object,\u5B9E\u4F8Binstance</span></span>
<span class="line"><span style="color:#A6ACCD;">point</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">drawPoint</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="access-modifier-\u8BBF\u95EE\u4FEE\u9970\u7B26" tabindex="-1">Access Modifier \u8BBF\u95EE\u4FEE\u9970\u7B26\uFF1A <a class="header-anchor" href="#access-modifier-\u8BBF\u95EE\u4FEE\u9970\u7B26" aria-hidden="true">#</a></h2><ol><li>public \u516C\u5F00</li><li>private \u79C1\u6709</li><li>protected</li></ol><h2 id="module\u6A21\u5757" tabindex="-1">Module\u6A21\u5757\uFF1A <a class="header-anchor" href="#module\u6A21\u5757" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//\u5F15\u5165 \u6A21\u5757</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Point</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./point</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="generics-\u6CDB\u578B" tabindex="-1">Generics \u6CDB\u578B\uFF1A <a class="header-anchor" href="#generics-\u6CDB\u578B" aria-hidden="true">#</a></h2><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> list2</span><span style="color:#89DDFF;">:</span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,35),o=[e];function r(c,t,i,y,D,F){return a(),n("div",null,o)}const A=s(p,[["render",r]]);export{d as __pageData,A as default};
