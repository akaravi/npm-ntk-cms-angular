// @dynamic
export default class Utils {
    /** This returns a range of numbers. Starts from 0 if 'startFrom' is not set */
    public static getRange(startFrom: number, until: number) {
        return Array.from({ length: (until + 1 - startFrom) }, (_, k) => k + startFrom);
    }

    public static isObject(value: any): value is object {
        return typeof value === 'object' && value !== null;
    }

    public static merge(target: object, ...sources: object[]): object {
        for (const source of sources) {
            for (const [key, value] of Object.entries(source)) {
                if (Utils.isObject(target[key]) && Utils.isObject(value)) {
                    Utils.merge(target[key], value);
                } else {
                    target[key] = value;
                }
            }
        }
        return target;
    }
}
