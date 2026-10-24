let section = document.querySelector("#movie-list")

const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      },
    {
        title: "The Incredibles",
        date: "Nov 5, 2004",
        description: "A family of undercover superheroes must embrace their powers to save the world from a dangerous villain.",
        imgSrc: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
        imgAlt: "The Incredibles family posing in their superhero suits",
        ages: "7+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Finding Nemo",
        date: "May 30, 2003",
        description: "A cautious clownfish travels across the ocean to rescue his son with the help of a forgetful blue tang.",
        imgSrc: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        imgAlt: "Nemo and Marlin swimming through the ocean",
        ages: "5+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "How to Train Your Dragon",
        date: "Mar 26, 2010",
        description: "A young Viking befriends a dragon and challenges his village's long-standing beliefs about the creatures.",
        imgSrc: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
        imgAlt: "Hiccup and Toothless flying through the sky",
        ages: "7+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Toy Story",
        date: "Nov 22, 1995",
        description: "A cowboy doll feels threatened when a new space ranger toy becomes his owner's favorite.",
        imgSrc: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        imgAlt: "Woody and Buzz Lightyear with their toy friends",
        ages: "5+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Up",
        date: "May 29, 2009",
        description: "An elderly widower ties thousands of balloons to his house and embarks on an adventure with an unexpected young companion.",
        imgSrc: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
        imgAlt: "Carl's floating house lifted by colorful balloons",
        ages: "7+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "WALL-E",
        date: "Jun 27, 2008",
        description: "A lonely waste-collecting robot discovers friendship and love while helping humanity find its way home.",
        imgSrc: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
        imgAlt: "WALL-E the robot standing on a deserted Earth",
        ages: "6+",
        genre: "Animation/Sci-Fi",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Ratatouille",
        date: "Jun 29, 2007",
        description: "A talented rat dreams of becoming a chef and secretly helps a young kitchen worker cook in Paris.",
        imgSrc: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
        imgAlt: "Remy the rat preparing food in a French kitchen",
        ages: "6+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Monsters, Inc.",
        date: "Nov 2, 2001",
        description: "Two monsters working at a scream-powered factory discover that a little human girl may change their world forever.",
        imgSrc: "https://image.tmdb.org/t/p/w500/sgheSKxZkttIe8ONsf2sWXPgip3.jpg",
        imgAlt: "Sulley and Mike Wazowski with Boo",
        ages: "5+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Frozen",
        date: "Nov 27, 2013",
        description: "A fearless princess journeys through a frozen kingdom to find her sister and restore summer.",
        imgSrc: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
        imgAlt: "Elsa and Anna standing in a snowy kingdom",
        ages: "6+",
        genre: "Animation/Musical",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Moana",
        date: "Nov 23, 2016",
        description: "A brave Polynesian teenager sails across the ocean to restore the heart of Te Fiti and save her island.",
        imgSrc: "https://image.tmdb.org/t/p/w500/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
        imgAlt: "Moana sailing across the ocean with Maui",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Coco",
        date: "Nov 22, 2017",
        description: "A young musician enters the Land of the Dead to uncover his family's history and discover the meaning of remembrance.",
        imgSrc: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        imgAlt: "Miguel playing his guitar in the colorful Land of the Dead",
        ages: "7+",
        genre: "Animation/Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Encanto",
        date: "Nov 24, 2021",
        description: "A young Colombian girl without magical powers discovers she may be the key to saving her extraordinary family.",
        imgSrc: "https://image.tmdb.org/t/p/w500/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        imgAlt: "Mirabel standing in front of her family's magical house",
        ages: "6+",
        genre: "Animation/Musical",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "The Lion King",
        date: "Jun 24, 1994",
        description: "A young lion prince must overcome tragedy and reclaim his rightful place as king of the Pride Lands.",
        imgSrc: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        imgAlt: "Simba standing proudly on Pride Rock",
        ages: "7+",
        genre: "Animation/Drama",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Shrek",
        date: "May 18, 2001",
        description: "A grumpy ogre sets out to rescue a princess and discovers that true beauty comes from within.",
        imgSrc: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
        imgAlt: "Shrek and Donkey standing together",
        ages: "7+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Kung Fu Panda",
        date: "Jun 6, 2008",
        description: "An unlikely panda warrior trains to become the Dragon Warrior and defend his valley from a powerful enemy.",
        imgSrc: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg",
        imgAlt: "Po the panda practicing kung fu",
        ages: "7+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Tangled",
        date: "Nov 24, 2010",
        description: "A princess with magical long hair escapes her tower and explores the world with a charming outlaw.",
        imgSrc: "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
        imgAlt: "Rapunzel and Flynn Rider surrounded by floating lanterns",
        ages: "6+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Big Hero 6",
        date: "Nov 7, 2014",
        description: "A young robotics genius teams up with a lovable healthcare robot and his friends to stop a mysterious villain.",
        imgSrc: "https://image.tmdb.org/t/p/w500/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
        imgAlt: "Baymax and Hiro standing with their superhero team",
        ages: "8+",
        genre: "Animation/Action",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "Inside Out",
        date: "Jun 19, 2015",
        description: "Five emotions work together inside a young girl's mind as she adjusts to a major change in her life.",
        imgSrc: "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        imgAlt: "Joy, Sadness, Anger, Fear, and Disgust standing together",
        ages: "7+",
        genre: "Animation/Comedy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        title: "The Lego Movie",
        date: "Feb 7, 2014",
        description: "An ordinary LEGO construction worker is mistaken for a hero destined to save the LEGO universe.",
        imgSrc: "https://image.tmdb.org/t/p/w500/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
        imgAlt: "Emmet and his LEGO friends preparing for an adventure",
        ages: "7+",
        genre: "Animation/Adventure",
        stars: "⭐⭐⭐⭐"
    },
    {
        title: "Zootopia",
        date: "Mar 4, 2016",
        description: "A determined rabbit police officer teams up with a clever fox to solve a mysterious case in a city of animals.",
        imgSrc: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
        imgAlt: "Judy Hopps and Nick Wilde standing in Zootopia",
        ages: "7+",
        genre: "Animation/Mystery",
        stars: "⭐⭐⭐⭐⭐"
    }
    ];

movies.forEach(movie => {
    // Code for going through each movie and creating content for that movie
    let movieElement = `
    <article class="movie">
        <h2>${movie.title}</h2>
        <img src="${movie.imgSrc}"
            alt="${movie.imgAlt}">
        <p><strong>Release Date:</strong> ${movie.date}</p>
        <p><strong>Recommended Age:</strong> ${movie.ages}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> <span>${movie.stars}</span></p>
        <p id='desc'>${movie.description}</p>
    </article>`;

    section.innerHTML += movieElement;
});
