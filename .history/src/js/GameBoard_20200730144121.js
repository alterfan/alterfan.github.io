import {} from './Const.js'
import Board from './Board.js'
import { get_result, get_board_copy } from './Helpers.js'
import Cell from './Cell.js'
export default class GameBoard extends Phaser.Scene {
	constructor() {
		super({ key: 'GameBoard' })
		this.state = { scorePlayer: 0, scoreAI: 0, whoseTurn: 'x', lastUpdates: [null, null], gameEnd: false }
	}
	preload() {
		this.load.image('x', 'assets/images/x.png')
		this.load.image('o', 'assets/images/o.png')
		this.load.image('play_again', 'assets/images/play_again.png')
		this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0xffffff } }).setInteractive()
	}
	create() {
		var self = this
		this.board = new Board(this, 0, 0, this.graphics)
		this.input.setTopOnly(false)
		this.scale.on('orientationchange', function (orientation) {
			this.scale.resize(window.innerWidth, window.innerHeight)
		})
		this.input.on('gameobjectdown', (pointer, cell) => {
            console.log('cell: ', cell)
			if (!this.state.gameEnd && cell.char == null) this.board.makeMove(cell)
		})
	}
	update() {}
}
