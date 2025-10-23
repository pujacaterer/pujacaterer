// Page-by-page viewer with global search across all pages.
// - Search shows results grouped by Page -> Category.
// - Clicking a result jumps to that page and highlights the item.
// - Clearing the search reverts to the current page view.

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
      { heading: "Daal", items: ["Daal Makhani","Dal Fried / Tarka","Chana Dal with Coconut","Daal Panchmela Butter Fry","Mung Dal Fry","Kathi Rahar Dal","Chana Dal Butter Fry","Green Mung Tarka","Dal Handi"] },
      { heading: "Rice", items: ["Jeera Pulao (Basmati)","Jeera Rice (Sonachur)","Peas Pulao","Kesaria Pulao","Mewa Pulao","Kashmiri Pulao","Veg Biryani","Veg Dum Biryani","Kashmiri Biryani","Veg Pulao","Corn Pulao","Baked Rice","Baked Corn Rice","3 Layer Biryani","Matka Pulao","Dahi Coconut Biryani"] },
      { heading: "Soup", items: ["Tomato Soup","Veg Sweet Corn Soup","Veg Hot & Sour Soup","Veg Manchow Soup","Green Soup","Palak Soup","Sweet Corn Munch Soup","Tomato Coriander Soup","Chicken S/Corn Soup","Chicken H/Sour Soup","Chicken Manchow Soup"] }
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
      { heading: "Bread", items: ["Lacha Paratha","Pithi Kachauri","Mattar Kachauri","Palak Kachauri","Missi Roti","Stuffed Kulcha","Pudina Paratha","Gobi Paratha","Aloo Paratha","Mattar Paratha","Mircha Paratha","Paneer Paratha","Sattu Paratha","Feni Paratha","Mung Dal Paratha","Puran Puri","Butter Nan","Mughlai Paratha","Mung Kachauri","Chena Paratha","Baby Butter Nan","Rumali Roti","Tawa Roti"] },
      { heading: "Punjabi Dish", items: ["Makai Ki Roti","Sarso ka Saag","Whiter Butter","Gur","Amritsari Kulcha","Kashmiri Nan","Muli Chutni","Pindi Chana","Pheni Paratha","Chur Chur Nan"] },
      { heading: "Dahi Item", items: ["Dahi Bara","Dahi Pakora","Gujia Bara","Mix Fruit Raita","Vegetable Raita","Kheera Raita","Aloo Raita","Pineapple Raita","Imli Bara","Tiranga Dahi Bara","Bread Dahi Bara","Bundi Raita"] }
    ]
  },
  {
    title: "Rajasthani / Italian / Thai / Salad / Chutney",
    image: { src: "images/menu7.jpg", pos: "40% 45%" },
    groups: [
      { heading: "Rajasthani Dish", items: ["Dal (Masala)","Bati","Churma","Gatte ki Sabji","Mangori Papad","Plane Mangori","Sangari ka Saag"] },
      { heading: "Italian Counter", items: ["Italian Pasta with coloured capsicum, veg rabe & sauce","Italian Crepes with two fillings (Mushroom & Mix Veg)","Baked Paneer Spaghetti Aroma","Baked Canelloni"] },
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
      { heading: "Chicken - Gravy", items: ["Chicken Butter Masala","Chicken Do Pyaza","Sahi Chicken","Chicken Curry","Chicken Roast B. Masala","Chicken Karahi","Chicken Dehati","Chicken Tikka B. Masala","Chicken Rogan Josh","Chicken Tawa","Chicken Afghani B. Masala","Chicken Pudina","Chicken Muglai","Murg Mussalam"] },
      { heading: "Non Veg Snacks - Dry", items: ["Chicken Chilly","Chicken Chilly Garlic","Chicken Chilly Boneless","Chicken Pakora","Chicken Dry Fry","Chicken Afghani","Chicken Pudina","Chicken Tandoori","Chicken Lasuni Tikka","Chicken Lolypop","Chicken Achari Tikka","Chicken Spritter"] },
      { heading: "Mutton", items: ["Mutton Curry","Tawa Mutton","Mutton Do Pyaza","Palak Mutton","Mutton Dehati","Mutton Karahi","Masala Mutton Fry","Mutton Korma","Mutton Rogon Josh","Mutton Handi","Mutton Tawa"] },
      { heading: "Fish", items: ["Fish Curry","Live Fish Fry","Fish Tomato","Fish Sarson","Fish Amritsari","Fish Patrui","Vetki Fish Fry","Fish Cutlet","Fish Finger"] }
    ]
  },
  {
    title: "Non-Vegetarian Biryani & Tandoor",
    image: { src: "images/menu9.jpg", pos: "70% 55%" },
    groups: [
      { heading: "Non Veg Biryani", items: ["Chicken Biryani","Mutton Biryani","Chicken Dum Biryani","Mutton Dum Biryani"] },
      { heading: "Non Veg Tandoor", items: ["Chicken Seekh Kabab","Mutton Seekh Kabab","Vetki Seekh Kabab","Chicken Spring Roll","Chicken Tandoori","Chicken Manchurian","Chicken Pakora","Chicken Fry Masala","Chicken Afghani","Chicken Tikka","Chicken Lahsuni Tikka","Chicken Achari Tikka","Chicken Finger","Fish Tandoori","Prawn Fry","Prawn Kabab","Prawn Tandoori","Mutton Sami Kabab","Mutton Boti Kabab"] }
    ]
  },
  {
    title: "Sweets / Ice Cream / Kulfi / Water / Pan",
    image: { src: "images/menu10.jpg", pos: "55% 22%" },
    groups: [
      { heading: "Sweets", items: ["Rasmalai Chilled","Gulab Jamun with Rabari","Kesaria Jalebi","Chena Decoration","Malpua with Rabri","Gazar Halwa","Badam Halwa","Mung Dal Halwa","Gond Pak","Kaju Puri Baked","Badam Puri Baked","Kaju Barfi","Stuff Hot Gulab Jamun","Kesar Bhog","Rainbow","Ghewar","Baked Rasgulla","Disco Sweets","Chena Paice with Kesar Pista","Mango Chena Pice","Mango Gulab Jamun","Malai Chamcham","Kesar Bati","Apple Jalebi with Rabari","Kaju Pista Barfi","Pineapple Jalebi","Mango Roll","Imriti"] },
      { heading: "Ice Cream", items: ["Ice Cream Parlour","Vanilla Ice Cream","Chocolate Ice Cream","Strawberry Ice Cream","Cone Ice Cream","Keshar Pista","Butter Scotch"] },
      { heading: "Kulfi", items: ["Matka Kulfi","Mango Kulfi","Kulfi Faluda","Stick Kulfi"] },
      { heading: "Water", items: ["Mineral Water","200 ml Bottle"] },
      { heading: "Pan Counter", items: ["Varieties of Pan (on request)"] }
    ]
  }
];

// --- Rendering current page ---

let pageIndex = 0;

function renderPage(index) {
  const page = PAGES[index];
  const root = document.getElementById('pageView');
  const indicator = document.getElementById('pageIndicator');
  indicator.textContent = `Page ${index + 1} / ${PAGES.length}`;

  const feature = `
    <div class="feature" style="--pos:${page.image.pos}">
      <img src="${page.image.src}" alt="${page.title} representative food photo">
    </div>
  `;

  const groupsHtml = page.groups.map(g => `
    <div>
      <h2>${escapeHtml(g.heading)}</h2>
      <ul class="menu-list">
        ${g.items.map(i => `<li>${escapeHtml(i)}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  root.innerHTML = `
    <p class="page-intro">${escapeHtml(page.title)}</p>
    ${feature}
    <div class="columns">${groupsHtml}</div>
  `;
}

// --- Global search index and UI ---

let GLOBAL_INDEX = null;

function buildGlobalIndex() {
  if (GLOBAL_INDEX) return GLOBAL_INDEX;
  const idx = [];
  PAGES.forEach((p, pi) => {
    p.groups.forEach((g, gi) => {
      g.items.forEach((text, ii) => {
        idx.push({
          text,
          textLower: text.toLowerCase(),
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

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  const root = document.getElementById('pageView');
  const indicator = document.getElementById('pageIndicator');

  if (!q) {
    // Back to normal page
    indicator.textContent = `Page ${pageIndex + 1} / ${PAGES.length}`;
    renderPage(pageIndex);
    return;
  }

  const idx = buildGlobalIndex();
  const matches = idx.filter(entry => entry.textLower.includes(q));

  // Group results by page -> group
  const grouped = new Map(); // pageIndex -> { title, groups: Map(groupHeading -> [entries]) }
  for (const m of matches) {
    if (!grouped.has(m.pageIndex)) {
      grouped.set(m.pageIndex, { title: m.pageTitle, groups: new Map() });
    }
    const pageGroup = grouped.get(m.pageIndex);
    if (!pageGroup.groups.has(m.groupHeading)) {
      pageGroup.groups.set(m.groupHeading, []);
    }
    pageGroup.groups.get(m.groupHeading).push(m);
  }

  const total = matches.length;
  indicator.textContent = `Results: ${total} item${total !== 1 ? 's' : ''}`;

  if (total === 0) {
    root.innerHTML = `
      <p class="page-intro">No items found for "${escapeHtml(query)}".</p>
    `;
    return;
  }

  // Results HTML
  let html = `<p class="page-intro">Search results for "<strong>${escapeHtml(query)}</strong>" — ${total} item${total !== 1 ? 's' : ''}</p>`;

  // Sort by page order, then by group name
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

  // Delegate click to jump to the item on its page
  root.onclick = (e) => {
    const li = e.target.closest('.result-link');
    if (!li) return;
    const targetPage = parseInt(li.dataset.page, 10);
    const targetItemIndex = parseInt(li.dataset.item, 10);
    // Switch view
    pageIndex = targetPage;
    renderPage(pageIndex);
    // Highlight the exact item
    highlightItemByIndex(targetItemIndex);
  };
}

function highlightItemByIndex(itemIndex) {
  // In the current page, find the item by text match to ensure correctness
  const current = PAGES[pageIndex];
  const allItemsOnPage = [];
  current.groups.forEach(g => allItemsOnPage.push(...g.items));
  const targetText = allItemsOnPage[itemIndex];
  if (!targetText) return;

  const li = Array.from(document.querySelectorAll('#pageView .menu-list li'))
    .find(x => x.textContent.trim().toLowerCase() === targetText.trim().toLowerCase());

  if (li) {
    li.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Temporary inline highlight
    const oldBg = li.style.backgroundColor;
    li.style.backgroundColor = 'rgba(255, 235, 59, 0.5)'; // amber
    setTimeout(() => { li.style.backgroundColor = oldBg || ''; }, 1200);
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// --- Wiring the UI ---

function wireSearch() {
  const search = document.getElementById('search');
  if (!search) return;

  const onSearch = (e) => {
    const q = e.target.value || '';
    if (!q.trim()) {
      renderSearchResults(''); // resets view
    } else {
      renderSearchResults(q);
    }
  };

  search.addEventListener('input', onSearch);

  // Enter = jump to first match; Esc = clear search
  search.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = search.value.trim();
      if (!q) return;
      const matches = buildGlobalIndex().filter(x => x.textLower.includes(q.toLowerCase()));
      if (matches.length) {
        pageIndex = matches[0].pageIndex;
        renderPage(pageIndex);
        highlightItemByIndex(matches[0].itemIndex);
      }
    } else if (e.key === 'Escape') {
      search.value = '';
      renderSearchResults('');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Pager
  const prev = document.getElementById('prevPage');
  const next = document.getElementById('nextPage');
  const updateNav = () => {
    prev.disabled = pageIndex === 0;
    next.disabled = pageIndex === PAGES.length - 1;
  };
  prev.onclick = () => { if (pageIndex > 0) { pageIndex--; renderPage(pageIndex); updateNav(); } };
  next.onclick = () => { if (pageIndex < PAGES.length - 1) { pageIndex++; renderPage(pageIndex); updateNav(); } };

  renderPage(pageIndex);
  updateNav();
  wireSearch();
});