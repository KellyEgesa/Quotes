export class Quote {
  constructor(
    public author,
    public quote: string,
    public quoteSubmitter: string,
    public upVote: number,
    public downVote: number,
    public timePast: Date
  ) {}
}
