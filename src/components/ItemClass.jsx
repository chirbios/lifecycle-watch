import { nanoid } from 'nanoid';

export default class ItemClass {
  constructor(title, hoursGMT0, hoursDiff) {
    this.id = nanoid();
    this.title = title;
    this.hoursGMT0 = hoursGMT0;
    this.hoursDiff = hoursDiff;
  }
}
