import sagasu from "./sagasu";
import priestess from "./priestess";
import passengers from "./passengers";
import industrial from "./industrial"
import tunnels from "./tunnels"
import survivor1 from "./survivor1"
/* import story2 from "./stories/story2";
import story3 from "./stories/story3"; // Add as many as you have
 */
const stories = [...sagasu,...priestess,...passengers,...industrial,...tunnels,...survivor1 /* story2, story3 */];

export default stories;