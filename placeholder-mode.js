(() => {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const main = document.querySelector('main');

  const brand = document.querySelector('header nav > a');
  if (brand) {
    brand.innerHTML = `
      <img src="ECL%20logo.png" alt="ECL logo" class="h-12 w-14 shrink-0 object-contain">
      <span class="min-w-0 leading-tight">
        <span class="block truncate text-sm font-bold tracking-tight text-navy">Electronic Ceramics Laboratory</span>
        <span class="block truncate text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">National Taiwan University</span>
      </span>`;
  }

  document.querySelectorAll('footer p').forEach((item, index) => {
    item.textContent = index === 0 ? 'Electronic Ceramics Laboratory' : index === 1 ? 'National Taiwan University' : '[PLACEHOLDER COPYRIGHT]';
  });

  // Pages marked static keep their editable HTML content.
  if (!main || main.dataset.content === 'static') return;

  const card = (label = '[PLACEHOLDER LABEL]', title = '[PLACEHOLDER TITLE]', body = '[PLACEHOLDER SHORT DESCRIPTION]') => `
    <article class="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-lab-blue">${label}</p>
      <h3 class="mt-3 text-xl font-bold text-navy">${title}</h3>
      <p class="mt-4 text-sm leading-7 text-slate-500">${body}</p>
    </article>`;

  const sectionHeader = (eyebrow, heading, description = '[PLACEHOLDER SECTION DESCRIPTION]') => `
    <div class="max-w-3xl">
      <p class="text-sm font-bold uppercase tracking-[0.18em] text-lab-blue">${eyebrow}</p>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">${heading}</h2>
      <p class="mt-5 text-base leading-8 text-slate-500">${description}</p>
    </div>`;

  const pageHero = (name, title = '[PLACEHOLDER PAGE TITLE]', description = '[PLACEHOLDER PAGE INTRODUCTION]') => `
    <section class="relative overflow-hidden border-b border-slate-200 bg-slate-50 pb-20 pt-40 sm:pt-44">
      <div class="technical-grid absolute inset-y-0 right-0 w-1/2 opacity-70" aria-hidden="true"></div>
      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p class="text-sm font-bold uppercase tracking-[0.18em] text-lab-blue">${name}</p>
        <h1 class="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">${title}</h1>
        <p class="mt-7 max-w-3xl text-lg leading-8 text-slate-500">${description}</p>
      </div>
    </section>`;

  const templates = {
    'index.html': `
      <section class="flex min-h-[calc(100vh-5.75rem)] items-center bg-white pb-24 pt-40">
        <div class="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div class="max-w-3xl">
            <img src="ECL%20logo.png" alt="ECL logo" class="mb-10 h-28 w-32 object-contain sm:h-36 sm:w-40">
            <p class="text-sm font-bold uppercase tracking-[0.18em] text-lab-blue">National Taiwan University</p>
            <h1 class="mt-5 text-4xl font-bold tracking-tight text-navy sm:text-6xl">Electronic Ceramics Laboratory</h1>
            <p class="mt-7 max-w-2xl text-lg leading-8 text-slate-400">[PLACEHOLDER ONE-SENTENCE LAB DESCRIPTION]</p>
          </div>
        </div>
      </section>`,

    'news.html': `
      ${pageHero('News')}
      <section class="py-24"><div class="mx-auto max-w-7xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER FEATURED LABEL]', '[PLACEHOLDER FEATURED NEWS TITLE]')}
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
          ${card('[PLACEHOLDER DATE]', '[PLACEHOLDER NEWS TITLE]')}
        </div>
      </div></section>`,

    'research.html': `
      ${pageHero('Research')}
      <section class="py-24"><div class="mx-auto max-w-7xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER SECTION LABEL]', '[PLACEHOLDER RESEARCH AREAS TITLE]')}
        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          ${card('[RESEARCH AREA 01]', '[PLACEHOLDER RESEARCH AREA TITLE]')}
          ${card('[RESEARCH AREA 02]', '[PLACEHOLDER RESEARCH AREA TITLE]')}
          ${card('[RESEARCH AREA 03]', '[PLACEHOLDER RESEARCH AREA TITLE]')}
        </div>
      </div></section>`,

    'publications.html': `
      ${pageHero('Publications')}
      <section class="py-24"><div class="mx-auto max-w-6xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER YEAR]', '[PLACEHOLDER PUBLICATION LIST TITLE]')}
        <div class="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          ${[1, 2, 3, 4].map((number) => `<article class="grid gap-4 py-8 sm:grid-cols-[4rem_1fr]"><span class="text-sm font-bold text-slate-400">0${number}</span><div><h3 class="text-lg font-bold text-navy">[PLACEHOLDER PUBLICATION TITLE]</h3><p class="mt-2 text-sm text-slate-500">[PLACEHOLDER AUTHORS]</p><p class="mt-3 text-sm font-semibold italic text-lab-blue">[PLACEHOLDER JOURNAL · YEAR · DOI]</p></div></article>`).join('')}
        </div>
      </div></section>`,

    'pi.html': `
      ${pageHero('Principal Investigator', '[PLACEHOLDER PROFESSOR NAME]', '[PLACEHOLDER ACADEMIC TITLE AND DEPARTMENT]')}
      <section class="py-24"><div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.38fr_0.62fr] lg:px-8">
        <div class="grid min-h-96 place-items-center rounded-2xl bg-slate-100 text-sm font-bold text-slate-400">[PLACEHOLDER PORTRAIT]</div>
        <div>${sectionHeader('[PLACEHOLDER BIOGRAPHY LABEL]', '[PLACEHOLDER BIOGRAPHY TITLE]', '[PLACEHOLDER BIOGRAPHY PARAGRAPH. PLACEHOLDER BIOGRAPHY PARAGRAPH. PLACEHOLDER BIOGRAPHY PARAGRAPH.]')}
          <div class="mt-10 grid gap-4 sm:grid-cols-2">${card('[PLACEHOLDER]', '[PLACEHOLDER RESEARCH INTEREST]')}${card('[PLACEHOLDER]', '[PLACEHOLDER RESEARCH INTEREST]')}${card('[PLACEHOLDER]', '[PLACEHOLDER APPOINTMENT]')}${card('[PLACEHOLDER]', '[PLACEHOLDER EDUCATION]')}</div>
        </div>
      </div></section>`,

    'teaching.html': `
      ${pageHero('Teaching')}
      <section class="py-24"><div class="mx-auto max-w-7xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER SECTION LABEL]', '[PLACEHOLDER COURSES TITLE]')}
        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          ${card('[PLACEHOLDER COURSE CODE]', '[PLACEHOLDER COURSE TITLE]', '[PLACEHOLDER COURSE DESCRIPTION]')}
          ${card('[PLACEHOLDER COURSE CODE]', '[PLACEHOLDER COURSE TITLE]', '[PLACEHOLDER COURSE DESCRIPTION]')}
          ${card('[PLACEHOLDER COURSE CODE]', '[PLACEHOLDER COURSE TITLE]', '[PLACEHOLDER COURSE DESCRIPTION]')}
        </div>
      </div></section>`,

    'facilities.html': `
      ${pageHero('Equipment & Facilities')}
      <section class="py-24"><div class="mx-auto max-w-7xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER SECTION LABEL]', '[PLACEHOLDER EQUIPMENT LIST TITLE]')}
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${card('[EQUIPMENT 01]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
          ${card('[EQUIPMENT 02]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
          ${card('[EQUIPMENT 03]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
          ${card('[EQUIPMENT 04]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
          ${card('[EQUIPMENT 05]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
          ${card('[EQUIPMENT 06]', '[PLACEHOLDER EQUIPMENT NAME]', '[PLACEHOLDER EQUIPMENT DESCRIPTION]')}
        </div>
      </div></section>`,

    'about.html': `
      ${pageHero('About')}
      <section class="py-24"><div class="mx-auto max-w-7xl px-6 lg:px-8">
        ${sectionHeader('[PLACEHOLDER SECTION LABEL]', '[PLACEHOLDER ABOUT TITLE]', '[PLACEHOLDER ABOUT PARAGRAPH. PLACEHOLDER ABOUT PARAGRAPH. PLACEHOLDER ABOUT PARAGRAPH.]')}
        <div class="mt-12 grid gap-6 md:grid-cols-3">${card('[PLACEHOLDER]', '[PLACEHOLDER VALUE]')}${card('[PLACEHOLDER]', '[PLACEHOLDER VALUE]')}${card('[PLACEHOLDER]', '[PLACEHOLDER VALUE]')}</div>
      </div></section>`,

    'contact.html': `
      ${pageHero('Contact')}
      <section class="py-24"><div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>${sectionHeader('[PLACEHOLDER CONTACT LABEL]', '[PLACEHOLDER CONTACT TITLE]')}<div class="mt-8 space-y-3 text-lg font-semibold text-lab-blue"><p>[PLACEHOLDER EMAIL]</p><p>[PLACEHOLDER PHONE]</p></div></div>
        <div class="rounded-2xl bg-navy p-8 text-white sm:p-10"><p class="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">[PLACEHOLDER ADDRESS LABEL]</p><p class="mt-5 leading-8 text-slate-300">[PLACEHOLDER BUILDING]<br>[PLACEHOLDER DEPARTMENT]<br>[PLACEHOLDER UNIVERSITY]<br>[PLACEHOLDER STREET ADDRESS]<br>[PLACEHOLDER CITY AND POSTAL CODE]</p></div>
      </div></section>`
  };

  main.innerHTML = templates[page] || templates['index.html'];
})();
