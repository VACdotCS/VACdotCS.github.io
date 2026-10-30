function switchLang(toLang) {
  const fromLang = toLang === 'en' ? 'ru' : 'en';

  // Toggle active classes on buttons
  const toBtn = document.getElementById(`${toLang}Btn`);
  const fromBtn = document.getElementById(`${fromLang}Btn`);
  if (toBtn) toBtn.classList.add('active');
  if (fromBtn) fromBtn.classList.remove('active');

  // Toggle active classes on content
  document.querySelectorAll('.lang.active').forEach(el => el.classList.remove('active'));
  document.querySelectorAll(`.lang.${toLang}`).forEach(el => el.classList.add('active'));

  // Update URL parameter without reloading
  const newUrl = new URL(window.location);
  newUrl.searchParams.set('lang', toLang);
  window.history.replaceState({}, '', newUrl);
}

function getAssetPrefix() {
  const link = document.querySelector('link[rel="stylesheet"]');
  return link && link.getAttribute('href').startsWith('../') ? '../' : '';
}

const iconQuotes = {
  golang: {
    img: 'imgs/golang.png',
    quote: 'Я люблю Go за его минимализм, ультимативную прагматичность и невероятно приятную модель многопоточности. Это язык, где ты не тратишь время на борьбу с абстракциями, а просто решаешь сложные инженерные задачи с удовольствием и предсказуемым результатом.'
  },
  nodejs: {
    img: 'imgs/nodejs.png',
    quote: 'Первый коммерческий опыт на нём, в классной команде! Асинхронность, Event Loop и дикая экосистема npm. Здесь я научился быстро собирать фичи и деплоить продукты, которыми сразу пользуются люди.'
  },
  python: {
    img: 'imgs/python.png',
    quote: 'Учил его ещё в школе, а в универе и на проектах познал его мощь в ML и статанализе. Пишешь как на псевдокоде, а под капотом ворочаются гигабайты данных. Незаменимый инструмент для Data Science.'
  },
  cpp: {
    img: 'imgs/cpp.png',
    quote: 'С него я начинал, читая ту самую сложную книгу Лафоре. Дочитал до конца и понял: управлять памятью вручную — это настоящее искусство. Он навсегда заложил мощнейший фундамент моего инженерного мышления.'
  },
  react: {
    img: 'imgs/nodejs.png',
    quote: 'React и современная экосистема веб-разработки позволяют строить интерактивные и живые интерфейсы любой сложности, делая взаимодействие пользователя с сервисом мгновенным и приятным.'
  },
  typescript: {
    img: 'imgs/golang.png',
    quote: 'TypeScript вносит строгую дисциплину, безопасность типов и превосходный Developer Experience. Когда типы сходятся, приложение работает как швейцарские часы.'
  }
};

function openIconModal(iconKey) {
  const data = iconQuotes[iconKey];
  if (data) {
    const modalIconImg = document.getElementById('modalIconImg');
    const modalQuoteText = document.getElementById('modalQuoteText');
    const iconModal = document.getElementById('iconModal');
    if (modalIconImg) modalIconImg.src = getAssetPrefix() + data.img;
    if (modalQuoteText) modalQuoteText.textContent = data.quote;
    if (iconModal) iconModal.classList.add('show');
  }
}

function closeIconModal(e) {
  if (e) e.stopPropagation();
  const iconModal = document.getElementById('iconModal');
  if (iconModal) iconModal.classList.remove('show');
}

window.addEventListener('load', () => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get('lang') ?? 'en';
  switchLang(lang);

  const enBtn = document.getElementById('enBtn');
  const ruBtn = document.getElementById('ruBtn');
  if (enBtn) enBtn.onclick = () => switchLang('en');
  if (ruBtn) ruBtn.onclick = () => switchLang('ru');

  // Make specific decor cards zoomable
  document.querySelectorAll('.zoomable').forEach(card => {
    card.onclick = function () {
      this.classList.toggle('zoomed');
    };
  });

  // Scatter easter eggs randomly
  const eggs = Array.from(document.querySelectorAll('.easter-egg-icon'));
  for (let i = eggs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [eggs[i], eggs[j]] = [eggs[j], eggs[i]];
  }
  eggs.forEach((egg, index) => {
    const rand = Math.random();
    const basePct = index * 25;
    egg.style.left = `calc(${basePct + rand * 25}% - ${rand * 60}px)`;
  });
});
