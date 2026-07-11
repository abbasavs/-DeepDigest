// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // Simple i18n (EN / RU / UZ)
  // ==========================
  const LANG_KEY = "lang";
  const translations = {
    en: {
      logo: "DeepDigest",
      recent_chats: "Recent Chats",
      new_chat: "New Chat",
      user_name: "User",
      user_plan: "Free",
      welcome_subtitle: "How can I help you today?",
      welcome: "Hello! I am DeepDigest AI, styled with a modern aesthetic, CSS Grid, and GSAP animations. How can I assist you today in creating beautiful interfaces?",
      input_placeholder: "Message DeepDigest AI...",
      voice_listening: "Listening...",
      voice_error: "Voice recognition error",
      stop_generation: "Stop generating",
      copy_code: "Copy code",
      copied: "Copied!",
      logout: "Logout",
      settings: "Settings",
      theme_toggle: "Toggle theme",
      sidebar_toggle: "Toggle Sidebar",
      attach_image: "Attach image",
      voice_input: "Voice input",
      generate_image: "Generate image from prompt",
      live_preview: "Live Preview",
      close_preview: "Close preview",
      rename: "Rename",
      delete: "Delete",
      enter_new_name: "Enter new name for this chat:",
      sign_in: "Sign In",
      sign_up: "Sign Up",
      welcome_back: "Welcome Back",
      join_us: "Join Us",
      auth_desc_login: "Log into your DeepDigest account",
      auth_desc_register: "Create your DeepDigest account",
      full_name: "Full Name",
      email_address: "Email Address",
      password: "Password",
      forgot_password: "Forgot password?",
      already_have_account: "Already have an account? Login",
      dont_have_account: "Don't have an account? Register",
      new_here: "New Here?",
      register_today: "Register today and discover the next generation of AI interaction.",
      hello_friend: "Hello, Friend!",
      already_member: "Already have an account? Sign in to continue your journey.",
      plan_standard: "Standard Plan",
      plan_pro: "Pro Plan",
      plan_ultra: "Ultra Plan",
      upgrade_plan: "Upgrade Plan",
      choose_your_plan: "Choose Your Plan",
      popular: "Popular",
      select: "Select",
      feature_standard_1: "High-speed AI",
      feature_standard_2: "Basic Image Gen",
      feature_standard_3: "Email Support",
      feature_pro_1: "Ultra-fast response",
      feature_pro_2: "Unlimited Image Gen",
      feature_pro_3: "Priority Support",
      feature_ultra_1: "Quantum Intelligence",
      feature_ultra_2: "Full API Access",
      feature_ultra_3: "24/7 Personal Agent",
      checkout: "Checkout",
      back: "Back",
      selected_plan: "Selected Plan:",
      credit_card: "Credit Card",
      confirm_payment: "Confirm Payment",
      payment_successful: "Payment Successful!",
      welcome_premium: "Welcome to the premium experience.",
      awesome: "Awesome!"
    },
    ru: {
      logo: "DeepDigest",
      recent_chats: "Последние чаты",
      new_chat: "Новый чат",
      user_name: "Пользователь",
      user_plan: "Бесплатно",
      welcome_subtitle: "Чем я могу помочь вам сегодня?",
      welcome: "Привет! Я DeepDigest AI, оформлен в современном стиле с использованием CSS Grid и GSAP анимаций. Чем могу помочь сегодня?",
      input_placeholder: "Сообщение DeepDigest AI...",
      voice_listening: "Слушаю...",
      voice_error: "Ошибка распознавания голоса",
      stop_generation: "Остановить генерацию",
      copy_code: "Копировать код",
      copied: "Скопировано!",
      logout: "Выйти",
      settings: "Настройки",
      theme_toggle: "Переключить тему",
      sidebar_toggle: "Переключить боковую панель",
      attach_image: "Прикрепить изображение",
      voice_input: "Голосовой ввод",
      generate_image: "Создать изображение по промпту",
      live_preview: "Предпросмотр",
      close_preview: "Закрыть предпросмотр",
      rename: "Переименовать",
      delete: "Удалить",
      enter_new_name: "Введите новое имя для этого чата:",
      sign_in: "Войти",
      sign_up: "Регистрация",
      welcome_back: "С возвращением",
      join_us: "Присоединяйтесь к нам",
      auth_desc_login: "Войдите в свой аккаунт DeepDigest",
      auth_desc_register: "Создайте свой аккаунт DeepDigest",
      full_name: "Полное имя",
      email_address: "Электронная почта",
      password: "Пароль",
      forgot_password: "Забыли пароль?",
      already_have_account: "Уже есть аккаунт? Войти",
      dont_have_account: "Нет аккаунта? Зарегистрироваться",
      new_here: "Впервые здесь?",
      register_today: "Зарегистрируйтесь сегодня и откройте для себя следующее поколение взаимодействия с ИИ.",
      hello_friend: "Привет, друг!",
      already_member: "Уже есть аккаунт? Войдите, чтобы продолжить свое путешествие.",
      plan_standard: "Стандартный план",
      plan_pro: "Pro план",
      plan_ultra: "Ultra план",
      upgrade_plan: "Улучшить план",
      choose_your_plan: "Выберите ваш план",
      popular: "Популярный",
      select: "Выбрать",
      feature_standard_1: "Высокоскоростной ИИ",
      feature_standard_2: "Базовая генерация изображений",
      feature_standard_3: "Поддержка по почте",
      feature_pro_1: "Ультра-быстрый ответ",
      feature_pro_2: "Безлимитная генерация изображений",
      feature_pro_3: "Приоритетная поддержка",
      feature_ultra_1: "Квантовый интеллект",
      feature_ultra_2: "Полный доступ к API",
      feature_ultra_3: "Персональный агент 24/7",
      checkout: "Оформление заказа",
      back: "Назад",
      selected_plan: "Выбранный план:",
      credit_card: "Кредитная карта",
      confirm_payment: "Подтвердить оплату",
      payment_successful: "Оплата прошла успешно!",
      welcome_premium: "Добро пожаловать в премиум-режим.",
      awesome: "Отлично!"
    },
    uz: {
      logo: "DeepDigest",
      recent_chats: "So'nggi suhbatlar",
      new_chat: "Yangi suhbat",
      user_name: "Foydalanuvchi",
      user_plan: "Bepul",
      welcome_subtitle: "Bugun sizga qanday yordam bera olaman?",
      welcome: "Salom! Men DeepDigest AIman, zamonaviy estetika, CSS Grid va GSAP animatsiyalari bilan. Bugun qanday yordam bera olaman?",
      input_placeholder: "DeepDigest AI ga xabar...",
      voice_listening: "Eshityapman...",
      voice_error: "Ovozni tanishda xatolik",
      stop_generation: "Yaratishni to'xtatish",
      copy_code: "Kodni nusxalash",
      copied: "Nusxalandi!",
      logout: "Chiqish",
      settings: "Sozlamalar",
      theme_toggle: "Mavzuni o'zgartirish",
      sidebar_toggle: "Yon panelni yashirish/ko'rsatish",
      attach_image: "Rasm biriktirish",
      voice_input: "Ovozli kiritish",
      generate_image: "Prompt orqali rasm yaratish",
      live_preview: "Jonli ko'rib chiqish",
      close_preview: "Yopish",
      rename: "Nomini o'zgartirish",
      delete: "O'chirish",
      enter_new_name: "Ushbu suhbat uchun yangi nom kiriting:",
      sign_in: "Kirish",
      sign_up: "Ro'yxatdan o'tish",
      welcome_back: "Xush kelibsiz",
      join_us: "Bizga qo'shiling",
      auth_desc_login: "DeepDigest hisobingizga kiring",
      auth_desc_register: "DeepDigest hisobingizni yarating",
      full_name: "To'liq ism",
      email_address: "Email manzili",
      password: "Parol",
      forgot_password: "Parolni unutdingizmi?",
      already_have_account: "Hisobingiz bormi? Kirish",
      dont_have_account: "Hisobingiz yo'qmi? Ro'yxatdan o'tish",
      new_here: "Bu yerda yangimisiz?",
      register_today: "Bugun ro'yxatdan o'ting va sun'iy intellekt bilan o'zaro aloqaning yangi avlodini kashf eting.",
      hello_friend: "Salom, do'stim!",
      already_member: "Hisobingiz bormi? Sayohatni davom ettirish uchun kiring.",
      plan_standard: "Standart reja",
      plan_pro: "Pro reja",
      plan_ultra: "Ultra reja",
      upgrade_plan: "Rejani yangilash",
      choose_your_plan: "Rejani tanlang",
      popular: "Ommabop",
      select: "Tanlash",
      feature_standard_1: "Yuqori tezlikdagi AI",
      feature_standard_2: "Asosiy rasm yaratish",
      feature_standard_3: "Email orqali yordam",
      feature_pro_1: "Ultra tezkor javob",
      feature_pro_2: "Cheksiz rasm yaratish",
      feature_pro_3: "Prioritetli yordam",
      feature_ultra_1: "Kvant intellekti",
      feature_ultra_2: "To'liq API ruxsati",
      feature_ultra_3: "24/7 shaxsiy agent",
      checkout: "To'lov",
      back: "Orqaga",
      selected_plan: "Tanlangan reja:",
      credit_card: "Kredit karta",
      confirm_payment: "To'lovni tasdiqlash",
      payment_successful: "To'lov muvaffaqiyatli yakunlandi!",
      welcome_premium: "Premium imkoniyatlarga xush kelibsiz.",
      awesome: "Ajoyib!"
    },
  };

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key === "user_name") {
        const savedName = localStorage.getItem("user_name");
        if (savedName) { el.textContent = savedName; return; }
      }
      const txt = (translations[lang] && translations[lang][key]) || el.textContent;
      el.textContent = txt;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const txt = (translations[lang] && translations[lang][key]) || "";
      el.setAttribute("placeholder", txt);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      const txt = (translations[lang] && translations[lang][key]) || el.getAttribute("title") || "";
      el.setAttribute("title", txt);
    });
  }

  const langSelectBtn = document.getElementById("lang-select-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const currentLangText = document.getElementById("current-lang-text");
  const langItems = document.querySelectorAll(".lang-item");

  document.addEventListener("click", (e) => {
    if (langSelectBtn && langDropdown) {
      if (!langSelectBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        closeLangDropdown();
      }
    }
  });

  if (langSelectBtn && langDropdown) {
    langSelectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      langDropdown.classList.contains("active") ? closeLangDropdown() : openLangDropdown();
    });
  }

  function openLangDropdown() {
    if (!langDropdown) return;
    langDropdown.classList.add("active");
    gsap.set(langDropdown, { visibility: "visible" });
    gsap.fromTo(langDropdown, { opacity: 0, y: -10, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
  }

  function closeLangDropdown() {
    if (!langDropdown || !langDropdown.classList.contains("active")) return;
    langDropdown.classList.remove("active");
    gsap.to(langDropdown, { opacity: 0, y: -10, scale: 0.95, duration: 0.2, ease: "power2.in", onComplete: () => gsap.set(langDropdown, { visibility: "hidden" }) });
  }

  function initLang() {
    const saved = localStorage.getItem(LANG_KEY) || "en";
    if (currentLangText) currentLangText.textContent = saved.toUpperCase();
    applyTranslations(saved);
  }

  if (langItems) {
    langItems.forEach((item) => {
      item.addEventListener("click", () => {
        const v = item.getAttribute("data-lang");
        localStorage.setItem(LANG_KEY, v);
        if (currentLangText) currentLangText.textContent = v.toUpperCase();
        applyTranslations(v);
        closeLangDropdown();
      });
    });
  }

  initLang();

  // ==========================================================================
  // Setup Profile Avatar & Username
  // ==========================================================================
  const savedUserName = localStorage.getItem("user_name");
  if (savedUserName) {
    document.querySelectorAll(".user-name").forEach((el) => (el.textContent = savedUserName));
    document.querySelectorAll(".avatar").forEach((el) => {
      el.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(savedUserName)}&background=10b981&color=fff&length=2`;
    });
  }

  // ==========================================================================
  // GSAP Custom Cursor
  // ==========================================================================
  const cursor = document.querySelector(".custom-cursor");
  const follower = document.querySelector(".custom-cursor-follower");

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  gsap.set(follower, { xPercent: -50, yPercent: -50 });

  window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
  });

  // ==========================================================================
  // Magnetic Button Logic
  // ==========================================================================
  document.querySelectorAll(".magnetic-element").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.4, y: y * 0.4, duration: 0.4, ease: "power3.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    });
  });

  document.querySelectorAll("button, a, .history-item, input, textarea").forEach((el) => {
    el.addEventListener("mouseenter", () => document.body.classList.add("hovering"));
    el.addEventListener("mouseleave", () => document.body.classList.remove("hovering"));
  });

  // ==========================================================================
  // Theme Toggle
  // ==========================================================================
  const themeToggle = document.getElementById("theme-toggle");
  const THEME_KEY = "theme";

  function applyTheme(theme) {
    if (document.body.classList.contains("auth-body")) theme = "dark";
    document.documentElement.setAttribute("data-theme", theme);
    if (!themeToggle) return;
    const icon = themeToggle.querySelector("i");
    if (icon) icon.className = theme === "light" ? "ri-sun-line" : "ri-moon-line";
    themeToggle.setAttribute("aria-pressed", theme === "dark");
  }

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    let theme = saved;
    if (!theme) {
      theme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) ? "light" : "dark";
    }
    applyTheme(theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  initTheme();

  // ==========================================================================
  // Sidebar Toggle
  // ==========================================================================
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const appContainer = document.querySelector(".app-container");
  const sidebar = document.querySelector(".sidebar");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle("visible");
      } else {
        appContainer.classList.toggle("sidebar-collapsed");
      }
    });
  }

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && sidebar && sidebarToggle &&
      !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove("visible");
    }
  });

  // ==========================================================================
  // GSAP Initial Load Animations
  // ==========================================================================
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

  tl.fromTo(".sidebar-header", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.2 })
    .fromTo(".history-item", { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.05 }, "-=0.6")
    .fromTo(".user-profile", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
    .fromTo(".main-header", { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.8")
    .fromTo(".cube-scene", { scale: 0, rotationX: 180 }, { scale: 1, rotationX: 0, duration: 1, ease: "back.out(1.5)" }, "-=0.4")
    .to(".message", { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.2)" }, "-=0.4")
    .fromTo(".reveal-text",
      { y: 20, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
      { y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, stagger: 0.1 },
      "-=0.6")
    .fromTo(".input-container-wrapper", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");

  gsap.to(".bg-text-track", { x: "-50%", duration: 40, repeat: -1, ease: "none" });

  // ==========================================================================
  // Chat Variables & State — ALL declared BEFORE any function calls
  // ==========================================================================
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const chatMessages = document.getElementById("chat-messages");
  const chatContainer = document.querySelector(".chat-container");
  const inputContainer = document.querySelector(".input-container");
  const inputWrapper = document.querySelector(".input-wrapper");
  const historyList = document.getElementById("history-list");
  const newChatBtn = document.getElementById("new-chat-btn");
  const welcomeScreen = document.getElementById("welcome-screen");

  // FIX 1: MAX_CHATS_STORED declared HERE — before saveChats/createNewChat are ever called
  const MAX_CHATS_STORED = 15;

  let chats = [];
  let currentChatId = null;
  let currentImageData = null;
  let voiceOutputBtn = null;

  const defaultSystemPrompt = {
    role: "system",
    content: "You are DeepDigest AI, an elegant, highly intelligent AI assistant. Give detailed, comprehensive, and well-structured responses. Explain concepts thoroughly, provide examples when helpful, and format your answers with clear sections, bullet points, or numbered lists when appropriate. Be informative and in-depth rather than brief—users appreciate thorough, high-quality answers. When the user asks for code, a website, a landing page, a portfolio, a dashboard, a UI, or anything frontend-related, default to generating complete working code instead of partial snippets. Prefer delivering a full HTML, CSS, and JavaScript solution that can run immediately in a browser. For website requests such as a portfolio, always generate a complete multi-section page with polished styling, responsive layout, animations, and interactive JavaScript where useful. Put HTML, CSS, and JavaScript in separate fenced code blocks using the languages html, css, and javascript. Avoid placeholders, TODO comments, and unfinished sections. Always finish every code block completely, including closing tags, final braces, responsive styles, and any required JavaScript. Make the result production-like, visually complete, and ready for preview instead of giving short examples unless the user explicitly asks for a tiny snippet.",
  };

  // ==========================================================================
  // Marked & Highlight.js Setup
  // ==========================================================================
  if (typeof marked !== "undefined") {
    const renderer = new marked.Renderer();
    renderer.code = function (code, language) {
      let actualCode = code;
      let lang = language;
      if (typeof code === "object" && code !== null) {
        actualCode = code.text;
        lang = code.lang;
      }
      lang = lang || "plaintext";
      const validLang = hljs.getLanguage(lang) ? lang : "plaintext";
      const highlighted = hljs.highlight(actualCode, { language: validLang }).value;
      return `
        <div class="code-block-wrapper">
          <div class="code-block-header">
            <span class="code-lang">${lang}</span>
            <button class="copy-code-btn magnetic-element">
              <i class="ri-clipboard-line"></i> Copy code
            </button>
          </div>
          <pre><code class="hljs language-${validLang}">${highlighted}</code></pre>
        </div>`;
    };
    marked.use({ renderer });
  }

  // Copy code button handler
  document.addEventListener("click", (e) => {
    const copyBtn = e.target.closest(".copy-code-btn");
    if (copyBtn) {
      const codeEl = copyBtn.closest(".code-block-wrapper")?.querySelector("code");
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent).then(() => {
          const orig = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="ri-check-line"></i> Copied!';
          setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
        }).catch(console.error);
      }
    }
  });

  // ==========================================================================
  // Preview Modal
  // ==========================================================================
  const previewModal = document.getElementById("preview-modal");
  const closePreviewBtn = document.getElementById("close-preview-btn");
  const previewIframe = document.getElementById("preview-iframe");

  function openPreviewModal(htmlContent) {
    if (!previewModal || !previewIframe) return;
    const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
    doc.open(); doc.write(htmlContent); doc.close();
    previewModal.classList.add("active");
    previewModal.style.pointerEvents = "auto";
    document.body.style.overflow = "hidden";
  }

  function closePreviewModal() {
    if (!previewModal || !previewIframe) return;
    previewModal.classList.remove("active");
    previewModal.style.pointerEvents = "none";
    document.body.style.overflow = "";
    setTimeout(() => {
      const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
      doc.open(); doc.write(""); doc.close();
    }, 300);
  }

  if (closePreviewBtn) closePreviewBtn.addEventListener("click", closePreviewModal);
  if (previewModal) {
    previewModal.style.pointerEvents = "none";
    previewModal.addEventListener("click", (e) => { if (e.target === previewModal) closePreviewModal(); });
  }

  // ==========================================================================
  // Storage Functions
  // ==========================================================================
  function saveChats() {
    if (chats.length > MAX_CHATS_STORED) {
      const sorted = [...chats].sort((a, b) => parseInt(a.id || 0) - parseInt(b.id || 0));
      const toRemove = sorted.slice(0, chats.length - MAX_CHATS_STORED);
      const idsToRemove = new Set(toRemove.map((c) => c.id).filter((id) => id !== currentChatId));
      chats = chats.filter((c) => !idsToRemove.has(c.id));
    }
    try {
      localStorage.setItem("deepdigest_chats", JSON.stringify(chats));
    } catch (e) {
      if (e.name === "QuotaExceededError") {
        while (chats.length > 3) {
          const sorted = [...chats].sort((a, b) => parseInt(a.id || 0) - parseInt(b.id || 0));
          const oldestId = sorted[0]?.id;
          if (!oldestId) break;
          chats = chats.filter((c) => c.id !== oldestId);
          if (currentChatId === oldestId && chats.length > 0) currentChatId = chats[0].id;
          try {
            localStorage.setItem("deepdigest_chats", JSON.stringify(chats));
            renderHistoryList(); renderCurrentChat(); return;
          } catch (e2) { if (e2.name !== "QuotaExceededError") throw e2; }
        }
        chats.forEach((chat) => {
          chat.messages?.forEach((msg) => {
            if (msg.generatedImage?.startsWith("data:")) msg.generatedImage = null;
            if (Array.isArray(msg.content)) {
              msg.content.forEach((c) => { if (c.image_url?.url?.startsWith?.("data:")) c.image_url.url = null; });
            }
          });
        });
        try {
          localStorage.setItem("deepdigest_chats", JSON.stringify(chats));
          renderHistoryList(); renderCurrentChat();
        } catch (e3) { console.warn("Storage full. Could not save chats.", e3); }
      } else { throw e; }
    }
  }

  function loadChats() {
    const saved = localStorage.getItem("deepdigest_chats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        chats = Array.isArray(parsed) ? parsed : [];
      } catch (e) { console.error("Could not parse chats.", e); chats = []; }
    } else { chats = []; }

    chats = chats
      .filter((chat) => chat && typeof chat === "object")
      .map((chat) => ({
        id: typeof chat.id === "string" ? chat.id : Date.now().toString(),
        title: typeof chat.title === "string" && chat.title.trim() ? chat.title : "New Chat",
        messages: Array.isArray(chat.messages) ? chat.messages : [defaultSystemPrompt],
      }));
  }

  // ==========================================================================
  // Chat Management
  // ==========================================================================
  function createNewChat() {
    currentChatId = Date.now().toString();
    const newChat = { id: currentChatId, title: "New Chat", messages: [defaultSystemPrompt] };
    chats.unshift(newChat);
    saveChats();
    renderHistoryList();
    renderCurrentChat();
  }

  function selectChat(id) {
    currentChatId = id;
    renderHistoryList();
    renderCurrentChat();
  }

  function deleteChat(id, event) {
    event.stopPropagation();
    chats = chats.filter((chat) => chat.id !== id);
    if (chats.length === 0) {
      createNewChat();
    } else if (currentChatId === id) {
      selectChat(chats[0].id);
    } else {
      saveChats();
      renderHistoryList();
    }
  }

  function renameChat(id, event) {
    event.stopPropagation();
    const chat = chats.find((c) => c.id === id);
    if (chat) {
      const currentLang = localStorage.getItem(LANG_KEY) || "en";
      const promptText = (translations[currentLang] && translations[currentLang].enter_new_name) || "Enter new name for this chat:";
      const newTitle = prompt(promptText, chat.title);
      if (newTitle !== null && newTitle.trim() !== "") {
        chat.title = newTitle.trim();
        saveChats();
        renderHistoryList();
      }
    }
  }

  function getCurrentChat() {
    return chats.find((c) => c.id === currentChatId);
  }

  // ==========================================================================
  // UI Rendering
  // ==========================================================================
  function renderHistoryList() {
    if (!historyList) return;
    historyList.innerHTML = "";
    chats.forEach((chat) => {
      const li = document.createElement("li");
      li.className = `history-item ${chat.id === currentChatId ? "active" : ""}`;
      li.addEventListener("click", (e) => {
        if (!e.target.closest(".history-dropdown") && !e.target.closest(".history-actions-btn")) {
          selectChat(chat.id);
        }
      });
      li.innerHTML = `
        <div class="history-item-content"><span>${escapeHTML(chat.title)}</span></div>
        <button class="history-actions-btn" aria-label="Open chat options"><i class="ri-more-2-line"></i></button>
        <div class="history-dropdown">
          <button class="dropdown-item rename-btn"><i class="ri-edit-line"></i> <span data-i18n="rename">Rename</span></button>
          <button class="dropdown-item delete-btn"><i class="ri-delete-bin-line"></i> <span data-i18n="delete">Delete</span></button>
        </div>`;

      const actionsBtn = li.querySelector(".history-actions-btn");
      const dropdown = li.querySelector(".history-dropdown");
      const renameBtn = li.querySelector(".rename-btn");
      const deleteBtn = li.querySelector(".delete-btn");

      actionsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.querySelectorAll(".history-dropdown.active").forEach((d) => { if (d !== dropdown) d.classList.remove("active"); });
        dropdown.classList.toggle("active");
      });
      renameBtn.addEventListener("click", (e) => { dropdown.classList.remove("active"); renameChat(chat.id, e); });
      deleteBtn.addEventListener("click", (e) => { dropdown.classList.remove("active"); deleteChat(chat.id, e); });

      historyList.appendChild(li);
    });
    applyTranslations(localStorage.getItem(LANG_KEY) || "en");
  }

  function renderCurrentChat() {
    if (!chatMessages) return;
    chatMessages.innerHTML = "";
    const currentChat = getCurrentChat();

    if (currentChat && currentChat.messages) {
      if (currentChat.messages.length <= 1) {
        welcomeScreen.classList.remove("hidden");
        chatMessages.classList.add("hidden");
      } else {
        welcomeScreen.classList.add("hidden");
        chatMessages.classList.remove("hidden");
      }
      currentChat.messages.forEach((msg) => {
        if (msg.role === "system") return;
        let displayContent = msg.content;
        let displayImage = null;
        if (Array.isArray(msg.content)) {
          const textObj = msg.content.find((item) => item.type === "text");
          displayContent = textObj ? textObj.text : "";
          const imgObj = msg.content.find((item) => item.type === "image_url");
          if (imgObj) displayImage = imgObj.image_url?.url || imgObj.image_url;
        }
        if (msg.generatedImage) displayImage = msg.generatedImage;
        appendMessage(displayContent, msg.role === "user" ? "user" : "bot", false, displayImage, {
          responseId: msg.responseId || null,
          incomplete: Boolean(msg.incomplete),
        });
      });
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
    updateVoiceOutputButtonState();
  }

  // Close history dropdowns on outside click
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".history-dropdown") && !e.target.closest(".history-actions-btn")) {
      document.querySelectorAll(".history-dropdown.active").forEach((d) => d.classList.remove("active"));
    }
  });

  if (newChatBtn) newChatBtn.addEventListener("click", createNewChat);

  // ==========================================================================
  // FIX 2: Initialize State AFTER all functions are defined
  // ==========================================================================
  loadChats();
  if (chats.length === 0) {
    createNewChat();
  } else {
    const firstChatId = chats[0] && chats[0].id;
    firstChatId ? selectChat(firstChatId) : createNewChat();
  }

  // ==========================================================================
  // Image Upload
  // ==========================================================================
  const fileInput = document.getElementById("file-input");
  const attachBtn = document.getElementById("attach-btn");
  const imagePreviewContainer = document.getElementById("image-preview-container");
  const imagePreview = document.getElementById("image-preview");
  const removeImageBtn = document.getElementById("remove-image-btn");

  if (attachBtn) attachBtn.addEventListener("click", () => fileInput.click());

  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          currentImageData = ev.target.result;
          imagePreview.src = currentImageData;
          imagePreviewContainer.classList.remove("hidden");
          sendBtn.removeAttribute("disabled");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (removeImageBtn) {
    removeImageBtn.addEventListener("click", () => {
      currentImageData = null;
      imagePreview.src = "";
      imagePreviewContainer.classList.add("hidden");
      if (fileInput) fileInput.value = "";
      if (chatInput.value.trim().length === 0) sendBtn.setAttribute("disabled", "true");
    });
  }

  // ==========================================================================
  // Image Generation Button
  // ==========================================================================
  const generateImageBtn = document.getElementById("generate-image-btn");
  if (generateImageBtn) {
    generateImageBtn.addEventListener("click", () => {
      const prompt = chatInput.value.trim();
      if (!prompt) {
        chatInput.focus();
        chatInput.placeholder = "Type a description of the image to generate...";
        setTimeout(() => { chatInput.setAttribute("placeholder", "Message DeepDigest AI..."); }, 3000);
        return;
      }
      generateImage(prompt);
    });
  }

  if (inputContainer && chatInput) {
    inputContainer.addEventListener("click", (e) => {
      if (
        e.target.closest("button") ||
        e.target.closest("input") ||
        e.target.closest("textarea") ||
        e.target.closest("#image-preview-container")
      ) {
        return;
      }
      chatInput.focus();
    });
  }

  if (inputWrapper && chatInput) {
    inputWrapper.addEventListener("click", (e) => {
      if (!e.target.closest("textarea")) chatInput.focus();
    });
  }

  // ==========================================================================
  // FIX 3: Input handlers — enable/disable send button correctly
  // ==========================================================================
  chatInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
    if (this.value.trim().length > 0 || currentImageData) {
      sendBtn.removeAttribute("disabled");
    } else {
      sendBtn.setAttribute("disabled", "true");
    }
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (chatInput.value.trim().length > 0 || currentImageData) sendMessage();
    }
  });

  sendBtn.addEventListener("click", () => {
    if (chatInput.value.trim().length > 0 || currentImageData) sendMessage();
  });

  // ==========================================================================
  // Image Generation via OpenRouter
  // ==========================================================================
  async function generateImage(prompt) {
    const currentChat = getCurrentChat();
    if (!currentChat) return;

    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.setAttribute("disabled", "true");

    currentChat.messages.push({ role: "user", content: `Generate image: ${prompt}` });
    saveChats();
    renderCurrentChat();
    renderHistoryList();

    const typingId = showTypingIndicator();
    const apiKey = (typeof window !== "undefined" && window.OPENROUTER_API_KEY) || "";

    if (!apiKey) {
      removeTypingIndicator(typingId);
      currentChat.messages.push({ role: "assistant", content: "Please add OPENROUTER_API_KEY in scripts/config.js for image generation." });
      saveChats(); renderCurrentChat(); return;
    }

    const imageModels = [
      "black-forest-labs/flux.2-klein-4b",
      "black-forest-labs/flux.2-pro",
    ];

    function extractImageResult(data) {
      let imageUrl = null;
      let contentText = "";
      const msg = data.choices?.[0]?.message;

      if (msg) {
        if (msg.images && msg.images.length > 0) {
          const img = msg.images[0];
          imageUrl =
            (typeof img.image_url === "string" && img.image_url) ||
            img.image_url?.url ||
            img.url ||
            (typeof img === "string" && img);
        } else if (msg.content) {
          contentText = typeof msg.content === "string" ? msg.content : "";
          if (Array.isArray(msg.content)) {
            const imgPart = msg.content.find((c) => c.type === "image_url" || c.type === "image");
            if (imgPart) imageUrl = imgPart.image_url?.url || imgPart.url;
          }
          if (!imageUrl && contentText) {
            const mdMatch = contentText.match(/!\[.*?\]\((data:[^)]+)\)/);
            const urlMatch = contentText.match(/(https?:\/\/[^\s)]+)/);
            if (mdMatch) imageUrl = mdMatch[1];
            else if (urlMatch) imageUrl = urlMatch[1];
          }
        }
      }

      if (!imageUrl && data.data?.[0]?.url) imageUrl = data.data[0].url;
      if (imageUrl && typeof imageUrl === "string") {
        imageUrl = imageUrl.replace(/^["']|["']$/g, "").trim();
      }

      return { imageUrl, contentText };
    }

    async function requestImage(model) {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
          "HTTP-Referer": window.location.origin || "http://localhost:4173",
          "X-Title": "DeepDigest",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "user", content: prompt }],
          modalities: ["image"],
          max_tokens: 1000,
        }),
      });

      const rawText = await res.text();
      let data = {};

      try {
        data = rawText ? JSON.parse(rawText) : {};
      } catch {
        data = { rawText };
      }

      if (!res.ok) {
        const providerMessage =
          data?.error?.metadata?.raw ||
          data?.error?.metadata?.reason ||
          data?.error?.metadata?.provider_name ||
          data?.error?.message ||
          data?.message ||
          rawText ||
          `API error ${res.status}`;
        throw new Error(`${model}: ${providerMessage}`);
      }

      return data;
    }

    try {
      let data = null;
      let lastError = null;

      for (const model of imageModels) {
        try {
          data = await requestImage(model);
          break;
        } catch (err) {
          lastError = err;
          const msg = String(err.message || err).toLowerCase();
          const shouldRetry =
            msg.includes("provider returned error") ||
            msg.includes("temporarily unavailable") ||
            msg.includes("timeout") ||
            msg.includes("overloaded");
          if (!shouldRetry) break;
        }
      }

      removeTypingIndicator(typingId);

      if (!data) {
        throw lastError || new Error("Image generation failed.");
      }

      const { imageUrl, contentText } = extractImageResult(data);

      if (imageUrl) {
        currentChat.messages.push({
          role: "assistant",
          content: `Generated image:`,
          generatedImage: imageUrl,
        });
        if (currentChat.title === "New Chat") {
          currentChat.title = "Image: " + prompt.substring(0, 20) + (prompt.length > 20 ? "..." : "");
          renderHistoryList();
        }
      } else {
        currentChat.messages.push({
          role: "assistant",
          content: "Image generation failed: " + (data.error?.message || contentText || JSON.stringify(data)),
        });
      }
      saveChats(); renderCurrentChat();
    } catch (err) {
      removeTypingIndicator(typingId);
      currentChat.messages.push({ role: "assistant", content: "Failed to generate image: " + (err.message || String(err)) });
      saveChats(); renderCurrentChat();
    }
  }

  function isImageRequest(text) {
    const t = text.toLowerCase().trim();
    return (
      t.startsWith("generate image") || t.startsWith("draw ") || t.startsWith("draw a ") ||
      t.startsWith("draw an ") || t.startsWith("create image") || t.startsWith("image of ") ||
      t.startsWith("picture of ") || t.startsWith("generate an image") || t.startsWith("generate a image") ||
      /^(make|create)\s+(an?\s+)?(image|picture)/i.test(t)
    );
  }

  function extractImagePrompt(text) {
    const t = text.trim();
    const patterns = [
      /^generate\s+(?:an?\s+)?image\s+(?:of\s+)?(.*)/i,
      /^draw\s+(?:an?\s+)?(.*)/i,
      /^create\s+(?:an?\s+)?image\s+(?:of\s+)?(.*)/i,
      /^image\s+of\s+(.*)/i,
      /^picture\s+of\s+(.*)/i,
      /^(?:make|create)\s+(?:an?\s+)?(?:image|picture)\s+(?:of\s+)?(.*)/i,
    ];
    for (const p of patterns) {
      const m = t.match(p);
      if (m && m[1]) return m[1].trim();
    }
    return t;
  }

  // ==========================================================================
  // FIX 4: sendMessage — corrected API endpoint, model & response parsing
  // ==========================================================================
  function extractResponseText(data) {
    if (typeof data.output_text === "string" && data.output_text) {
      return data.output_text;
    }

    if (Array.isArray(data.output)) {
      const textParts = [];
      data.output.forEach((item) => {
        if (item.type === "message" && Array.isArray(item.content)) {
          item.content.forEach((contentItem) => {
            if (contentItem.type === "output_text" && contentItem.text) {
              textParts.push(contentItem.text);
            }
          });
        }
      });
      return textParts.join("");
    }

    if (data.error) {
      return "Error: " + (data.error.message || JSON.stringify(data.error));
    }

    return "Sorry, I received an unexpected response format.";
  }

  function buildResponsesInput(messages) {
    return messages.filter((msg) => msg.role !== "system").map((msg) => {
      const textType = msg.role === "assistant" ? "output_text" : "input_text";

      if (Array.isArray(msg.content)) {
        return {
          role: msg.role,
          content: msg.content.map((item) => {
            if (item.type === "text") {
              return { type: textType, text: item.text || "" };
            }
            if (item.type === "image_url") {
              return {
                type: "input_image",
                image_url: item.image_url?.url || item.image_url,
              };
            }
            return null;
          }).filter(Boolean),
        };
      }

      return {
        role: msg.role,
        content: [{ type: textType, text: String(msg.content || "") }],
      };
    });
  }

  async function requestAssistantResponse(currentChat, apiKey, extraBody = {}) {
    const systemMessage = currentChat.messages.find((msg) => msg.role === "system");
    const requestBody = {
      model: "gpt-5",
      instructions: String(systemMessage?.content || ""),
      input: buildResponsesInput(currentChat.messages),
      text: {
        format: { type: "text" },
        verbosity: "high",
      },
      reasoning: {
        effort: "medium",
        summary: "auto",
      },
      store: true,
      include: ["reasoning.encrypted_content"],
      max_output_tokens: 12000,
      ...extraBody,
    };

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
      body: JSON.stringify(requestBody),
    });

    return response.json();
  }

  async function continueAssistantResponse(responseId) {
    const currentChat = getCurrentChat();
    if (!currentChat || !responseId) return;

    const apiKey = (typeof window !== "undefined" && window.OPENAI_API_KEY) || "";
    if (!apiKey) {
      appendMessage("Please add your OpenAI API key in scripts/config.js.", "bot");
      return;
    }

    const typingId = showTypingIndicator();

    try {
      const data = await requestAssistantResponse(currentChat, apiKey, {
        previous_response_id: responseId,
        input: "Continue exactly from where you stopped. Finish the response fully. If you were generating code, complete every remaining HTML, CSS, and JavaScript block with no omissions.",
      });

      removeTypingIndicator(typingId);

      let aiText = extractResponseText(data);
      const incomplete = data.incomplete_details?.reason === "max_output_tokens";
      if (incomplete) {
        aiText += "\n\n[Response was cut off because it reached the token limit. Continue below.]";
      } else if (data.incomplete_details?.reason === "content_filter") {
        aiText += "\n\n[Part of the response was filtered by the model.]";
      }

      currentChat.messages.push({
        role: "assistant",
        content: aiText,
        responseId: data.id || null,
        incomplete,
      });
      saveChats();
      renderCurrentChat();
    } catch (error) {
      removeTypingIndicator(typingId);
      appendMessage("Sorry, I couldn't continue the response.", "bot");
      console.error("Continue API Error:", error);
    }
  }

  function sendMessage() {
    const text = chatInput.value.trim();
    const currentChat = getCurrentChat();
    if (!currentChat) return;

    if (isImageRequest(text)) {
      const prompt = extractImagePrompt(text);
      if (prompt) { generateImage(prompt); return; }
    }

    chatInput.value = "";
    chatInput.style.height = "auto";
    sendBtn.setAttribute("disabled", "true");

    let messageContent = text;
    if (currentImageData) {
      messageContent = [
        { type: "text", text: text || "Please describe this image." },
        { type: "image_url", image_url: { url: currentImageData } },
      ];
      currentImageData = null;
      if (imagePreview) imagePreview.src = "";
      if (imagePreviewContainer) imagePreviewContainer.classList.add("hidden");
      if (fileInput) fileInput.value = "";
    }

    currentChat.messages.push({ role: "user", content: messageContent });
    saveChats();
    renderCurrentChat();
    renderHistoryList();

    const typingId = showTypingIndicator();

    const apiKey = (typeof window !== "undefined" && window.OPENAI_API_KEY) || "";
    if (!apiKey) {
      removeTypingIndicator(typingId);
      appendMessage("Please add your OpenAI API key in scripts/config.js.", "bot");
      return;
    }

    requestAssistantResponse(currentChat, apiKey)
      .then((data) => {
        removeTypingIndicator(typingId);
        let aiText = extractResponseText(data);
        const incomplete = data.incomplete_details?.reason === "max_output_tokens";
        if (incomplete) {
          aiText += "\n\n[Response was cut off because it reached the token limit. Continue below.]";
        } else if (data.incomplete_details?.reason === "content_filter") {
          aiText += "\n\n[Part of the response was filtered by the model.]";
        }

        if (aiText) {
          if (currentChat.title === "New Chat") {
            currentChat.title = aiText.substring(0, 30) + (aiText.length > 30 ? "..." : "");
            renderHistoryList();
          }
          currentChat.messages.push({
            role: "assistant",
            content: aiText,
            responseId: data.id || null,
            incomplete,
          });
          saveChats();
        }
        renderCurrentChat();
      })
      .catch((error) => {
        removeTypingIndicator(typingId);
        console.error("API Error:", error);
        appendMessage("Sorry, I encountered an error connecting to the API.", "bot");
      });
  }

  // ==========================================================================
  // appendMessage
  // ==========================================================================
  function appendMessage(text, sender, shouldScroll = true, imageUrl = null, options = {}) {
    const wrapper = document.createElement("div");
    wrapper.className = `message ${sender}`;

    let avatarHTML = "";
    if (sender === "bot") {
      avatarHTML = `<div class="message-avatar"><img src="./images/bot.svg" alt=""></div>`;
    } else {
      const uName = localStorage.getItem("user_name") || "User";
      const userAvatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(uName)}&background=ffffff&color=000&length=2`;
      avatarHTML = `<div class="message-avatar" style="background-image: url('${userAvatarUrl}'); background-size: cover;"></div>`;
    }

    let parsedContent = "";
    if (sender === "bot" && typeof marked !== "undefined") {
      parsedContent = marked.parse(text || "");
    } else {
      parsedContent = `<p>${escapeHTML(text || "")}</p>`;
    }

    let imageHTML = "";
    if (imageUrl) {
      const safeUrl = String(imageUrl).replace(/"/g, "&quot;");
      imageHTML = `<div class="message-image"><img src="${safeUrl}" alt="Generated image" loading="lazy" style="max-width:100%;max-height:400px;border-radius:8px;margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);object-fit:contain;"></div>`;
    }

    wrapper.innerHTML = `${avatarHTML}<div class="message-content">${imageHTML}${parsedContent}</div>`;

    // Add preview button for HTML code blocks
    if (sender === "bot") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = parsedContent;
      const htmlBlocks = tempDiv.querySelectorAll("code.language-html, code.language-xml");
      if (htmlBlocks.length > 0) {
        let combinedHtml = "", combinedCss = "", combinedJs = "";
        htmlBlocks.forEach((b) => (combinedHtml += b.textContent + "\n"));
        tempDiv.querySelectorAll("code.language-css").forEach((b) => (combinedCss += b.textContent + "\n"));
        tempDiv.querySelectorAll("code.language-javascript, code.language-js").forEach((b) => (combinedJs += b.textContent + "\n"));
        let finalDoc = combinedHtml.trim();

        if (!/<html[\s>]/i.test(finalDoc)) {
          finalDoc = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Preview</title>
</head>
<body>
${finalDoc}
</body>
</html>`;
        }

        if (combinedCss) {
          if (/<\/head>/i.test(finalDoc)) {
            finalDoc = finalDoc.replace(/<\/head>/i, `<style>\n${combinedCss}\n</style>\n</head>`);
          } else {
            finalDoc += `\n<style>\n${combinedCss}\n</style>`;
          }
        }

        if (combinedJs) {
          if (/<\/body>/i.test(finalDoc)) {
            finalDoc = finalDoc.replace(/<\/body>/i, `<script>\n${combinedJs}\n<\/script>\n</body>`);
          } else {
            finalDoc += `\n<script>\n${combinedJs}\n<\/script>`;
          }
        }

        const previewBtn = document.createElement("button");
        previewBtn.className = "unified-preview-btn magnetic-element";
        previewBtn.style.cssText = "margin-top:16px;background:var(--accent-gradient);border:none;color:#fff;font-size:0.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 24px;border-radius:8px;transition:all 0.3s ease;box-shadow:0 4px 15px rgba(157,0,255,0.3);width:100%;";
        previewBtn.innerHTML = '<i class="ri-play-fill" style="font-size:1.2rem;"></i> Preview Rendered Website';
        previewBtn.addEventListener("click", () => openPreviewModal(finalDoc));
        wrapper.querySelector(".message-content").appendChild(previewBtn);
      }

      if (options.incomplete && options.responseId) {
        const continueBtn = document.createElement("button");
        continueBtn.className = "continue-response-btn magnetic-element";
        continueBtn.style.cssText = "margin-top:12px;background:transparent;border:1px solid rgba(157,0,255,0.35);color:var(--text-primary);font-size:0.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border-radius:10px;transition:all 0.25s ease;width:fit-content;";
        continueBtn.innerHTML = '<i class="ri-arrow-down-circle-line"></i> Continue';
        continueBtn.addEventListener("click", () => continueAssistantResponse(options.responseId));
        wrapper.querySelector(".message-content").appendChild(continueBtn);
      }
    }

    chatMessages.appendChild(wrapper);
    gsap.fromTo(wrapper, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    if (shouldScroll) scrollToBottom();
  }

  // ==========================================================================
  // Typing Indicator
  // ==========================================================================
  function showTypingIndicator() {
    const id = "typing-" + Date.now();
    const wrapper = document.createElement("div");
    wrapper.className = "message bot";
    wrapper.id = id;
    wrapper.innerHTML = `
      <div class="message-avatar"><img src="./images/bot.svg" alt=""></div>
      <div class="message-content">
        <div class="typing-indicator">
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
          <span class="typing-dot"></span>
        </div>
      </div>`;
    chatMessages.appendChild(wrapper);
    gsap.fromTo(wrapper, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power1.out" });
    scrollToBottom();
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function scrollToBottom() {
    chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
  }

  function escapeHTML(str) {
    return String(str).replace(/[&<>'"]/g, (tag) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[tag] || tag);
  }

  // ==========================================================================
  // Voice Input & Output
  // ==========================================================================
  const voiceInputBtn = document.getElementById("voice-input-btn");
  voiceOutputBtn = document.getElementById("voice-output-btn");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = null;
  let isListening = false;

  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    const langMap = { en: "en-US", ru: "ru-RU", uz: "uz-UZ" };
    recognition.lang = langMap[localStorage.getItem(LANG_KEY) || "en"] || "en-US";

    recognition.onstart = () => {
      isListening = true;
      voiceInputBtn.classList.add("listening");
      voiceInputBtn.style.backgroundColor = "rgba(157, 0, 255, 0.5)";
      voiceInputBtn.title = "Listening... Click to stop";
    };
    recognition.onresult = (event) => {
      if (!event.results || !chatInput) return;
      let fullTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i];
        if (result && result[0]) {
          fullTranscript += result[0].transcript;
          if (result.isFinal) fullTranscript += " ";
        }
      }
      const text = fullTranscript.trim();
      if (text) {
        chatInput.value = text;
        chatInput.focus();
        chatInput.style.height = "auto";
        chatInput.style.height = chatInput.scrollHeight + "px";
        sendBtn.removeAttribute("disabled");
      }
    };
    recognition.onend = () => {
      isListening = false;
      voiceInputBtn.classList.remove("listening");
      voiceInputBtn.style.backgroundColor = "";
      voiceInputBtn.title = "Voice input";
    };
    recognition.onerror = (event) => {
      if (event.error !== "aborted") console.error("Speech recognition error:", event.error);
      isListening = false;
      voiceInputBtn.classList.remove("listening");
      voiceInputBtn.style.backgroundColor = "";
      voiceInputBtn.title = "Voice input";
    };
  } else if (voiceInputBtn) {
    voiceInputBtn.style.opacity = "0.5";
    voiceInputBtn.style.cursor = "not-allowed";
    voiceInputBtn.title = "Speech Recognition not supported in this browser";
  }

  if (voiceInputBtn && recognition) {
    voiceInputBtn.addEventListener("click", () => {
      if (isListening) {
        recognition.stop();
      } else {
        try {
          const langMap = { en: "en-US", ru: "ru-RU", uz: "uz-UZ" };
          recognition.lang = langMap[localStorage.getItem(LANG_KEY) || "en"] || "en-US";
          recognition.start();
        } catch (err) { console.error("Error starting recognition:", err); }
      }
    });
  }

  if (voiceOutputBtn) {
    voiceOutputBtn.addEventListener("click", () => {
      const botMessages = chatMessages.querySelectorAll(".message.bot");
      if (botMessages.length === 0) return;
      const lastBotMsg = botMessages[botMessages.length - 1];
      const msgContent = lastBotMsg.querySelector(".message-content");
      if (!msgContent) return;

      let textToSpeak = "";
      msgContent.querySelectorAll("p").forEach((p) => { textToSpeak += p.textContent + " "; });
      msgContent.querySelectorAll("li").forEach((li) => { textToSpeak += li.textContent + " "; });
      if (!textToSpeak) textToSpeak = msgContent.textContent;

      const utterance = new SpeechSynthesisUtterance(textToSpeak.trim());
      const currentLang = localStorage.getItem(LANG_KEY) || "en";
      utterance.lang = currentLang === "uz" ? "uz-UZ" : currentLang === "ru" ? "ru-RU" : "en-US";
      utterance.rate = 1; utterance.pitch = 1; utterance.volume = 1;

      voiceOutputBtn.style.backgroundColor = "rgba(157, 0, 255, 0.5)";
      voiceOutputBtn.style.color = "#fff";
      utterance.onend = () => { voiceOutputBtn.style.backgroundColor = ""; voiceOutputBtn.style.color = ""; };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  }

  function updateVoiceOutputButtonState() {
    const hasBotMessages = chatMessages.querySelectorAll(".message.bot").length > 0;
    if (voiceOutputBtn) voiceOutputBtn.style.display = hasBotMessages ? "flex" : "none";
  }

  const observer = new MutationObserver(() => updateVoiceOutputButtonState());
  if (chatMessages) observer.observe(chatMessages, { childList: true, subtree: true });

  // ==========================================================================
  // Pricing Modal & Payment Logic
  // ==========================================================================
  const pricingModal = document.getElementById("pricing-modal");
  const pricingSelection = document.getElementById("pricing-selection");
  const paymentSelection = document.getElementById("payment-selection");
  const paymentSuccess = document.getElementById("payment-success");
  const closePricingBtn = document.getElementById("close-pricing-btn");
  const planItems = document.querySelectorAll(".plan-item");
  const selectPlanBtns = document.querySelectorAll(".select-plan-btn");
  const backToPricingBtn = document.getElementById("back-to-pricing");
  const confirmPaymentBtn = document.getElementById("confirm-payment-btn");
  const closeSuccessBtn = document.getElementById("close-success-modal");
  const displaySelectedPlan = document.getElementById("display-selected-plan");
  const paymentOptions = document.querySelectorAll(".payment-option");
  const settingsDropdown = document.getElementById("settings-dropdown");

  function openPricingModal() {
    pricingModal.classList.add("active");
    pricingModal.style.pointerEvents = "auto";
    pricingSelection.classList.remove("hidden");
    paymentSelection.classList.add("hidden");
    paymentSuccess.classList.add("hidden");
    gsap.from(".price-card", { y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" });
  }

  function closePricingModal() {
    pricingModal.classList.remove("active");
    pricingModal.style.pointerEvents = "none";
  }

  if (pricingModal) pricingModal.style.pointerEvents = "none";

  planItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (settingsDropdown) settingsDropdown.classList.remove("active");
      openPricingModal();
    });
  });

  if (closePricingBtn) closePricingBtn.addEventListener("click", closePricingModal);

  selectPlanBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const plan = btn.getAttribute("data-plan");
      const lang = localStorage.getItem(LANG_KEY) || "en";
      const planNameMap = {
        standard: translations[lang].plan_standard,
        pro: translations[lang].plan_pro,
        ultra: translations[lang].plan_ultra,
      };
      displaySelectedPlan.textContent = planNameMap[plan] || plan;
      gsap.to(pricingSelection, {
        opacity: 0, x: -20, duration: 0.3, onComplete: () => {
          pricingSelection.classList.add("hidden");
          paymentSelection.classList.remove("hidden");
          gsap.fromTo(paymentSelection, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.4 });
        },
      });
    });
  });

  if (backToPricingBtn) {
    backToPricingBtn.addEventListener("click", () => {
      gsap.to(paymentSelection, {
        opacity: 0, x: 20, duration: 0.3, onComplete: () => {
          paymentSelection.classList.add("hidden");
          pricingSelection.classList.remove("hidden");
          gsap.fromTo(pricingSelection, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.4 });
        },
      });
    });
  }

  paymentOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      paymentOptions.forEach((o) => o.classList.remove("highlight"));
      opt.classList.add("highlight");
    });
  });

  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener("click", () => {
      confirmPaymentBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i>';
      confirmPaymentBtn.style.pointerEvents = "none";
      setTimeout(() => {
        gsap.to(paymentSelection, {
          opacity: 0, scale: 0.9, duration: 0.4, onComplete: () => {
            paymentSelection.classList.add("hidden");
            paymentSuccess.classList.remove("hidden");
            confirmPaymentBtn.innerHTML = translations[localStorage.getItem(LANG_KEY) || "en"].confirm_payment;
            confirmPaymentBtn.style.pointerEvents = "auto";
          },
        });
      }, 1500);
    });
  }

  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closePricingModal);

  if (pricingModal) {
    pricingModal.addEventListener("click", (e) => { if (e.target === pricingModal) closePricingModal(); });
  }
});