class Dice {
        constructor() {
            this.value = 0;
        }

        roll() {
            this.value = Math.floor(Math.random() * 6) + 1;
        }

        getValue() {
            return this.value;
        }

        reset() {
            this.value = 0;
        }
    }
export default Dice;