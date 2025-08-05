import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

interface ICell {
  index: number;
  player: string;
  played: boolean;
}

@Component({
  selector: 'app-morpion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './morpion.component.html',
  styleUrl: './morpion.component.css',
})
export class MorpionComponent implements OnInit {
  ngOnInit(): void {
    console.log('morpion');
  }
  public winner = signal<null | string>(null);
  public gameOver = signal(false);
  public player = signal('X');
  public cell = signal<ICell>({ index: 0, player: '', played: false });
  public turn = signal<number>(0);
  public newGridArray = Array.from({ length: 9 }, (_) => 0)
    .map((_, i) => i)
    .map((_, i) => ({ index: i + 1, player: '', played: false }));

  public gridOriginal = signal(this.newGridArray);
  public counter = signal(0);

  onCellSelect(cell: ICell) {
    this.turn.update((_) => cell.index);
    this.cell.update((el) => ({
      ...el,
      index: cell.index,
      player: this.player(),
      played: true,
    }));

    this.gridOriginal.update((items) =>
      [...items].map((cell, i) => (this.turn() == i + 1 ? this.cell() : cell))
    );
    this.checkScore();
    this.player.update((player) => (player === 'X' ? 'O' : 'X'));
  }

  checkScore() {
    // Horizontal
    const horizontalWin1 = (arr: ICell[], currentPlayer: string) =>
      arr[0].player == currentPlayer &&
      arr[1].player == currentPlayer &&
      arr[2].player == currentPlayer;
    const horizontalWin2 = (arr: ICell[], currentPlayer: string) =>
      arr[3].player == currentPlayer &&
      arr[4].player == currentPlayer &&
      arr[5].player == currentPlayer;
    const horizontalWin3 = (arr: ICell[], currentPlayer: string) =>
      arr[6].player == currentPlayer &&
      arr[7].player == currentPlayer &&
      arr[8].player == currentPlayer;

    // Vertical
    const verticalWin1 = (arr: ICell[], currentPlayer: string) =>
      arr[0].player == currentPlayer &&
      arr[3].player == currentPlayer &&
      arr[6].player == currentPlayer;
    const verticalWin2 = (arr: ICell[], currentPlayer: string) =>
      arr[1].player == currentPlayer &&
      arr[4].player == currentPlayer &&
      arr[7].player == currentPlayer;
    const verticalWin3 = (arr: ICell[], currentPlayer: string) =>
      arr[2].player == currentPlayer &&
      arr[5].player == currentPlayer &&
      arr[8].player == currentPlayer;

    // Diagonal
    const diagonalWin1 = (arr: ICell[], currentPlayer: string) =>
      arr[0].player == currentPlayer &&
      arr[4].player == currentPlayer &&
      arr[8].player == currentPlayer;
    const diagonalWin2 = (arr: ICell[], currentPlayer: string) =>
      arr[2].player == currentPlayer &&
      arr[4].player == currentPlayer &&
      arr[6].player == currentPlayer;

    const win =
      horizontalWin1(this.gridOriginal(), this.player()) ||
      horizontalWin2(this.gridOriginal(), this.player()) ||
      horizontalWin3(this.gridOriginal(), this.player()) ||
      verticalWin1(this.gridOriginal(), this.player()) ||
      verticalWin2(this.gridOriginal(), this.player()) ||
      verticalWin3(this.gridOriginal(), this.player()) ||
      diagonalWin1(this.gridOriginal(), this.player()) ||
      diagonalWin2(this.gridOriginal(), this.player());

    if (win) {
      this.gameOver.set(win);
      this.winner.set(this.player());
    }
    this.counter.update((_) => this.counter() + 1);
  }

  onReset() {
    this.gameOver.set(false);
    this.winner.set(null);
    this.gridOriginal.set(this.newGridArray);
    this.counter.set(0);
    this.player.set('X');
  }
}
