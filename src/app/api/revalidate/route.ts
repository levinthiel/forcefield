import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const secret = request.headers.get("x-sanity-webhook-secret");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (!expectedSecret || secret !== expectedSecret) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    revalidateTag("stories");
    revalidateTag("clusters");
    revalidatePath("/");
    revalidatePath("/stories/[id]", "page");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}
