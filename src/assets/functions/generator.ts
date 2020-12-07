import { v1 as uuidv1 } from 'uuid';

export const htmlIdGenerator = (idPrefix?: string) => {
    const prefix = idPrefix || `i${uuidv1()}`;
    return (suffix?: string) => `${prefix}_${suffix || uuidv1()}`;
}