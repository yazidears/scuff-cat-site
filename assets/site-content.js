(() => {
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
  }).observe(document.getElementById('main') || document.body, {childList:true,subtree:true,characterData:true});
  // Use the self-hosted HTML pages instead of Framer's original route content.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = new URL(link.href, location.href);
    if (target.origin !== location.origin || target.pathname === location.pathname) return;
    if (/^\/(?:index|work|contact|work\/(?:ticketing|streetpass|surge))$/.test(target.pathname)) {
      target.pathname += '.html';
      link.href = target.href;
    }
    event.stopImmediatePropagation();
  }, true);
  update();
})();
