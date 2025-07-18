import styled from "styled-components";
import { useState } from "react";

export default function FeedbackButton() {
    const [revealed, setRevealed] = useState(false);

    const user = "&#102;&#111;&#114;&#99;&#101;&#102;&#105;&#101;&#108;&#100;&#115;&#116;&#111;&#114;&#105;&#101;&#115;"; // "forcefieldstories"
    const domain = "&#112;&#114;&#111;&#116;&#111;&#110;&#46;&#109;&#101;"; // "proton.me"


    function decodeHTMLEntities(encoded) {
        if (typeof window === "undefined") return encoded;
        const textarea = document.createElement("textarea");
        textarea.innerHTML = encoded;
        return textarea.value;
    }   

    // Decode once, only when revealed
    const decodedUser = revealed ? decodeHTMLEntities(user) : "";
    const decodedDomain = revealed ? decodeHTMLEntities(domain) : "";

    return (
        <FeedbackLine>
            <svg viewBox="0 0 1792 1792"  height="16" fill="var(--beige)" width="16"  xmlns="http://www.w3.org/2000/svg">
                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/>
            </svg> 
            <div className="email-container">
                {!revealed ? (
                    <button onClick={() => setRevealed(true)} className="reveal-button">
                        Contact / Send Feedback - click here
                    </button>
                ) : (
                    <a href={`mailto:${decodedUser}@${decodedDomain}`}>
                        {decodedUser}@{decodedDomain}
                    </a>
                )}
            </div>
        </FeedbackLine>
    );
}

const FeedbackLine = styled.div`
    display: flex;
    align-items: center;

    div {
        margin-left: 6px;

        button {
            padding: 3px 12px;
            background: transparent;
            border: 2px solid var(--beige);
            color: var(--beige);
            border-radius: 4px;
            
            &:hover {
                background: var(--beige);
                color: var(--black);
            }
        }
    }
`;