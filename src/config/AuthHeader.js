export function AuthHeader() {
    let user = JSON.parse(localStorage.getItem('currentUser'));

    if(user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
