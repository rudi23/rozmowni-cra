export const routeNames = {
    HOME: 'HOME',
    WHY_US: 'WHY_US',
    ABOUT_US: 'ABOUT_US',
    INDIVIDUAL_COURSE: 'INDIVIDUAL_COURSE',
    GROUP_COURSE: 'GROUP_COURSE',
    CONTACT: 'CONTACT',
    PRIVACY_POLICY: 'PRIVACY_POLICY',
};

export const routeTitles = {
    [routeNames.HOME]: 'Home',
    [routeNames.WHY_US]: 'Why us',
    [routeNames.ABOUT_US]: 'About us',
    [routeNames.INDIVIDUAL_COURSE]: 'Individual course',
    [routeNames.GROUP_COURSE]: 'Group course',
    [routeNames.CONTACT]: 'Contact',
    [routeNames.PRIVACY_POLICY]: 'Privacy policy',
};

export const routeMap = {
    [routeNames.HOME]: '/',
    [routeNames.WHY_US]: '/dlaczego-my/',
    [routeNames.ABOUT_US]: '/o-nas/',
    [routeNames.INDIVIDUAL_COURSE]: '/kursy/indywidualne/',
    [routeNames.GROUP_COURSE]: '/kursy/grupowe/',
    [routeNames.CONTACT]: '/kontakt/',
    [routeNames.PRIVACY_POLICY]: '/polityka-prywatnosci/',
};

export function resolveRouteName(path) {
    return Object.entries(routeMap).find(([_key, value]) => value.startsWith(path))?.[0];
}
