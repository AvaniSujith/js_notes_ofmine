//object literals

// let user = {
//      name: 'Avani',
//      age: 22,
//      email: 'avani@gamil.com',
//      location: 'kerala'

// }

// console.log(user);
// console.log(user.name);


//change values

// user.name = 'sai';
// console.log(user);
// const key = 'loaction'
// console.log(user[key]);
// user['name'] = 'chun';
// console.log(user['name']);

// console.log(typeof user);

// console.log(user.age);
// console.log(user.email);



//methods

// const blogs = [
//     {title:'why mac and cheese rules', likes: 30},
//     {title:'10 things to make web', likes:20}
// ];
// console.log(blogs);

let user = {
    name:'avani',
    age: 20,
    email:'avani@gmail.com',
    location:'Kerala',
    // blogs: ['why mac and cheese rules', '10 things to make web'],
    blogs:[
        {title:'why mac and cheese rules', like: 30},
        {title:'10 things to make web', like:20}
    ],
    // login: function(){
    //     console.log('The user logged in');
    // },
    // logout: function(){
    //     console.log('The user logged out');
    // },
    // logBlogs:function(){
        // this.blogs
        // console.log(this);




    //     console.log('this user has written the  following blogs:');
    //     this.blogs.forEach(blog => {
    //         console.log(blog);
    //     });
    // }
    login(){
        console.log('Th user logged in');
    },
    logout(){
        console.log('The user logged out');
    },
    logBlogs(){
        console.log('The user had written the following blogs:');
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.like);
        });
    }
};

user.login();
user.logout();
user.logBlogs();
console.log(this);


//math object

console.log(Math);
console.log(Math.PI);

const numDemo = 7.9890;

console.log(Math.round(numDemo));
console.log(Math.floor(numDemo));
console.log(Math.ceil(numDemo));
console.log(Math.trunc(numDemo));

const randomNum = Math.random();
console.log(randomNum);
console.log(Math.round(randomNum * 100));
console.log(Math.ceil(randomNum * 1000));



