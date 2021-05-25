export class Repos {
    constructor(
        public html_url:string,
        public name:string,
        public description:string,
        public updated_at: Date,
        public clone_url:string,
        public language:string,
    ){}

}
