"use client"
import styled from "styled-components";

export default function AboutPage() {
    return (
        <StyledPage>
            <StyledH1>
                About Force Field
            </StyledH1>
            <p>
                Welcome to <em>Force Field</em> — a collection of short stories born from a lifelong love of science fiction in all its chaotic, beautiful, and bizarre forms.
            </p>
            <p>
                These tales leap across genres: from space opera to space horror, from zombie outbreaks to deep-space exploration, with new worlds, strange creatures, 
                and unexpected turns at every stop. Each story stands alone—new characters, new stakes—but all orbit a shared love for what sci-fi does best: sparking 
                imagination, asking <em>what if?</em>, and sometimes just blowing stuff up in zero gravity.
            </p>
            <p>
                As a kid, I was raised on a steady diet of <em>Batman: The Animated Series</em>, <em>Ghostbusters</em>, <em>TMNT</em>, and <em>X-Men</em>. That turned into a full-blown obsession—<em>Alien, Predator, Babylon 5, Stargate, Firefly, Mass Effect</em>. 
                I devoured books, comics, audiobooks, games, and even the occasional cosplay. My playlists are full of synthwave, and my shelves are stacked with <em>Moebius, Mignola, Guillaume Singelin, One Piece</em> and <em>Mutafukaz</em>. 
                If it’s weird and sci-fi, I probably love it.
            </p>
            <p>
                <em>Force Field</em> is the result of all that—my small tribute to the genre that shaped my brain, inspired my art, and still keeps me up at night wondering what’s out there.
            </p>
            <p>
                And maybe, just maybe, it’s also a little reaction to the feeling that so much of what we get these days—movies, games, comics—feels safe, polished, familiar. 
                Reboots, sequels, endless spin-offs. I wanted to try something that feels a little stranger. A little riskier. More like the odd, rough-edged, exciting sci-fi that hooked me in the first place.
            </p>
            <p>
                Nothing fancy. No grand statements. Just weird ideas, told for the fun of it.
            </p>
            <p>
                The author? 
                He is a human-shaped lifeform who lives on Terra, but whose heart is somewhere between a derelict spaceship and a neon-lit alley. 
                Shaped by laser sounds, cats, and dreams of space pizza. Rumoured to be part cyborg. Writing sci-fi to avoid being rebooted.
            </p>
            <StyledH2>
                Thanks
            </StyledH2>
            <p>
                This collection wouldn’t exist without the support, encouragement, and occasional well-timed distractions provided by the people I’m lucky to have in my orbit.
            </p>
            <p>
                To my wife — your love, patience, and quiet belief in me are the real force field holding this whole operation together. You’re the gravity that keeps me grounded when my head drifts into space.
            </p>
            <p>
                To my mum — thank you for always cheering me on, even when I started talking about zombies in space.
            </p>
            <p>
                Big thanks to my brother, Stephan, Josh, Sina, Conor, and all my other friends and chosen family — thanks for putting up with my endless sci-fi rants and weirdness in general. 
                Thank you for being the ones to read my stories and give me feedback.
                <br></br>
                You’ve all helped shape this in some way, and I’m grateful for every bit of it.
            </p>
            <p>
                This one’s for you, my peeps &#10084;
            </p>
        </StyledPage>
    )
}
const StyledPage = styled.article`
  margin: 2rem auto;
  padding: 3rem;
  border: 2px solid var(--beige);
  border-radius: 7px;
  color: var(--beige);
  width: 100%;
  font-weight: normal;
  max-width: 800px;

  p {
    margin: 10px 0;
  }

  @media (max-width: 530px) {

    padding: 1rem;
  }
`;
const StyledH1 = styled.h1 `
    margin-bottom: 1rem;
`;
const StyledH2 = styled.h2 `
    margin:2rem 0 1rem 0;
`;