import{_ as s,c as a,o as n,a as e}from"./app.dd45262e.js";const l="/assets/111.5b5dce9f.png",o="/assets/222.6d346e7a.png",p="/assets/333.b2528152.png",t="/assets/444.d059db5b.png",r="/assets/555.067bb428.png",c="/assets/666.4a6b5343.png",i="/assets/777.753aaa44.png",D="/assets/888.1dd82500.png",g=JSON.parse('{"title":"\u{1F4E6} VitePress\u90E8\u7F72 \u9047\u5230\u7684\u95EE\u9898 \u548C \u89E3\u51B3\u65B9\u6848\u{1F4E6}","description":"","frontmatter":{},"headers":[{"level":2,"title":"dev\u672C\u5730\u6CA1\u95EE\u9898 \u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86  window is not defined","slug":"dev\u672C\u5730\u6CA1\u95EE\u9898-\u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86-window-is-not-defined","link":"#dev\u672C\u5730\u6CA1\u95EE\u9898-\u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86-window-is-not-defined","children":[]},{"level":2,"title":"vitepress\u7684\u4E00\u4E9B\u63D2\u69FD","slug":"vitepress\u7684\u4E00\u4E9B\u63D2\u69FD","link":"#vitepress\u7684\u4E00\u4E9B\u63D2\u69FD","children":[{"level":3,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":3,"title":"nav-bar-title-before","slug":"nav-bar-title-before","link":"#nav-bar-title-before","children":[]},{"level":3,"title":"nav-bar-content-before","slug":"nav-bar-content-before","link":"#nav-bar-content-before","children":[]},{"level":3,"title":"sidebar-nav-before","slug":"sidebar-nav-before","link":"#sidebar-nav-before","children":[]},{"level":3,"title":"home-hero-before","slug":"home-hero-before","link":"#home-hero-before","children":[]},{"level":3,"title":"home-features-before","slug":"home-features-before","link":"#home-features-before","children":[]},{"level":3,"title":"doc-footer-before","slug":"doc-footer-before","link":"#doc-footer-before","children":[]},{"level":3,"title":"aside-top","slug":"aside-top","link":"#aside-top","children":[]},{"level":3,"title":"layout-bottom","slug":"layout-bottom","link":"#layout-bottom","children":[]}]}],"relativePath":"vite/vitepress.md","lastUpdated":null}'),y={name:"vite/vitepress.md"},d=e(`<h1 id="\u{1F4E6}-vitepress\u90E8\u7F72-\u9047\u5230\u7684\u95EE\u9898-\u548C-\u89E3\u51B3\u65B9\u6848\u{1F4E6}" tabindex="-1">\u{1F4E6} VitePress\u90E8\u7F72 \u9047\u5230\u7684\u95EE\u9898 \u548C \u89E3\u51B3\u65B9\u6848\u{1F4E6} <a class="header-anchor" href="#\u{1F4E6}-vitepress\u90E8\u7F72-\u9047\u5230\u7684\u95EE\u9898-\u548C-\u89E3\u51B3\u65B9\u6848\u{1F4E6}" aria-hidden="true">#</a></h1><h2 id="dev\u672C\u5730\u6CA1\u95EE\u9898-\u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86-window-is-not-defined" tabindex="-1">dev\u672C\u5730\u6CA1\u95EE\u9898 \u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86 window is not defined <a class="header-anchor" href="#dev\u672C\u5730\u6CA1\u95EE\u9898-\u6253\u5305\u7684\u65F6\u5019\u51FA\u73B0\u4E86-window-is-not-defined" aria-hidden="true">#</a></h2><p>\u539F\u56E0\uFF1A</p><ul><li>\u5728\u5199\u4E00\u4E2A\u97F3\u4E50\u7EC4\u4EF6\u7684\u65F6\u5019 \u5F15\u5165\u4E86\u7B2C\u4E09\u65B9\u5E93APlayer \u56E0\u4E3A\u7B2C\u4E09\u65B9\u5E93\u4F7F\u7528\u4E86window\u5BF9\u8C61</li></ul><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><ul><li>\u672C\u5730\u6CA1\u95EE\u9898\u662F\u56E0\u4E3A\u672C\u5730server\u6A21\u5F0F \u6253\u5305\u662Fssr\u6A21\u5F0F ssr\u6E32\u67D3\u91CC\u6CA1\u6709window\u5BF9\u8C61</li><li>\u53EA\u9700\u5728\u4F7F\u7528\u8BE5\u5E93\u7684\u7EC4\u4EF6\u91CC\u7684onMounted\u5224\u65AD\u5F53\u524D\u7684\u662F\u5426\u5728\u6D4F\u89C8\u5668\u91CC true\u7684\u65F6\u5019\u518D\u5F15\u5165\u8D4B\u503C</li></ul><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">inBrowser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">//\u9875\u9762\u52A0\u8F7D\u65F6</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">onMounted</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">APlayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">inBrowser</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">aplayerTemp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">aplayer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">APlayer</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">aplayerTemp</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">default</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li></li></ul><p>\u8FD9\u6837\u53EF\u4EE5\u6253\u5305\u51FA\u6765 \u529F\u80FD\u6548\u679C\u4E5Fok \u4F46\u662F\u6253\u5305\u7684\u65F6\u5019\u8FD8\u662F\u4F1A\u51FA\u73B0\u4E00\u5806\u7684<code>window is not defined</code> \u8FD8\u9700\u8981\u518D\u7528vitepress\u81EA\u5E26\u7684\u5168\u5C40\u7EC4\u4EF6<code>ClientOnly</code>\u5305\u88F9\u5728\u91CC\u9762 \u8FD9\u6837\u5C31\u5B8C\u7F8E\u6253\u5305\u5566~</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Layout </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> DefaultTheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">layout-bottom</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ClientOnly</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Music</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">ClientOnly</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="vitepress\u7684\u4E00\u4E9B\u63D2\u69FD" tabindex="-1">vitepress\u7684\u4E00\u4E9B\u63D2\u69FD <a class="header-anchor" href="#vitepress\u7684\u4E00\u4E9B\u63D2\u69FD" aria-hidden="true">#</a></h2><h3 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h3><p><code>nav-bar-title-before </code> - <code>nav-bar-title-after </code><br><code>nav-bar-content-before</code> - <code>nav-bar-content-after</code><br><code>sidebar-nav-before</code> - <code>sidebar-nav-after</code><br><code>home-hero-before</code> - <code>home-hero-after</code><br><code>home-features-before</code> - <code>home-features-after</code><br><code>doc-footer-before</code><br><code>doc-before</code> - <code>doc-after</code><br><code>aside-top</code> - <code>aside-bottom</code><br><code>aside-outline-before</code> - <code>aside-outline-after</code><br><code>aside-ads-before</code> - <code>aside-ads-after</code><br><code>layout-bottom</code></p><ul><li>\u6211\u53BB \u8FD8\u633A\u591A\u7684\u{1F632} \u987E\u540D\u601D\u4E49after\u5C31\u662F\u5728\u7684\u540E\u9762\u5566~ \u540E\u9762\u53EA\u5C55\u793Abefore</li></ul><p>\u4F7F\u7528\uFF1A</p><div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> DefaultTheme </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress/theme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> Layout </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> DefaultTheme</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;"> #</span><span style="color:#C792EA;">nav-bar-title-before</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u54C8\u55BD~ </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Layout</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="nav-bar-title-before" tabindex="-1">nav-bar-title-before <a class="header-anchor" href="#nav-bar-title-before" aria-hidden="true">#</a></h3><p><img src="`+l+'" alt="\u6548\u679C\u56FE"></p><h3 id="nav-bar-content-before" tabindex="-1">nav-bar-content-before <a class="header-anchor" href="#nav-bar-content-before" aria-hidden="true">#</a></h3><p><img src="'+o+'" alt="\u6548\u679C\u56FE"></p><h3 id="sidebar-nav-before" tabindex="-1">sidebar-nav-before <a class="header-anchor" href="#sidebar-nav-before" aria-hidden="true">#</a></h3><p><img src="'+p+'" alt="\u6548\u679C\u56FE"></p><h3 id="home-hero-before" tabindex="-1">home-hero-before <a class="header-anchor" href="#home-hero-before" aria-hidden="true">#</a></h3><p><img src="'+t+'" alt="\u6548\u679C\u56FE"></p><h3 id="home-features-before" tabindex="-1">home-features-before <a class="header-anchor" href="#home-features-before" aria-hidden="true">#</a></h3><p><img src="'+r+'" alt="\u6548\u679C\u56FE"></p><h3 id="doc-footer-before" tabindex="-1">doc-footer-before <a class="header-anchor" href="#doc-footer-before" aria-hidden="true">#</a></h3><p><img src="'+c+'" alt="\u6548\u679C\u56FE"></p><ul><li><code>doc-footer-before</code>\u548C<code>doc-after</code>\u7C7B\u4F3C</li><li><code>doc-before</code>\u5C31\u662F\u5728\u6587\u7AE0\u7684\u9876\u90E8</li></ul><h3 id="aside-top" tabindex="-1">aside-top <a class="header-anchor" href="#aside-top" aria-hidden="true">#</a></h3><p><img src="'+i+'" alt="\u6548\u679C\u56FE"></p><ul><li>aside\u7684\u63D2\u69FD\u90FD\u662F\u5728\u53F3\u8FB9\u7684\u951A\u70B9\u5BFC\u822A\u680F</li></ul><h3 id="layout-bottom" tabindex="-1">layout-bottom <a class="header-anchor" href="#layout-bottom" aria-hidden="true">#</a></h3><p><img src="'+D+'" alt="\u6548\u679C\u56FE"> \u5728\u6BCF\u4E2A\u9875\u9762\u5DE6\u4E0B\u89D2 \u6211\u7528\u6765\u653E\u97F3\u4E50\u7EC4\u4EF6</p>',34),F=[d];function b(u,C,A,h,m,f){return n(),a("div",null,F)}const _=s(y,[["render",b]]);export{g as __pageData,_ as default};
