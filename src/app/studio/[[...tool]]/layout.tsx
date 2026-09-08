export { metadata, viewport } from "next-sanity/studio";

import "./studio.css";

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="sanity-studio-root">{children}</div>;
}
