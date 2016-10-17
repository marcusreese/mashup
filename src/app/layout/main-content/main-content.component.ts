import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  gridOptions = {
    limit_to_screen: true,
    visible_rows: 6,
    visible_cols: 6,
    max_cols: 6,
    auto_resize: true,
    min_width: 20,
    margins: [10, 10, 0, 0]
  };
  boxes = [
    {
      config: {
      },
      title: 'hello',
      text: 'world'
    },
    {
      config: {
      },
      title: 'hello',
      text: 'world'
    },
    {
      config: {
      },
      title: 'hello',
      text: 'world'
    },
    {
      config: {
      },
      title: 'hello',
      text: 'world'
    },
    {
      config: {
      },
      title: 'hello',
      text: 'world'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
