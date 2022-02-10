export class Details {
  id: number;
  title: string;
  overview: string;
  budget: number;
  vote_average: number;

  constructor(
    id: number,
    title: string,
    overview: string,
    budget: number,
    vote_average: number
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.budget = budget;
    this.vote_average = vote_average;
  }
}
