import{_ as s,c as n,o as a,a as l}from"./app.44bba36b.js";const u=JSON.parse('{"title":"Vue \u7B14\u8BB0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u6307\u4EE4","slug":"\u5E38\u7528\u6307\u4EE4","link":"#\u5E38\u7528\u6307\u4EE4","children":[]},{"level":2,"title":"\u5F15\u5165\u7EC4\u4EF6","slug":"\u5F15\u5165\u7EC4\u4EF6","link":"#\u5F15\u5165\u7EC4\u4EF6","children":[]}],"relativePath":"web/Vue/Vue_Note.md","lastUpdated":1670478751000}'),e={name:"web/Vue/Vue_Note.md"},p=l(`<h1 id="vue-\u7B14\u8BB0" tabindex="-1">Vue \u7B14\u8BB0 <a class="header-anchor" href="#vue-\u7B14\u8BB0" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u662F\u4E00\u4E9B\u57FA\u7840\u96F6\u788E\u7684\u7B14\u8BB0~ Vue2\u3001Vue3\u901A\u7528\uFF01</p><h2 id="\u5E38\u7528\u6307\u4EE4" tabindex="-1">\u5E38\u7528\u6307\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a></h2><ol><li><code>v-text</code></li><li><code>v-html</code></li><li><code>v-for</code></li><li><code>v-if</code>\u3001<code>v-else-if</code>\u3001<code>v-else</code></li><li><code>v-show</code></li><li><code>v-bind</code> \u7B80\u5199<code>:</code></li><li><code>v-on</code>\u7B80\u5199<code>@</code></li><li><code>v-model</code></li><li><code>v-pre</code></li><li><code>v-once</code></li></ol><h2 id="\u5F15\u5165\u7EC4\u4EF6" tabindex="-1">\u5F15\u5165\u7EC4\u4EF6 <a class="header-anchor" href="#\u5F15\u5165\u7EC4\u4EF6" aria-hidden="true">#</a></h2><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cxc-test</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">cxc-test</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u6216</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cxcTest</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> cxcTest </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./component/cxc_test.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cxcTest</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Vue3\u7684setup\u8BED\u6CD5\u7CD6\uFF0C\u4E0D\u7528\u5728<code>component</code>\u5904\u58F0\u660E</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">cxcTest</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> cxcTest </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./component/cxc_test.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8),o=[p];function c(t,r,i,F,D,d){return a(),n("div",null,o)}const b=s(e,[["render",c]]);export{u as __pageData,b as default};
