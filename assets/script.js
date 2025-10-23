// Render-all viewer with global search across all pages.
// - Renders all pages sequentially on the same page (no pager).
// - Each menu item has data attributes (data-page, data-group, data-item) so search can jump to it.
// - Search keeps grouped results but clicking a result scrolls to the matching item and highlights it.

const PAGES = [
  {
    title: "Welcome Drinks",
    image: { src: "images/menu2.jpg", pos: "50% 30%" },
    groups: [
      {
        heading: "Welcome Drinks",
        items: [
          "Moktails","Victoria Counter","Fresh Juice","Cold Drinks","Milk Shake",
          "Sharifa Shake","Chiku Shake","Pineapple Shake","Vanilla Shake","Pista Shake",
          "Strawberry Shake","Gola Chuski","Thandai Shake","Jal Jeera Shake","Mango Shake",
          "Jeera Chaas","Lassi","Coffee","Fruit Punch","Hot Kesharia Milk Counter"
        ]
      }
    ]
  },
  {
    title: "Moving Items",
    image: { src: "images/menu2.jpg", pos: "70% 75%" },
    groups: [
      {
        heading: "Namkeen",
        items: [
          "Hara Bhara Kabab","Veg ball","Pineapple Cherry Stick","Paneer ball","Paneer tikka",
          "Paneer Finger","Paneer Seekh Kabab","Paneer Roll","Veg Tikka","Baby Corn Finger",
          "American Corn Tikka","Matar Tikka","Veg Lolly Pop","Paneer Lolly Pop","Veg Gold",
          "Corn Cheese Tikka","Hara Chana Kachori","Tandoori Mom (Veg)","Paper Corn","Mushroom Tandoori",
          "Spring Roll (Veg)","Pin Win Potato","Mini Kachori","Cheese Ball"
        ]
      },
      {
        heading: "Sweets",
        items: [
          "Mini Kaju Barfi","Mini Raj Bhog","Mini Gulab Jamun",
          "Mini Kaju Pista Roll","Mini Pineapple Jalebi","Mini Angoori Petha"
        ]
      }
    ]
  },
  {
    title: "Hi-Tea",
    image: { src: "images/menu3.jpg", pos: "50% 65%" },
    groups: [
      {
        heading: "Snacks",
        items: [
          "Golgappa","Aloo Tikki","Mix Chat","Chilla with Chutney","Tomato Ragda Chat",
          "Papri Chat","Palak Chat","Chinese Samosa","Hara Bhara Chat","Moth Chat",
          "Chinese Chat","Kanji Vada","Alu Lacha Kachori Chat","Puchka Chat (Ganga Jamuna)",
          "Raj Kachori Chat","Tikki Agra","Corn Stuffed Tikki Chat","Litti Counter",
          "Indian Bhel Chat","Paneer Romaniya Chat","Steam Corn","Dahi Vada Chat"
        ]
      },
      {
        heading: "Chinese",
        items: [
          "Veg Hakka Chowmin","Veg Garlic Manchurian","American Chopsy","Veg Fried Rice",
          "Paneer Chilly","Chana Chilly","Mushroom Chilly","Veg 65","Baby Corn Chilly",
          "Gobi Chilly","Veg Hot & Sour","Potato Chilly","American Corn Chilly","Paneer-65",
          "Veg Momo (Steamed)","Veg Momo (Fried)"
        ]
      },
      { heading: "Fruit Counter", items: ["Imported Fruits","Indian Fruits"] }
    ]
  },
  {
    title: "Bakery / South Indian / Daal / Rice / Soup",
    image: { src: "images/menu4.jpg", pos: "55% 30%" },
    groups: [
      { heading: "Bakery Items", items: ["Burger","Pizza (of your choice)","Veg Patties","Paneer Patties","Pastry (different tastes)","Cheese Sandwich","Club Sandwich","Veg Sandwich"] },
      { heading: "South Indian Dishes", items: ["Plain Dosa / Masala Dosa","Idli (Mini)","Vada (Mini)","Uttapam (Mini)","Onion Uttapam","Mix Uttapam"] },
      { heading: "Daal", items: ["Daal Makhani","Dal Fried / Tarka","Chana Dal with Coconut","Daal Panchmela Butter Fry","Mung Dal Fry","Kathi Rahar Dal","Chana Dal Butter Fry","Green Mung Tarka"] },
      { heading: "Rice", items: ["Jeera Pulao (Basmati)","Jeera Rice (Sonachur)","Peas Pulao","Kesaria Pulao","Mewa Pulao","Kashmiri Pulao","Veg Biryani","Veg Dum Biryani","Kashmiri Biryani","Veg Pulao"] },
      { heading: "Soup", items: ["Tomato Soup","Veg Sweet Corn Soup","Veg Hot & Sour Soup","Veg Manchow Soup","Green Soup","Palak Soup","Sweet Corn Munch Soup","Tomato Coriander Soup","Chicken Soup"] }
    ]
  },
  {
    title: "Vegetable Indian & Tawa",
    image: { src: "images/menu5.jpg", pos: "70% 40%" },
    groups: [
      {
        heading: "Vegetable Indian",
        items: [
          "Kashmiri Aloo Dum","Aloo Dum Irani","Aloo Do Pyaza","Palak Kabli","Veg Tomato Puri",
          "Aloo Palak Gravy","Mixed Veg","Veg Navratan Korma","Veg Singapuri","Veg Kurkuri",
          "Veg Jaipuri","Veg Makhanwala","Sag Mattar","Veg Jhalfrazi","Capsicum Corn Fry",
          "Paneer Babycorn Masala","Paneer Butter Masala","Paneer Sahi Korma","Kaju Mushroom",
          "Palak Corn with Cream","Palak Mushroom","Mushroom do Pyaza","Kaju Curry",
          "Paneer Mushroom Taj","Paneer Pasanda","Palak Paneer","Moti Kofta in Palak Gravy",
          "Stuffed Capsicum","Green Peas Masala","Chana Masala","Kaju Paneer","Paneer Capsicum",
          "Paneer Tomato","Malai Kofta","Paneer Tikka Butter Masala","Paneer Pasanda",
          "Paneer Phoolchand","Paneer Keema","Matter Methi Malai","Paneer Karahi","Paneer Bagdadi"
        ]
      },
      { heading: "Vegetable on Tawa", items: ["Vegetable Garden","Vegetable Sizzler","Vegetable Kabab","Tawa Veg (Fried)"] }
    ]
  },
  {
    title: "Bread / Punjabi / Dahi",
    image: { src: "images/menu6.jpg", pos: "50% 40%" },
    groups: [
      { heading: "Bread", items: ["Lacha Paratha","Pithi Kachauri","Mattar Kachauri","Palak Kachauri","Missi Roti","Stuffed Kulcha","Pudina Paratha","Gobi Paratha","Aloo Paratha","Mattar Paratha"] },
      { heading: "Punjabi Dish", items: ["Makai Ki Roti","Sarso ka Saag","Whiter Butter","Gur","Amritsari Kulcha","Kashmiri Nan","Muli Chutni","Pindi Chana","Pheni Paratha","Chur Chur Nan"] },
      { heading: "Dahi Item", items: ["Dahi Bara","Dahi Pakora","Gujia Bara","Mix Fruit Raita","Vegetable Raita","Kheera Raita","Aloo Raita","Pineapple Raita","Imli Bara","Tiranga Dahi Bara"] }
    ]
  },
  {
    title: "Rajasthani / Italian / Thai / Salad / Chutney",
    image: { src: "images/menu7.jpg", pos: "40% 45%" },
    groups: [
      { heading: "Rajasthani Dish", items: ["Dal (Masala)","Bati","Churma","Gatte ki Sabji","Mangori Papad","Plane Mangori","Sangari ka Saag"] },
      { heading: "Italian Counter", items: ["Italian Pasta with coloured capsicum, veg rabe & sauce","Italian Crepes with two fillings (Mushroom & Mix Veg)","Baked Paneer Spaghetti Aroma"] },
      { heading: "Thai Counter", items: ["Thai Rice with Green Curry","Thai Noodles with Red Curry","Path High with Crunchy Vegetables","Thai Pouch"] },
      { heading: "Papad Counter", items: ["Papad Fry","Papad Roll","Masala Papad","Disco Papad","Khichiya Papad"] },
      { heading: "Salad", items: ["Green Salad","Salad Bar (Indian)","Salad Bar (Imported)"] },
      { heading: "Chutneys", items: ["Lahsun Chutney","Hara Chutney","Fruit Chutney","Mango Chutney","Plastic Chutney","Pineapple Chutney","Tomato Chutney","Khajur Aamavat Chutney"] }
    ]
  },
  {
    title: "Chicken / Mutton / Fish (Gravy & Snacks)",
    image: { src: "images/menu8.jpg", pos: "50% 35%" },
    groups: [
      { heading: "Chicken - Gravy", items: ["Chicken Butter Masala","Chicken Do Pyaza","Sahi Chicken","Chicken Curry","Chicken Roast B. Masala","Chicken Karahi","Chicken Dehati","Chicken Tikka B."] },
      { heading: "Non Veg Snacks - Dry", items: ["Chicken Chilly","Chicken Chilly Garlic","Chicken Chilly Boneless","Chicken Pakora","Chicken Dry Fry","Chicken Afghani","Chicken Pudina"] },
      { heading: "Mutton", items: ["Mutton Curry","Tawa Mutton","Mutton Do Pyaza","Palak Mutton","Mutton Dehati","Mutton Karahi","Masala Mutton Fry","Mutton Korma","Mutton Rogon Josh"] },
      { heading: "Fish", items: ["Fish Curry","Live Fish Fry","Fish Tomato","Fish Sarson","Fish Amritsari","Fish Patrui","Vetki Fish Fry","Fish Cutlet","Fish Finger"] }
    ]
  },
  {
    title: "Non-Vegetarian Biryani & Tandoor",
    image: { src: "images/menu9.jpg", pos: "70% 55%" },
    groups: [
      { heading: "Non Veg Biryani", items: ["Chicken Biryani","Mutton Biryani","Chicken Dum Biryani","Mutton Dum Biryani"] },
      { heading: "Non Veg Tandoor", items: ["Chicken Seekh Kabab","Mutton Seekh Kabab","Vetki Seekh Kabab","Chicken Spring Roll","Chicken Tandoori","Chicken Manchurian","Chicken Pakora"] }
    ]
  },
  {
    title: "Sweets / Ice Cream / Kulfi / Water / Pan",
    image: { src: "images/menu10.jpg", pos: "55% 22%" },
    groups: [
      { heading: "Sweets", items: ["Rasmalai Chilled","Gulab Jamun with Rabari","Kesaria Jalebi","Chena Decoration","Malpua with Rabri","Gazar Halwa","Badam Halwa","Mung Dal Halwa","Gond Pak"] },
      { heading: "Ice Cream", items: ["Ice Cream Parlour","Vanilla Ice Cream","Chocolate Ice Cream","Strawberry Ice Cream","Cone Ice Cream","Keshar Pista","Butter Scotch"] },
      { heading: "Kulfi", items: ["Matka Kulfi","Mango Kulfi","Kulfi Faluda","Stick Kulfi"] },
      { heading: "Water", items: ["Mineral Water","200 ml Bottle"] },
      { heading: "Pan Counter", items: ["Varieties of Pan (on request)"] }
    ]
  }
];

// ---------------- Rendering all pages ----------------

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function renderAllPages() {
  const root = document.getElementById('pageView');
  const indicator = document.getElementById('pageIndicator');
  if (!root) return;
  if (indicator) indicator.textContent = '';

  const html = PAGES.map((page, pi) => {
    // If image src is missing or empty, we still render no-image (so layout stays consistent).
    // The <img> has an onerror handler that hides the .feature wrapper if the file is missing or 404.
    const feature = `
      <div class="feature" style="--pos:${page.image?.pos || '50% 50%'}">
        <img
          src="${page.image?.src || ''}"
          alt="${escapeHtml(page.title || '')} representative food photo"
          loading="lazy" decoding="async"
          onerror="(function(img){ img.onerror=null; const p=img.closest('.feature'); if(p) p.style.display='none'; })(this);"
        >
      </div>
    `;

    const groupsHtml = page.groups.map((g, gi) => `
      <div class="page-group">
        <h2>${escapeHtml(g.heading)}</h2>
        <ul class="menu-list">
          ${g.items.map((item, ii) =>
            `<li data-page="${pi}" data-group="${gi}" data-item="${ii}">${escapeHtml(item)}</li>`
          ).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <section class="menu-page" id="page-${pi}">
        <p class="page-intro">${escapeHtml(page.title)}</p>
        ${feature}
        <div class="columns">${groupsHtml}</div>
      </section>
    `;
  }).join('\n');

  root.innerHTML = html;
}

// ---------------- Global search index ----------------

let GLOBAL_INDEX = null;
function buildGlobalIndex() {
  if (GLOBAL_INDEX) return GLOBAL_INDEX;
  const idx = [];
  PAGES.forEach((p, pi) => {
    p.groups.forEach((g, gi) => {
      g.items.forEach((text, ii) => {
        idx.push({
          text,
          textLower: String(text).toLowerCase(),
          pageIndex: pi,
          pageTitle: p.title,
          groupIndex: gi,
          groupHeading: g.heading,
          itemIndex: ii
        });
      });
    });
  });
  GLOBAL_INDEX = idx;
  return idx;
}

// ---------------- Search UI & results ----------------

function scrollToAndHighlight(pageIndex, groupIndex, itemIndex) {
  const selector = `#pageView li[data-page="${pageIndex}"][data-group="${groupIndex}"][data-item="${itemIndex}"]`;
  const li = document.querySelector(selector);
  if (!li) return;
  li.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const prev = li.style.backgroundColor;
  li.style.backgroundColor = 'rgba(255, 235, 59, 0.5)';
  li.style.transition = 'background-color 0.3s ease';
  setTimeout(() => { li.style.backgroundColor = prev || ''; }, 1400);
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const root = document.getElementById('pageView');
  const indicator = document.getElementById('pageIndicator');
  if (!root) return;

  if (!q) {
    renderAllPages();
    if (indicator) indicator.textContent = '';
    return;
  }

  const idx = buildGlobalIndex();
  const matches = idx.filter(entry => entry.textLower.includes(q));

  const grouped = new Map();
  for (const m of matches) {
    if (!grouped.has(m.pageIndex)) grouped.set(m.pageIndex, { title: m.pageTitle, groups: new Map() });
    const pageGroup = grouped.get(m.pageIndex);
    if (!pageGroup.groups.has(m.groupHeading)) pageGroup.groups.set(m.groupHeading, []);
    pageGroup.groups.get(m.groupHeading).push(m);
  }

  const total = matches.length;
  if (indicator) indicator.textContent = `Results: ${total} item${total !== 1 ? 's' : ''}`;

  if (total === 0) {
    root.innerHTML = `<p class="page-intro">No items found for "${escapeHtml(query)}".</p>`;
    return;
  }

  let html = `<p class="page-intro">Search results for "<strong>${escapeHtml(query)}</strong>" — ${total} item${total !== 1 ? 's' : ''}</p>`;

  const pagesInOrder = Array.from(grouped.entries()).sort((a, b) => a[0] - b[0]);
  html += pagesInOrder.map(([pi, info]) => {
    const groups = Array.from(info.groups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    const groupsHtml = groups.map(([gHeading, items]) => `
      <div>
        <h2>${escapeHtml(info.title)}</h2>
        <h3>${escapeHtml(gHeading)} (${items.length})</h3>
        <ul class="menu-list">
          ${items.map(m => `
            <li class="result-link"
                data-page="${m.pageIndex}"
                data-group="${m.groupIndex}"
                data-item="${m.itemIndex}">
              ${escapeHtml(m.text)}
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
    return `<div class="columns">${groupsHtml}</div>`;
  }).join('');

  root.innerHTML = html;

  root.onclick = (e) => {
    const li = e.target.closest('.result-link');
    if (!li) return;
    const page = parseInt(li.dataset.page, 10);
    const group = parseInt(li.dataset.group, 10);
    const item = parseInt(li.dataset.item, 10);
    renderAllPages();
    setTimeout(() => scrollToAndHighlight(page, group, item), 60);
  };
}

// ---------------- Wiring search and DOM ----------------

function wireSearch() {
  const search = document.getElementById('search');
  if (!search) return;

  const onSearch = (e) => {
    const q = e.target.value || '';
    if (!q.trim()) renderSearchResults('');
    else renderSearchResults(q);
  };
  search.addEventListener('input', onSearch);

  search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = search.value.trim();
      if (!q) return;
      const matches = buildGlobalIndex().filter(x => x.textLower.includes(q.toLowerCase()));
      if (matches.length) {
        const first = matches[0];
        renderAllPages();
        setTimeout(() => scrollToAndHighlight(first.pageIndex, first.groupIndex, first.itemIndex), 60);
      }
    } else if (e.key === 'Escape') {
      search.value = '';
      renderSearchResults('');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderAllPages();
  wireSearch();

  const pv = document.getElementById('pageView');
  if (pv) {
    pv.addEventListener('click', (e) => {
      const li = e.target.closest('li[data-page]');
      if (!li) return;
      const prev = li.style.backgroundColor;
      li.style.backgroundColor = 'rgba(144, 202, 249, 0.25)';
      setTimeout(() => { li.style.backgroundColor = prev || ''; }, 700);
    });
  }
});