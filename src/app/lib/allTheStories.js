import sagasu from "./sagasu";
import priestess from "./priestess";
import passengers from "./passengers";
import industrial from "./industrial"
import tunnels from "./tunnels"
import survivor1 from "./survivor1"
import survivor2 from "./survivor2"
import survivor3 from "./survivor3"
import criticalmass from "./criticalmass"
import renata from "./EN/renata"
/* import story2 from "./stories/story2";
import story3 from "./stories/story3"; // Add as many as you have
 */
const stories = [...criticalmass,...survivor3,...survivor2,...survivor1,...tunnels,...industrial,...passengers,...priestess,...sagasu, ...renata, /* story2, story3 */];

export default stories;
