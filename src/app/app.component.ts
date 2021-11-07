import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'homework1';

  stage = [
    {
      stage: 1,
      task: [
        {
          id: 'S1_1',
          priority: 1,
          description: 'Server Set Up',
          by_who: 'Tony',
        },
        {
          id: 'S1_2',
          priority: 2,
          description: 'Meeting (I)',
          by_who: 'Tony',
        },
        {
          id: 'S1_3',
          priority: 3,
          description: 'Frontend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S1_4',
          priority: 4,
          description: 'Backend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S1_5',
          priority: 5,
          description: 'Frontend creation<br/>expected to due on Thursday <br/> (2)',
          by_who: 'Tony',
        },
        
      ],
    },
    {
      stage: 2,
      task: [
        {
          id: 'S2_1',
          priority: 1,
          description: 'Server Set Up',
          by_who: 'Tony',
        },
        {
          id: 'S2_2',
          priority: 2,
          description: 'Meeting (I)',
          by_who: 'Tony',
        },
        {
          id: 'S2_3',
          priority: 3,
          description: 'Frontend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S2_4',
          priority: 4,
          description: 'Backend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S2_5',
          priority: 5,
          description: 'Frontend creation<br/>expected to due on Thursday <br/> (2)',
          by_who: 'Tony',
        },
      ],
    },
    {
      stage: 3,
      task: [
        {
          id: 'S3_1',
          priority: 1,
          description: 'Server Set Up',
          by_who: 'Tony',
        },
        {
          id: 'S3_2',
          priority: 2,
          description: 'Meeting (I)',
          by_who: 'Tony',
        },
        {
          id: 'S3_3',
          priority: 3,
          description: 'Frontend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S3_4',
          priority: 4,
          description: 'Backend creation<br/>expected to due on Thursday',
          by_who: 'Sam',
        },
        {
          id: 'S3_5',
          priority: 5,
          description: 'Frontend creation<br/>expected to due on Thursday <br/> (2)',
          by_who: 'Tony',
        },
      ],
    },
  ];
}
