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
        Register: "لا يوجد لديك حساب؟ سجل الان",
      },
      signUp: {
        signUp: "التسجيل",
        number: "Phone number",
        password: "Password",
        agree: "بنقرك على سجل الان فانت توافق على شروط واحكام الخدمة",
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
        Register: "Not a Memeber? Register",
      },
      signUp: {
        signUp: "Sign Un",
        number: "Phone number",
        password: "Password",
        agree: "By clicking Sign up you agree to our terms of service",
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
