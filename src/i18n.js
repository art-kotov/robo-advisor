import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ar: {
    translation: {
      "Welcome to React": "مرحبًا بك في React",
      signIn: {
        signIn: "تسجيل الدخول",
        number: "رقم الجوال",
        password: "كلمة المرور",
        rememberMe: "تذكرني",
        forgotPassword: "نسيت كلمت المرور",
        register: "لا يوجد لديك حساب؟ سجل الان",
      },
      signUp: {
        signUp: "التسجيل",
        number: "رقم الجوال",
        password: "كلمة المرور",
        agree: "بنقرك على سجل الان فانت توافق على شروط و<1>احكام الخدمة</1>",
      },
      home: {
        riskLevel: "متوسط",
        currency: "ريال",
        risk: "حجم المخاطر",
        returns: "العوائد",
        details: "التفاصيل",
        portfolioValue: "قيمة المحفظة",
        logout: "تسجيل الخروج",
        settings: "الاعدادات",
        transactions: "عمليات المحفظة",
        performance: "اداء المحفظة",
        portfolioDetails: "تفاصيل المحفظة",
        home: "الرئيسية",
        deposit: "ايداع",
        privacy: "سياسة الخصوصية",
        term: "الشروط والاحكام",
        disclaimer: "اخلاء المسؤولية",
        license: "ترخيص هيئة السوق المالية رقم ٢٣-٣٤٣٥٣",
        copyright: "جميع الحقوق محفوظة - ٢٠٢٠ للاستثمار",
      },
    },
  },
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      signIn: {
        signIn: "Sign In",
        number: "Phone number",
        password: "Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot Password",
        register: "Not a Memeber? Register",
      },
      signUp: {
        signUp: "Sign Up",
        number: "Phone number",
        password: "Password",
        agree: "By clicking Sign up you agree to our <1>terms of service</1>",
      },
      home: {
        riskLevel: "Moderate",
        currency: "SAR",
        risk: "Risk",
        returns: "Returns",
        details: "Details",
        portfolioValue: "Portfolio Value",
        logout: "Logout",
        settings: "Settings",
        transactions: "Transactions",
        performance: "Performance",
        portfolioDetails: "Portfolio Details",
        home: "Home",
        deposit: "Deposit",
        privacy: "Privacy Policy",
        term: "Terms and conditions",
        disclaimer: "Disclaimer",
        license: "CMA licence NO 23-453453",
        copyright: "Copyrights - 2020 investment",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar",
    fallbackLng: "ar",
    keySeparator: ".", // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
