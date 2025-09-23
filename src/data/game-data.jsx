export default class Game {
    constructor(onStateChange){
        this.currentScore = 0;
        this.highScore = 0;
    }

    addPoint() {
        this.currentScore++;
    }

    resetScore() {
        if (this.currentScore > this.highScore) this.highScore = this.currentScore;
        this.currentScore = 0;
    }
}