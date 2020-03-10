// create an array of movie objects. each movie should have a title,
// rating and hasWatched properties. iterate through the array and
// print out something that looks like:

// you have watched "terminator" - 5 stars
// you have watched "you've got mail" - 5 stars
// you have not seen "greatest showman" - 4 stars

let movies = [{
        title: "frozen",
        hasWatched: true,
        rating: 3.5
    },
    {
        title: "frozen II",
        hasWatched: false,
        rating: 3.0
    },
    {
        title: "bird box",
        hasWatched: true,
        rating: 4.0
    }
]
console.log(movies);

movies.forEach(function (lala) {
    let string = "you have ";
    if (lala.hasWatched == true) {
        string += "watched ";
    } else {
        string += "not seen "
    }
    string += "\"" + lala.title + "\" - ";
    string += lala.rating + " stars"
    console.log(string);
})

// or

function createString(lala) {
    let string = "you have ";
    if (lala.hasWatched == true) {
        string += "watched ";
    } else {
        string += "not seen "
    }
    string += "\"" + lala.title + "\" - ";
    string += lala.rating + " stars";
    return string;
}

movies.forEach(function (lala) {
    console.log(createString(lala));
})