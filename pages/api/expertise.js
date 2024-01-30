const expertise = [
    {
        id: 0,
        title: 'Competitive Programmer',
        desc: "I'm a passionate competitive programmer with a knack for solving complex problems. Through competitions on platforms like LeetCode and CodeChef, I've honed my skills, consistently achieving top rankings and crafting elegant solutions. My journey in competitive programming has fueled my love for algorithms and problem-solving.",
    },
    {
        id: 1,
        title: 'Full Stack Development',
        desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, NEXT.js, REACT.js and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 2,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 3,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the Best.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
