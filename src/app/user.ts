export class User {
    constructor(
        public name:string,
        public avatar_url:string,
        public login: string,
        public bio:string,
        public company:string,
        public public_repos:number,
        public created_at:Date
    ){ }
}
