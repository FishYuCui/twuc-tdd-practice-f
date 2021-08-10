class Mommifier {
    constructor(str) {
        this.str = str
    }
    mommifier = () => {
        const vowels = ['a', 'e', 'u', 'i', 'o']
        if (this.str === "") {
            return this.str
        }
        const strLength = this.str.length;
        let newArray = this.str.split("");
        let number = 0
        let filterArray = newArray.map(element => {
            if (vowels.includes(element)) {
                number++;
                return "1"
            }
            return element
        });
        if (number / strLength < 0.3) {
            return this.str
        } else {
            return Array.from(new Set(filterArray)).join("").replace(/1/gi, 'mommy')
        }

    }
}

export default Mommifier;