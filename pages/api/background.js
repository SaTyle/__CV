const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Shri Vyanknath Vidyalaya, Loni Vyankanath',
                degree: '5th std to 9th std',
                detail: "Completed 5th standard to 9th standard from SVVLV. ",
                year: '2013-2018'
            },
            {
                id: 1,
                title: 'D.A Satav jr Collage, Baramati',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC Science subjects from Creative Science Academy, Baramati.",
                year: '2018-2019'
            },
            {
                id: 2,
                title: 'Abhinav International School, Baramati',
                degree: 'HSC, In Science',
                detail: "Completed HSC part 1 and part 2 in Pre-Engineering Abhinav International School, Baramati.",
                year: '2020-2021'
            },
            {
                id: 3,
                title: 'DY Patil Collage Of Engineering, Akurdi',
                degree: 'B.Tech in Information Technology',
                detail: "Bachelor's Degree in Computer System Engineering from DYPCOE, Akurdi",
                year: '2021-2025'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ITESA',
                role: 'Technical Lead',
                url: 'https://www.linkedin.com/company/itesa-dyp/',
                desc: 'I am a Technical Lead at ITESA, where I lead and inspire teams to create innovative and efficient solutions. With a strong background in technology and a passion for leadership, I drive projects forward, ensuring they meet the highest standards of quality and deliver exceptional results.',
                year: '08/2023 - Present',
                location: 'Akurdi(411035), India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
