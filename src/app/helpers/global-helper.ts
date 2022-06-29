
export class GlobalHelper {

    public static normalizeObjectKeys(object) {
        Object.keys(object).forEach(key => {
            const newKey = this.camelizeAndRemoveSpaces(key);
            if (object[key] && typeof object[key] === 'object') {
                this.normalizeObjectKeys(object[key]);
            }
            if (key !== newKey) {
                object[newKey] = object[key];
                delete object[key];
            }
        });
    }

    private static camelizeAndRemoveSpaces(value: string): string {
        return value.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
}
