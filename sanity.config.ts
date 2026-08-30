"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { markdownSchema } from "sanity-plugin-markdown";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
    basePath: "/studio",
    projectId,
    dataset,
    apiVersion,
    plugins: [structureTool(), markdownSchema(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});
