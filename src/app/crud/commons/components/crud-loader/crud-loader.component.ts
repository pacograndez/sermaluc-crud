import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule, ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-crud-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './crud-loader.component.html',
  styleUrls: ['./crud-loader.component.scss']
})
export class CrudLoaderComponent {

  mode: ProgressSpinnerMode = 'indeterminate';
}
