import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, getSanityProjectId } from "../env";

export function urlFor(source: SanityImageSource) {
    const builder = createImageUrlBuilder({
        projectId: getSanityProjectId(),
        dataset,
    });

    return builder.image(source).auto("format").url();
}
