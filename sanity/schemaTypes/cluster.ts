import { defineField, defineType } from "sanity";

export const cluster = defineType({
    name: "cluster",
    title: "Cluster",
    type: "document",
    fields: [
        defineField({
            name: "clusterId",
            title: "Cluster ID",
            type: "slug",
            options: {
                source: "title",
                maxLength: 32,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "Internal label for editors (not shown on site).",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
            validation: (rule) => rule.required().min(0),
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Available", value: "available" },
                    { title: "Coming soon", value: "coming_soon" },
                ],
                layout: "radio",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "clusterId.current",
            media: "coverImage",
        },
    },
});
