class StandupAuthor {
  platform: string;
  uid: string;
}

export class StandupDTO {
  author: StandupAuthor;
  yesterdayMessage: string;
  todayMessage: string;
}
