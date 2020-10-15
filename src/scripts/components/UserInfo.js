export default class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    getUserInfo() {
        const name = this._nameElement.textContent;
        const job = this._jobElement.textContent;
        return {name, job};
    }

    setUserInfo(newName, newJob) {
        this._nameElement.textContent = newName;
        this._jobElement.textContent = newJob;
    }
}