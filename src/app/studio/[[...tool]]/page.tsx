"use client";

import { NextStudio } from "next-sanity/studio";
import "easymde/dist/easymde.min.css";

import config from "../../../../sanity.config";

export default function StudioPage() {
    return <NextStudio config={config} />;
}
