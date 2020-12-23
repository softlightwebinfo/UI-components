import { v1 as uuidv1 } from 'uuid';

export const htmlIdGenerator = (idPrefix?: string) => {
    const prefix = idPrefix || `i${uuidv1()}`;
    return (suffix?: string) => `${prefix}_${suffix || uuidv1()}`;
}

export const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};