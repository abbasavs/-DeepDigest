  document.addEventListener("DOMContentLoaded", () => {
    // Check authentication routes
    const path = window.location.pathname;
    const isIndex = path.endsWith("index.html") || path.endsWith("/");
    const isAuthPage =
      path.includes("auth.html") ||
      path.includes("login.html") ||
      path.includes("register.html");

    // Auth guard logic
    if (isIndex && !localStorage.getItem("user_token")) {
      window.location.href = "./pages/auth.html";
    } else if (isAuthPage && localStorage.getItem("user_token")) {
      window.location.href = "../index.html";
    }

    // ==========================================================================
    // Slide Animation Logic for Premium Auth Page
    // ==========================================================================
    const switchToRegisterBtn = document.getElementById("switch-to-register");
    const switchToLoginBtn = document.getElementById("switch-to-login");
    const authBox = document.getElementById("auth-box");

    // Mobile toggle buttons
    const mobileLoginBtn = document.getElementById("mobile-login-btn");
    const mobileRegisterBtn = document.getElementById("mobile-register-btn");

    if (authBox) {
      // Toggle between Login and Register (slide overlay left/right)
      const toggleAuthPanel = () => authBox.classList.toggle("login-active");

      // Overlay buttons - both toggle the view
      if (switchToLoginBtn)
        switchToLoginBtn.addEventListener("click", toggleAuthPanel);
      if (switchToRegisterBtn)
        switchToRegisterBtn.addEventListener("click", toggleAuthPanel);

      // Mobile toggle buttons
      if (mobileLoginBtn) mobileLoginBtn.addEventListener("click", () => authBox.classList.add("login-active"));
      if (mobileRegisterBtn)
        mobileRegisterBtn.addEventListener("click", () => authBox.classList.remove("login-active"));
    }

    // ==========================================================================
    // Form Submission Handling
    // ==========================================================================
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("user_token", "true");
        const emailInput = document.getElementById("log-email");
        if (emailInput && emailInput.value) {
          let nameToSave = emailInput.value;
          if (nameToSave.includes("@")) {
            nameToSave = nameToSave.split("@")[0];
          }
          localStorage.setItem("user_name", nameToSave);
        }
        // Animate container out before redirect
        if (window.gsap && authBox) {
          gsap.to(authBox, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              window.location.href = "../index.html";
            },
          });
        } else {
          window.location.href = "../index.html";
        }
      });
    }

    const registerForm = document.getElementById("register-form");
    if (registerForm) {
      registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("user_token", "true");
        const nameInput = document.getElementById("reg-name");
        if (nameInput && nameInput.value) {
          localStorage.setItem("user_name", nameInput.value);
        }
        if (window.gsap && authBox) {
          gsap.to(authBox, {
            y: 50,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
              window.location.href = "../index.html";
            },
          });
        } else {
          window.location.href = "../index.html";
        }
      });
    }

    // ==========================================================================
    // Settings & Global Handlers (index.html)
    // ==========================================================================
    const settingsBtn = document.getElementById("settings-btn");
    const settingsDropdown = document.getElementById("settings-dropdown");

    if (settingsBtn && settingsDropdown) {
      settingsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        settingsDropdown.classList.toggle("active");
      });

      document.addEventListener("click", (e) => {
        if (
          !settingsBtn.contains(e.target) &&
          !settingsDropdown.contains(e.target)
        ) {
          settingsDropdown.classList.remove("active");
        }
      });
    }

    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_name");
        window.location.href = "./pages/auth.html";
      });
    }

    // ==========================================================================
    // Simple i18n (EN / RU / UZ) - Reused from script.js
    // ==========================================================================
    const LANG_KEY = "lang";
    const translations = {
      en: {
        join_us: "Join Us",
        auth_desc_register: "Create your DeepDigest account",
        full_name: "Full Name",
        email_address: "Email Address",
        password: "Password",
        sign_up: "Sign Up",
        already_have_account: "Already have an account? Login",
        welcome_back: "Welcome Back",
        auth_desc_login: "Log into your DeepDigest account",
        forgot_password: "Forgot password?",
        sign_in: "Sign In",
        dont_have_account: "Don't have an account? Register",
        new_here: "New Here?",
        register_today: "Register today and discover the next generation of AI interaction.",
        hello_friend: "Hello, Friend!",
        already_member: "Already have an account? Sign in to continue your journey.",
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
        join_us: "Присоединяйтесь к нам",
        auth_desc_register: "Создайте свой аккаунт DeepDigest",
        full_name: "Полное имя",
        email_address: "Электронная почта",
        password: "Пароль",
        sign_up: "Регистрация",
        already_have_account: "Уже есть аккаунт? Войти",
        welcome_back: "С возвращением",
        auth_desc_login: "Войдите в свой аккаунт DeepDigest",
        forgot_password: "Забыли пароль?",
        sign_in: "Войти",
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
        join_us: "Bizga qo'shiling",
        auth_desc_register: "DeepDigest hisobingizni yarating",
        full_name: "To'liq ism",
        email_address: "Email manzili",
        password: "Parol",
        sign_up: "Ro'yxatdan o'tish",
        already_have_account: "Hisobingiz bormi? Kirish",
        welcome_back: "Xush kelibsiz",
        auth_desc_login: "DeepDigest hisobingizga kiring",
        forgot_password: "Parolni unutdingizmi?",
        sign_in: "Kirish",
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
      }
    };

    function applyTranslations(lang) {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const txt = (translations[lang] && translations[lang][key]) || el.textContent;
        el.textContent = txt;
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-i18n-placeholder");
        const txt = (translations[lang] && translations[lang][key]) || "";
        el.setAttribute("placeholder", txt);
      });
    }

    function initLang() {
      const saved = localStorage.getItem(LANG_KEY) || "en";
      applyTranslations(saved);
    }

    initLang();

    // Initial entrance animation
    if (authBox && window.gsap) {
      gsap.fromTo(
        authBox,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "expo.out", delay: 0.2 },
      );
    }
  });
