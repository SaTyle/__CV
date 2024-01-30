const portfolio = [
    {
        id: 0,
        projectName: "Weather Web Application",
        url: "https://master--weather-in-reactt.netlify.app/",
        image: "projects/weather.png",
        projectDetail: "Developed a dynamic weather detection website using React. Providing real-time temperature, pressure, and humidity updates for user-specified locations. Demonstrated API integration and responsive design for better user experience.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Node.JS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },
    {
        id: 1,
        projectName: "AgroAI - Smart Agricultural Web Application",
        url: "https://red-crop-predictor.onrender.com/",
        image: "projects/Agro-AI.png",
        projectDetail: "AgroAI is a comprehensive web application built using Python Flask that utilizes Artificial Intelligence & Machine Learning to provide intelligent solutions for modern agriculture. It offers three main functionalities: Crop Recommendation, Fertilizer Suggestion, Disease Detection.",
        technologiesUsed: [
            {
                tech: "Flask"
            },
            {
                tech: "Python"
            },
            {
                tech: "numpy"
            },
            {
                tech: "pandas"
            },
            {
                tech: "torch"
            },
        ]
    },
    {
        id: 2,
        projectName: "CryptoAnalyzer: Real-Time Cryptocurrency Insights",
        url: "https://master--crypto-currency-analyzer.netlify.app/",
        image: "projects/crypto.png",
        projectDetail: "CryptoAnalyzer is a powerful and intuitive web application designed to provide real-time insights into the world of cryptocurrencies. Developed using React, this cutting-edge platform offers users a comprehensive analysis of various coins and their current prices, empowering them to make informed decisions in the volatile crypto market.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "axios"
            },
            {
                tech: "react dom"
            },
            {
                tech: "material-ui"
            },
        ]
    },
]

export default function handler(req, res) {
    res.status(200).json(portfolio)
}
