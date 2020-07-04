class UserModel {
    _id: number;
    username: string;
    password: string;

    constructor(id: number, username: string, password: string) {
        this._id = id;
        this.username = username;
        this.password = password;
    }
}