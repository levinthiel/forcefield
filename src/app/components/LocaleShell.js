"use client";

import { LocaleProvider } from "../lib/LocaleContext";
import Header from "./Header";
import Footer from "./Footer";

export default function LocaleShell({ children, storiesByLocale, clusters }) {
    return (
        <LocaleProvider storiesByLocale={storiesByLocale} clusters={clusters}>
            <Header />
            {children}
            <Footer />
        </LocaleProvider>
    );
}
