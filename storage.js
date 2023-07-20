class Storage {

    static getSearchedUsersFromStorage() {
        // Tüm kullanıcıları al
        let users;

        if (localStorage.getItem("searched") === null) {
            users = [];
        }
        
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }

        return users;
    }

    static addSearchedUserToStorage(username) {
        // Kullanıcı ekle
        let users = this.getSearchedUsersFromStorage();
        
        // indexOf ile arrayde sorgulama yapıyoruz var mı yok mu? (-1 yok)
        if (users.indexOf(username) === -1) {
           users.push(username);
        }

        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage() {
        // Tüm kullanıcıları silme
        localStorage.removeItem("searched");
    }

}
