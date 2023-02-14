import {importAll} from "./importHelper";

export const weaponImages = importAll(require.context('../images/Weapons',
    false, /\.(png|jpe?g|svg|webp)$/));

export const membersImages = importAll(require.context('../images/Members',
    false, /\.(png|jpe?g|svg|webp)$/));