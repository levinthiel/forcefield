import LocaleShell from "../components/LocaleShell";
import { fetchSiteContent } from "../../../sanity/lib/queries";

export const revalidate = 60;

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { storiesByLocale, clusters } = await fetchSiteContent();

    return (
        <div className="site-shell">
            <div className="crt-overlay" aria-hidden="true" />
            <LocaleShell storiesByLocale={storiesByLocale} clusters={clusters}>
                {children}
            </LocaleShell>
        </div>
    );
}
