import { Component, OnInit } from '@angular/core';
import { Position } from '../data/position';
import { PositionService } from '../data/position.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Position[];
  getPositionSub: any;
  loadingError: boolean = false;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.getPositionSub = this.positionService.getPositions().subscribe(
      data => {
        this.positions = data;
      },
      err => {
        this.loadingError = true;
      }
    );
  }

  ngOnDestroy() {
    if (this.getPositionSub) {
      this.getPositionSub.unsubscribe();
    }
  }
}
