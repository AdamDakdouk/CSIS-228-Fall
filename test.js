
var users = [];
const fillDummyData = async () => {
    for(let i = 0; i<100; i++)
    {
        let user = {
            name: `name: ${i}`,
            password: "pass "+i,
            dob: new Date(),
            grade: Math.round(Math.random() * 50 + 50),
        }
        users.push(user);
    }
    
}
const readData = () => {
    // for(i in users)
    //     console.log(users[i]);

    // for(const user of users)
    //     console.log(user);
    // let A = 0 ,B = 0, C = 0;
    let A = 0, B = 0, C = 0;
    users.forEach( (user) => {
        console.log(user)
        user.grade >=90? A++ : A+0;
        user.grade >=70 && user.grade<90? B++ : B+0;
        user.grade >=50 && user.grade<70? C++ : C+0;
    })

    console.log(`A: ${A} students \nB: ${B} students \nC: ${C} students`)
}

const getUsers = () => {
    return users;
}
module.exports = {
    fillDummyData,
    readData,
    getUsers,
}
//console.log(users)