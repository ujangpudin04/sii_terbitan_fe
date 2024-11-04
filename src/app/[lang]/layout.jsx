// Next Imports
import { headers } from "next/headers";

// Third-party Imports
import "react-perfect-scrollbar/dist/css/styles.css";

// Component Imports

// HOC Imports
import TranslationWrapper from "@/hocs/TranslationWrapper";

// Config Imports
import { i18n } from "@configs/i18n";

// Style Imports
import "@/app/globals.css";

// Generated Icon CSS Imports
import "@assets/iconify-icons/generated-icons.css";

export const metadata = {
  title: "SIAP - SISTEM INFORMASI PENERBITAN",
  description:
    "SIAP ini merupakan sistem informasi untuk menajamen penerbitan / publikasi jurnal , artikel atau pun paper lainnya dilingkungan DPR RI",
};

const RootLayout = ({ children, params }) => {
  // Vars
  const headersList = headers();
  const direction = i18n.langDirection[params.lang];

  return (
    <TranslationWrapper headersList={headersList} lang={params.lang}>
      <html id="__next" lang={params.lang} dir={direction}>
        <body className="flex is-full min-bs-full flex-auto flex-col">
          {children}
        </body>
      </html>
    </TranslationWrapper>
  );
};

export default RootLayout;
