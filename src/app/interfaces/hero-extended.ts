import {Hero} from "./hero";

export interface HeroExtended extends Hero {
    surname: string,
    team: {
        id: number,
        name: string
    }
}