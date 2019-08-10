import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionSub = this.positionService.getPositions()
    .subscribe(
      positions => this.positions = positions,
      function(e) {
        this.loadingError = true;
      }
    );
  }

  routePosition(id: string) {
    this.router.navigate(['/position', id]);
  }  

  ngOnDestroy() {
    if (this.getPositionSub) {
      this.getPositionSub.unsubscribe();
    }
  }
}
