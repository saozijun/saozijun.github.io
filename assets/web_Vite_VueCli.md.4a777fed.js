import{_ as s,c as n,o as a,a as l}from"./app.44bba36b.js";const b=JSON.parse('{"title":"@Vue/cli","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5","link":"#\u5B89\u88C5","children":[]},{"level":3,"title":"\u521B\u5EFA\u9879\u76EE","slug":"\u521B\u5EFA\u9879\u76EE","link":"#\u521B\u5EFA\u9879\u76EE","children":[]},{"level":3,"title":"\u5F00\u542F\u670D\u52A1","slug":"\u5F00\u542F\u670D\u52A1","link":"#\u5F00\u542F\u670D\u52A1","children":[]},{"level":3,"title":"\u6253\u5305","slug":"\u6253\u5305","link":"#\u6253\u5305","children":[]},{"level":2,"title":"\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D","slug":"\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D","link":"#\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D","children":[]},{"level":2,"title":"\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED","slug":"\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED","link":"#\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED","children":[]}],"relativePath":"web/Vite/VueCli.md","lastUpdated":1670478751000}'),e={name:"web/Vite/VueCli.md"},p=l(`<h1 id="vue-cli" tabindex="-1">@Vue/cli <a class="header-anchor" href="#vue-cli" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">\u5173\u4E8E\u65E7\u7248\u672C</p><p>Vue CLI \u7684\u5305\u540D\u79F0\u7531 vue-cli \u6539\u6210\u4E86 @vue/cli\u3002 \u5982\u679C\u4F60\u5DF2\u7ECF\u5168\u5C40\u5B89\u88C5\u4E86\u65E7\u7248\u672C\u7684 vue-cli (1.x \u6216 2.x)\uFF0C\u4F60\u9700\u8981\u5148\u901A\u8FC7 npm uninstall vue-cli -g \u6216 yarn global remove vue-cli \u5378\u8F7D\u5B83\u3002</p></div><div class="tip custom-block"><p class="custom-block-title">Node \u7248\u672C\u8981\u6C42</p><p>Vue CLI 4.x \u9700\u8981 <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> v8.9 \u6216\u66F4\u9AD8\u7248\u672C (\u63A8\u8350 v10 \u4EE5\u4E0A)\u3002\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/tj/n" target="_blank" rel="noreferrer">n</a>\uFF0C<a href="https://github.com/creationix/nvm" target="_blank" rel="noreferrer">nvm</a> \u6216 <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows</a> \u5728\u540C\u4E00\u53F0\u7535\u8111\u4E2D\u7BA1\u7406\u591A\u4E2A Node \u7248\u672C\u3002</p></div><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install @vue/cli -g</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1">\u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">vue create </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u9879\u76EE\u540D\u5B57</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\uFF08\u9879\u76EE\u540D\u5B57\u8981\u5C0F\u5199\uFF09</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="\u5F00\u542F\u670D\u52A1" tabindex="-1">\u5F00\u542F\u670D\u52A1 <a class="header-anchor" href="#\u5F00\u542F\u670D\u52A1" aria-hidden="true">#</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm run server</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><blockquote><p>\u5F53\u7136\u53EF\u4EE5\u5728package.json \u914D\u7F6E\u6587\u4EF6\u91CC\u9762\u6539...</p></blockquote><h3 id="\u6253\u5305" tabindex="-1">\u6253\u5305 <a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm run build</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D" tabindex="-1">\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D <a class="header-anchor" href="#\u{1F3D7}\uFE0F\u3010src\u3011\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a></h2><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA jsconfig.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">paths</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">@/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">src/*</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">exclude</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED" tabindex="-1">\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED <a class="header-anchor" href="#\u{1F3D7}\uFE0Feslint\u6821\u9A8C\u529F\u80FD\u5173\u95ED" aria-hidden="true">#</a></h2><p>\u5728\u6839\u76EE\u5F55\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2Avue.config.js</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lintOnSave</span><span style="color:#89DDFF;">:</span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,18),o=[p];function r(c,t,i,d,u,D){return a(),n("div",null,o)}const h=s(e,[["render",r]]);export{b as __pageData,h as default};
