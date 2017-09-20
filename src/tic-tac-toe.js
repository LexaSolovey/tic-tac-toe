class TicTacToe {
    constructor() {
      this.matrixOfField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this.currentPlayer = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.matrixOfField[rowIndex][columnIndex]) {
        this.matrixOfField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer === 'x' ? this.currentPlayer = 'o' : this.currentPlayer = 'x';
      }
    }

    isFinished() {
      if(this.isDraw() || this.getWinner()) return true;
      return false;
    }

    getWinner() {
      let winner = null;
      this.matrixOfField.forEach((rowItem) => {
        const checkXPlayer = rowItem.every(colItem => colItem === 'x');
        const checkOPlayer = rowItem.every(colItem => colItem === 'o');
        if(checkXPlayer) winner = 'x';
        if(checkOPlayer) winner = 'o';
      });
      for (let i = 0; i < 3; i++) {
        if (this.matrixOfField[0][i] === this.matrixOfField[1][i] && this.matrixOfField[1][i] === this.matrixOfField[2][i]){
          winner = this.matrixOfField[0][i];
        }
      }
      if (this.matrixOfField[0][0] === this.matrixOfField[1][1] && this.matrixOfField[1][1] === this.matrixOfField[2][2]) {
        winner = this.matrixOfField[0][0];
      }
      if (this.matrixOfField[0][2] === this.matrixOfField[1][1] && this.matrixOfField[1][1] === this.matrixOfField[2][0]) {
        winner = this.matrixOfField[0][2];
      }
      return winner;
    }

    noMoreTurns() {
      let haveNextTurn = true;
      this.matrixOfField.forEach((rowItem) =>{
        rowItem.find((colItem) => {
          if(colItem === null) haveNextTurn = false;
        });
      });
      return haveNextTurn;
    }

    isDraw() {
      if (this.noMoreTurns() && !this.getWinner()) return true;
      return false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrixOfField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
