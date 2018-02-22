export class ProductReview {
    constructor(
        public rating: Number,
        public by: string,
        public comment: string,
        public thumbsUp: Number,
        public isVerifiedPurchase: boolean
    ){

    }
}
