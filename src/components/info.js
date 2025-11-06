import aboutImg from "/images/aboutmepic.png";
import pokerGame from "/images/5CardPokerGame.jpg";
import jamGame from "/images/hotelolympia.jpg";
import rage2 from "/images/rage2gamecover.jpg";
import wolfenstein from "/images/wolfensteinybgamecover.jpg";
import fallout from "/images/fallout76gamecover.jpg";


const Personal_Info = {
    fName: "Aleena",
    lName: "Torres",
    introHead: `Aleena Torres 👋`,
    introText: "Hi my name’s Aleena. I’m an avid gamer who decided to turn her hobby into a career. My passions include building RESTful systems, producing deliverables under pressure, and properly unit testing my work before submission. Ask me to join your next project!",
}

const About_Me = {
    title: "About Me",
    content:
        {
            image: aboutImg,
            alt: "1a. QA Role Image, 2b. Global Game Jam Logo, 3b. Game Controller",
            text: "I have always loved engineering things, even from a young age. Today, I channel that energy into building software. I have experience in QA for three separate AAA titles grossing millions, built my own projects both independently and with a team, and completed my mastery of Full-Stack development. I am constantly on the lookout for new ideas and projects to bring to life. Whether I’m using SQL, React, Java, or C, I am confident in my ability to produce results.",
        },        
}

const Contact_Info = {
    title: "Contact",
    content: "Let’s connect! Feel free to reach out to me via email or LinkedIn."
}

const Contact_Links = {
    Email: "mailto:aroset919@gmail.com",
    GitHub: "https://github.com/aroset919",
    LinkedIn: "https://www.linkedin.com/in/aleena-r-torres/",
}

const Personal_Projects = {
    P1: {
        title: "Five Card Poker",
        description: "A web app which allows the user to simulate a 5 card poker draw with 3 draws.",
        image: pokerGame,
        alt: "Site Pic",
        link: "https://github.com/aroset919/5Card-Poker",
        link_text: "View on GitHub",
    },
    P2: {
        title: "Hotel Olympia",
        description: "A global game jam project where I worked with a team of people to build a game! One of my favorite projects!",
        image: jamGame,
        alt: "Game Still",
        link: "https://v3.globalgamejam.org/2020/games/hotel-olympia-4",
        link_text: "Check it Out",
    },
}

const Credited_Projects = {
    C1: {
        title: "Rage 2",
        description: "An Avalanche Studios game published by Bethesda Softworks",
        image: rage2,
        alt: "Rage 2 Game Cover",
        link: "https://bethesda.net/en/game/rage2",
        link_text: "View on Site",
    },
    C2: {
        title: "Wolfenstein: Youngblood",
        description: "A first person shooter designed by Machine Games and published by Bethesda Softworks",
        image: wolfenstein,
        alt: "Wolfenstein-Youngblood Game Cover",
        link: "https://bethesda.net/en/game/wolfenstein-youngblood",
        link_text: "View on Site",
    },
    C3: {
        title: "Fallout: 76",
        description: "One of Beethesda Softworks most sucessful franchieses.",
        image: fallout,
        alt: "Fallout 76 Game Cover",
        link: "https://fallout.bethesda.net/en",
        link_text: "View on Site",
    },
}

const My_Skills = {
    Languages: 
        [
            "JavaScript", 
            "Java", 
            "SQL",
            "C / C++"
        ],
    Libraries:
        [
            "React",
            "Node.js",
            "Express.js",
            "Axios"
        ],
    Tools:
        [
            "Jira",
            "Hansoft",
            "PostgreSQL"
        ]
}

export {Personal_Info, About_Me, Contact_Info, Contact_Links, Personal_Projects, Credited_Projects, My_Skills}