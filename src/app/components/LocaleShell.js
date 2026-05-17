"use client";

import { LocaleProvider } from "../lib/LocaleContext";
import Header from "./Header";
import Footer from "./Footer";

export default function LocaleShell({ children }) {
    return (
        <LocaleProvider>
            <Header />
            {children}
            <Footer />
        </LocaleProvider>
    );
}
