import { defineField, defineType } from "sanity";

export const story = defineType({
    name: "story",
    title: "Story",
    type: "document",
    fields: [
        defineField({
            name: "storyId",
            title: "Story ID",
            type: "slug",
            description: "Shared identifier across locales (e.g. survivor1).",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "locale",
            title: "Locale",
            type: "string",
            options: {
                list: [
                    { title: "English", value: "EN" },
                    { title: "German", value: "DE" },
                    { title: "French", value: "FR" },
                ],
                layout: "radio",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "cluster",
            title: "Cluster",
            type: "reference",
            to: [{ type: "cluster" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            title: "Published date",
            type: "datetime",
            description: "Used for story order on the homepage.",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "version",
            title: "Version",
            type: "string",
            description: 'Increment when you publish changes (e.g. "1.0.1").',
            initialValue: "1.0.0",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            initialValue: "Skltrn",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "readingTime",
            title: "Reading time",
            type: "string",
            description: 'e.g. "13 min"',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "storyContent",
            title: "Story content",
            type: "markdown",
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "title",
            locale: "locale",
            storyId: "storyId.current",
            publishedAt: "publishedAt",
            media: "coverImage",
        },
        prepare({ title, locale, storyId, publishedAt, media }) {
            const date = publishedAt
                ? new Date(publishedAt).toISOString().slice(0, 10)
                : "no date";

            return {
                title: `[${locale}] ${title}`,
                subtitle: `${storyId} · ${date}`,
                media,
            };
        },
    },
    orderings: [
        {
            title: "Published date (newest)",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
        {
            title: "Published date (oldest)",
            name: "publishedAtAsc",
            by: [{ field: "publishedAt", direction: "asc" }],
        },
    ],
});
