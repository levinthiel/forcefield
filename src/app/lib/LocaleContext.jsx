"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getStories } from "./allTheStories";
import uiEN from "./ui/en";
import uiDE from "./ui/de";
import uiFR from "./ui/fr";

const STORAGE_KEY = "forcefield-locale";

const UI_BY_LOCALE = {
    EN: uiEN,
    DE: uiDE,
    FR: uiFR,
};

const HTML_LANG = {
    EN: "en",
    DE: "de",
    FR: "fr",
};

export function langFromBrowser() {
    if (typeof navigator === "undefined") return "EN";
    const code = (navigator.language || "en").toLowerCase();
    if (code.startsWith("de")) return "DE";
    if (code.startsWith("fr")) return "FR";
    return "EN";
}

const LocaleContext = createContext(null);

export function LocaleProvider({ children }) {
    const [locale, setLocaleState] = useState("EN");
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        const initial =
            stored === "EN" || stored === "DE" || stored === "FR"
                ? stored
                : langFromBrowser();
        setLocaleState(initial);
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        document.documentElement.lang = HTML_LANG[locale] ?? "en";
        localStorage.setItem(STORAGE_KEY, locale);
    }, [locale, hydrated]);

    const setLocale = useCallback((next) => {
        if (next === "EN" || next === "DE" || next === "FR") {
            setLocaleState(next);
        }
    }, []);

    const value = useMemo(
        () => ({
            locale,
            setLocale,
            stories: getStories(locale),
            t: UI_BY_LOCALE[locale] ?? uiEN,
            hydrated,
        }),
        [locale, setLocale, hydrated]
    );

    return (
        <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
}

export function useLocale() {
    const ctx = useContext(LocaleContext);
    if (!ctx) {
        throw new Error("useLocale must be used within LocaleProvider");
    }
    return ctx;
}
