
class Storage {
    constructor() {
        this.setInStorage = (key, value) => {
            const set = JSON.stringify(value);
            localStorage.setItem(key, set);
        }
        this.getInStorage = (key) => {
            return JSON.parse(localStorage.getItem(key))
        }
    }

}

export { Storage }