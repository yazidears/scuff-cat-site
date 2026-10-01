(() => {
  const images = {"https://framerusercontent.com/images/1NojF9yywMvqzHNbp79Nt0uTs.png": "/assets/images/1NojF9yywMvqzHNbp79Nt0uTs.png", "https://framerusercontent.com/images/2vKDgy59QNcoAJuPBhU0noIUDnU.jpg": "/assets/images/2vKDgy59QNcoAJuPBhU0noIUDnU.jpg", "https://framerusercontent.com/images/3E2J9orCMTWzLWz1Wycx5lBwyAo.png": "/assets/images/3E2J9orCMTWzLWz1Wycx5lBwyAo.png", "https://framerusercontent.com/images/4cRkbgaPk6mzHLtDc7dmTiFdY.jpg": "/assets/images/4cRkbgaPk6mzHLtDc7dmTiFdY.jpg", "https://framerusercontent.com/images/4uDxb05WoT7xgEpt0T6WsO5Ag.jpg": "/assets/images/4uDxb05WoT7xgEpt0T6WsO5Ag.jpg", "https://framerusercontent.com/images/68PdN7ZA8o4YjDpT2zl0Cxw.jpg": "/assets/images/68PdN7ZA8o4YjDpT2zl0Cxw.jpg", "https://framerusercontent.com/images/6r6tLlKin4YdRCER0gZK7UJpWI.png": "/assets/images/6r6tLlKin4YdRCER0gZK7UJpWI.png", "https://framerusercontent.com/images/7WVAcnCw5jrTdcET3CmMrpU7gf0.png": "/assets/images/7WVAcnCw5jrTdcET3CmMrpU7gf0.png", "https://framerusercontent.com/images/7ZWEh0aFsZ47a3u5eCtRtgC9tE8.svg": "/assets/images/7ZWEh0aFsZ47a3u5eCtRtgC9tE8.svg", "https://framerusercontent.com/images/7uG4BhwVaiwETVmXbIX3b81RuRw.png": "/assets/images/7uG4BhwVaiwETVmXbIX3b81RuRw.png", "https://framerusercontent.com/images/D5DNZqI6mcEFCYSZWhnmUO1zKY.png": "/assets/images/D5DNZqI6mcEFCYSZWhnmUO1zKY.png", "https://framerusercontent.com/images/DWmJug812kWBKx1ASe4y7WQhk.jpg": "/assets/images/DWmJug812kWBKx1ASe4y7WQhk.jpg", "https://framerusercontent.com/images/EiK9DZkQpkwAwFhZ10Y24JaUhI.jpg": "/assets/images/EiK9DZkQpkwAwFhZ10Y24JaUhI.jpg", "https://framerusercontent.com/images/FEz4e5jllqBgaJrHr83YSDlYSm8.jpg": "/assets/images/FEz4e5jllqBgaJrHr83YSDlYSm8.jpg", "https://framerusercontent.com/images/GukJy0bKHF89AWk2I75SZPww8kw.png": "/assets/images/GukJy0bKHF89AWk2I75SZPww8kw.png", "https://framerusercontent.com/images/IqQHyQcy4QE5uEL3VIWUx34W3H4.jpg": "/assets/images/IqQHyQcy4QE5uEL3VIWUx34W3H4.jpg", "https://framerusercontent.com/images/OAptuWFNfA2ykYxM7NRYIeUI3Xc.png": "/assets/images/OAptuWFNfA2ykYxM7NRYIeUI3Xc.png", "https://framerusercontent.com/images/QMAZLp7CRgkRw8LGnd3qO4U2LA.jpg": "/assets/images/QMAZLp7CRgkRw8LGnd3qO4U2LA.jpg", "https://framerusercontent.com/images/QeDTXOwq9ay5kgs7MmoP6PEc7OE.jpg": "/assets/images/QeDTXOwq9ay5kgs7MmoP6PEc7OE.jpg", "https://framerusercontent.com/images/UtQ71z05FIicdPyIi6oBxpoxY.png": "/assets/images/UtQ71z05FIicdPyIi6oBxpoxY.png", "https://framerusercontent.com/images/Wkl782WuPKvRNycli7scA8d8E.jpg": "/assets/images/Wkl782WuPKvRNycli7scA8d8E.jpg", "https://framerusercontent.com/images/YxK2kyMSXDwqtlKpiPq0jLJ9o.png": "/assets/images/YxK2kyMSXDwqtlKpiPq0jLJ9o.png", "https://framerusercontent.com/images/ZdG4HvZwuOtivOJUr8Ciziz3KQ.svg": "/assets/images/ZdG4HvZwuOtivOJUr8Ciziz3KQ.svg", "https://framerusercontent.com/images/cbnxN8O3gBHbXDKR01AwSLGUGXo.png": "/assets/images/cbnxN8O3gBHbXDKR01AwSLGUGXo.png", "https://framerusercontent.com/images/ixnDKtypi3LkJTIthyybJI5Alg.png": "/assets/images/ixnDKtypi3LkJTIthyybJI5Alg.png", "https://framerusercontent.com/images/kGaNRIyyVTNnxd11jqtnhRURAI.png": "/assets/images/kGaNRIyyVTNnxd11jqtnhRURAI.png", "https://framerusercontent.com/images/kZJ2x9CAQSFMjNRyVtdBQ8v7PY.png": "/assets/images/kZJ2x9CAQSFMjNRyVtdBQ8v7PY.png", "https://framerusercontent.com/images/lW5LaFGq5Ysm2i5UaytXr5oXipI.jpg": "/assets/images/lW5LaFGq5Ysm2i5UaytXr5oXipI.jpg", "https://framerusercontent.com/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png": "/assets/images/liDp6RqOmZpoiyriU2da9i9ZRNM.png", "https://framerusercontent.com/images/mSURRTAJnyd0HKjcH6OzjJzLZRk.jpg": "/assets/images/mSURRTAJnyd0HKjcH6OzjJzLZRk.jpg", "https://framerusercontent.com/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png": "/assets/images/oJWMhuQwJSgdOnsubtck1x9kwQQ.png", "https://framerusercontent.com/images/pngyKV1dORyaPnm1wnKXJIZ7pZM.jpg": "/assets/images/pngyKV1dORyaPnm1wnKXJIZ7pZM.jpg", "https://framerusercontent.com/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png": "/assets/images/rmeBLxZhEpvUaEnrIirzHJQynwc.png", "https://framerusercontent.com/images/svmMd86RbsKfib7KzvpKAUsHrk.png": "/assets/images/svmMd86RbsKfib7KzvpKAUsHrk.png", "https://framerusercontent.com/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png": "/assets/images/tFXdT1GAWfzky0TCheIFtJR4O3I.png", "https://framerusercontent.com/images/uEuzLmHidyU1NDRflf2P1Y4ylsY.png": "/assets/images/uEuzLmHidyU1NDRflf2P1Y4ylsY.png", "https://framerusercontent.com/images/vKH7Kl09wvGBWlnNs9OXthMaaU.jpeg": "/assets/images/vKH7Kl09wvGBWlnNs9OXthMaaU.jpeg", "https://framerusercontent.com/images/vqkHS3nZxIlfTfWhUq6E1Xz8Wc.png": "/assets/images/vqkHS3nZxIlfTfWhUq6E1Xz8Wc.png", "https://framerusercontent.com/images/yDO3NwOPkFez9MKy27hGeXFueTk.jpg": "/assets/images/yDO3NwOPkFez9MKy27hGeXFueTk.jpg"};
  const replacements = {"\u00a9 Featured Projects \u30d7\u30ed\u30b8\u30a7\u30af\u30c8": "Features", "\u00a9 Featured Projects": "Features", "Creative Development": "Ticketing, StreetPass and Surge Pricing", "(WDX\u00ae \u2014 03)": "", "All Works": "Features", "(5)": "(3)", "\u00a9 Capabilities \u30b5\u30fc\u30d3\u30b9\u5185\u5bb9": "Features", "Digital Execution": "SCUFF", "\u00a9 Personal Profile \u30d7\u30ed\u30d5\u30a3\u30fc\u30eb": "About SCUFF", "Visual Thinker": "SCUFF", "\u00a9 Brand Partners \u30d1\u30fc\u30c8\u30ca\u30fc": "Partners", "Creative Teams": "Partners", "\u00a9 Testimonials \u30ec\u30d3\u30e5\u30fc": "Testimonials", "Real Feedback": "Testimonials", "(WDX\u00ae \u2014 04)": "", "(WDX\u00ae \u2014 05)": "", "(WDX\u00ae \u2014 06)": "", "(WDX\u00ae \u2014 08)": "", "(6)": "(4)"};
  const removed = ["framer-122h8qz"];
  const onboarding = "<section id=\"venue-onboarding\" class=\"site-section\"><div class=\"site-onboarding-grid\"><div><h2>Get started with SCUFF</h2><p>Create a partner account to manage your venues and events.</p><ol><li><strong>Create your account</strong>Add your team, venue and contact details.</li><li><strong>Create an event</strong>Set the date, ticket types and prices.</li><li><strong>Manage sales and entry</strong>Track ticket sales and check in guests.</li></ol><a href=\"https://partners.scuff.cat/signup\">Create account</a></div><figure><img src=\"assets/partner-account-setup.jpg\" alt=\"SCUFF Partners account setup asking for name and surname\" width=\"1280\" height=\"720\" loading=\"lazy\"><figcaption>SCUFF Partners account setup</figcaption></figure></div></section>";
  let pending = false;
  function update() {
    pending = false;
    const main = document.getElementById('main');
    if (!main) return;
    const home = /\/(?:index\.html)?$/.test(location.pathname);
    if (home) {
      main.querySelectorAll(removed.map(c => '.' + c).join(',')).forEach(el => el.remove());
      const pricing = main.querySelector('[data-framer-name="Pricing"]');
      if (pricing && !main.querySelector('#venue-onboarding')) pricing.insertAdjacentHTML('beforebegin', onboarding);
    }
    if (/\/work(?:\.html)?$/.test(location.pathname)) {
      main.querySelectorAll('h1').forEach(h => {
        if (h.textContent !== 'Features') h.textContent = 'Features';
      });
    }
    main.querySelectorAll('a[href="mailto:dummy@mail.com"]').forEach(link => { link.href = 'mailto:partners@scuff.cat'; });
    main.querySelectorAll('img').forEach(image => {
      const source = image.getAttribute('src') || '';
      const base = source.split('?')[0];
      const local = images[base] || (base.startsWith('/assets/images/') ? base : null);
      if (local) {
        if (image.hasAttribute('srcset')) image.removeAttribute('srcset');
        if (source !== local) image.src = local;
      }
    });
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.closest('script,style,[data-framer-name="Pricing"],#venue-onboarding')) continue;
      let value = node.nodeValue;
      for (const [old, replacement] of Object.entries(replacements)) value = value.split(old).join(replacement);
      if (value !== node.nodeValue) node.nodeValue = value;
    }
  }
  new MutationObserver(() => {
    if (!pending) { pending = true; requestAnimationFrame(update); }
  }).observe(document.getElementById('main') || document.body, {childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['src','srcset']});
  // Contact uses its corrected standalone page; other routes keep Framer transitions.
  document.addEventListener("click", event => {
    const link = event.target.closest("a[href]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = new URL(link.href, location.href);
    if (target.origin === location.origin && /^\/contact(?:\.html)?$/.test(target.pathname)) {
      target.pathname = "/contact.html";
      link.href = target.href;
      event.stopImmediatePropagation();
    }
  }, true);
  const headingStyle = document.createElement("style");
  headingStyle.textContent = ".framer-10b714a h1.framer-text {font-size:clamp(44px,7.5vw,140px)!important;line-height:1.04!important;white-space:normal;overflow-wrap:normal;}";
  document.head.appendChild(headingStyle);
  const restoreTitle = () => {
    const path = location.pathname.replace(/\.html$/, "");
    const titles = {"/work/ticketing":"SCUFFPay // SCUFF Partners", "/work/streetpass":"StreetPass // SCUFF Partners", "/work/surge":"Surge Pricing // SCUFF Partners"};
    const title = titles[path] || "SCUFF // Partners";
    if (document.title !== title) document.title = title;
  };
  new MutationObserver(restoreTitle).observe(document.head, {childList:true,characterData:true,subtree:true});
  restoreTitle();
  update();
})();
