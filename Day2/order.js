/**
 * Async Await & Promise
 */

const fetchUsers = async () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3,4,5,6]);
        }, 10000);
    })
    
}

const getProfilesOfUsers = () => {
    return console.log("Profiles Fetched of given users");
}

const checkIfUserIsOnline = () => {
    return console.log("Given users are online");
}


run = async () => {
    console.log(await fetchUsers());
    getProfilesOfUsers();
    checkIfUserIsOnline();

}

run();













