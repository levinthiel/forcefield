import renataEN from "./EN/renata";
import criticalmassEN from "./EN/criticalmass";
import survivor3EN from "./EN/survivor3";
import survivor2EN from "./EN/survivor2";
import survivor1EN from "./EN/survivor1";
import tunnelsEN from "./EN/tunnels";
import industrialEN from "./EN/industrial";
import passengersEN from "./EN/passengers";
import priestessEN from "./EN/priestess";
import sagasuEN from "./EN/sagasu";

import renataDE from "./DE/renata";
import criticalmassDE from "./DE/criticalmass";
import survivor3DE from "./DE/survivor3";
import survivor2DE from "./DE/survivor2";
import survivor1DE from "./DE/survivor1";
import tunnelsDE from "./DE/tunnels";
import industrialDE from "./DE/industrial";
import passengersDE from "./DE/passengers";
import priestessDE from "./DE/priestess";
import sagasuDE from "./DE/sagasu";

import renataFR from "./FR/renata";
import criticalmassFR from "./FR/criticalmass";
import survivor3FR from "./FR/survivor3";
import survivor2FR from "./FR/survivor2";
import survivor1FR from "./FR/survivor1";
import tunnelsFR from "./FR/tunnels";
import industrialFR from "./FR/industrial";
import passengersFR from "./FR/passengers";
import priestessFR from "./FR/priestess";
import sagasuFR from "./FR/sagasu";

const storiesByLocale = {
    EN: [
        ...renataEN,
        ...criticalmassEN,
        ...survivor3EN,
        ...survivor2EN,
        ...survivor1EN,
        ...tunnelsEN,
        ...industrialEN,
        ...passengersEN,
        ...priestessEN,
        ...sagasuEN,
    ],
    DE: [
        ...renataDE,
        ...criticalmassDE,
        ...survivor3DE,
        ...survivor2DE,
        ...survivor1DE,
        ...tunnelsDE,
        ...industrialDE,
        ...passengersDE,
        ...priestessDE,
        ...sagasuDE,
    ],
    FR: [
        ...renataFR,
        ...criticalmassFR,
        ...survivor3FR,
        ...survivor2FR,
        ...survivor1FR,
        ...tunnelsFR,
        ...industrialFR,
        ...passengersFR,
        ...priestessFR,
        ...sagasuFR,
    ],
};

export function getStories(locale) {
    return storiesByLocale[locale] ?? storiesByLocale.EN;
}

export default storiesByLocale.EN;
