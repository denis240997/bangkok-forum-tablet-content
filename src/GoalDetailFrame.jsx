import SubGoalCard from "./components/SubGoalCard";


const GoalDetailFrame = () => {

    const subgoals = [
        {
            "name": "Moscow’s Investment Portal",
            "content": [
                "To improve efficiency and quality of interaction between the capital city\u0432\u0402\u2122s authorities and businesses, an investment portal was launched in 2014 with the backing of the Moscow Government: https://investmoscow.ru/. For ten years, it has remained one of the most popular specialized resources for businesses. More than 72,000 personal accounts have been registered on the website over time. Entrepreneurs have access to 30 online services on the investment portal. These services facilitate getting support measures sponsored by the city, reduce interaction time, help find platforms, partners and information necessary for the implementation of investment projects. In late 2020, the Moscow Investor service was launched on the investment portal. Using that service as a one-stop shop, Moscow businessmen can submit their questions and proposals regarding investment activities in the capital city and receive answers to their personal accounts within short timeframes. For the sake of convenience, a mobile application was launched in order to make services of the investment portal more readily accessible for the users. Using their smartphone, they can file an application, get information about the city\u0432\u0402\u2122s property and select the most suitable sites, read industry-related news and check the status of their applications in the personal cabinet. Moreover, the investment portal has a section called \u0432\u0402\u045aIndustry,\u0432\u0402\u045c which helps manufacturers find a facility where they potentially can organize their production. In addition, registered users of the portal now have access to a map of integrated development of territories, a list of the latest technological developments, as well as current industry news.",
                {
                    "type": "list",
                    "content": [
                        "Year of service launch: 2014",
                        "More than 16.2 million have visited the portal over 10 years",
                        "Unique visitors per day: about 9,000",
                        "Total registrations on the portal: over 72,000",
                        "Online services have been used more than 500,000 times (including more than 155,000 times in 2021 and more than 55,000 times in the first six months of 2022)",
                        "The bidding system features 4,000 real estate properties owned by the city",
                        "The service for scheduling an appointment to view an object of the auction has been used more than 200,000 times",
                        "The online navigator for business support measures has been used more than 14,000 times"
                    ]
                },
                {
                    "type": "awards",
                    "content": [
                        {
                            "year": "2020",
                            "awards": [
                                "The project was awarded the \u0432\u0402\u045aBeneficial Practice\u0432\u0402\u045c diploma of the review-competition of the Assembly of Capitals and Major Cities of the CIS and the EAEU \u0432\u0402\u045aThe City We Want to Live In\u0432\u0402\u045c",
                                "The project was shortlisted for The DADI Awards in the \u0432\u0402\u045aFinance Services\u0432\u0402\u045c category"
                            ]
                        },
                        {
                            "year": "2021",
                            "awards": [
                                "The project won the Digital Summit Award in the \u0432\u0402\u045aBest Solution for Economic Development\u0432\u0402\u045c nomination",
                                "The project received a special prize in the Russian Golden Site award in the \u0432\u0402\u045aBusiness and Investment Support Site\u0432\u0402\u045c nomination"
                            ]
                        }
                    ]
                },
                {
                    "type": "logo",
                    "href": "./img/invest_moscow.svg"
                }
            ]
        },
        {
            "name": "I.Moscow, Moscow Innovation Cluster Program",
            "content": [
                "The Moscow Innovation Cluster (MIC) is a Moscow Government-sponsored project created in April 2019 in order to foster development of innovative organizations, projects and cooperation between large companies, industries, small and medium-sized businesses, educational and scientific organizations and the city. The cluster brings together entrepreneurship, development institutions, authorities and other market stakeholders who need effective tools to create innovative and technology-intensive projects. As of today, more than 35,000 organizations are listed as participants and partners of the Moscow Innovation Cluster, including the Skolkovo Foundation, the Research Centre Kurchatov Institute, Rosnano Corp., technology parks Strogino and Slava, small and medium-sized enterprises, as well as research centers of Moscow\u0432\u0402\u2122s major universities.",
                "The IT platform of the Moscow Innovation Cluster, i.Moscow, combines the necessary tools and services for creating and managing innovative projects, from electronic submission of applications for support measures and providing pilot sites, to assistance in finding new clients, partners and investors. i.Moscow in figures: over 35,000 participants and partners, 195 support measures, 1,900 premises available for rent, over 1,500 projects, and a partner search tool (investments, premises, industrial partners). An important part of i.Moscow is occupied by social innovations; their implementation will significantly improve the quality of living in the city. That said, electronic filings for services allow all citizens, including people with disabilities, to use the services.",
                {
                    "type": "list",
                    "content": [
                        "Year of project launch: 2019",
                        "More than 35,000 participants and partners are registered in the Moscow Innovation Cluster",
                        "Cluster members represent 81 regions of Russia",
                        "12 cross-industry clusters have been created as part of the project",
                        "More than 200 support measures are available to the members of the cluster",
                        "Over 550 manufacturers have been registered on the contract manufacturing exchange"
                    ]
                },
                {
                    "type": "awards",
                    "content": [
                        {
                            "year": "2020",
                            "awards": [
                                "The project won the Runet Prize in the \u0432\u0402\u045aEconomy and Business\u0432\u0402\u045c category",
                                "The platform took second place in the Russian national competition of regional and municipal informatization projects PROF-IT.2020, in the Support for Business category."
                            ]
                        },
                        {
                            "year": "2021",
                            "awards": [
                                "The project received a special prize in the Russian \u0432\u0402\u045aGolden Site\u0432\u0402\u045c award in the in the \u0432\u0402\u045aBest Usability / UX\u0432\u0402\u045c nomination"
                            ]
                        }
                    ]
                },
                {
                    "type": "href",
                    "href": "https://i.moscow/"
                },
                {
                    "type": "logo",
                    "href": "./img/moscow_innovation_cluster.svg"
                }
            ]
        },
        {
            "name": "Moscow’s Digital Twin",
            "content": []
        },
        {
            "name": "Supplier Portal",
            "content": []
        },
        {
            "name": "Program for the creation of workplaces",
            "content": []
        },
        {
            "name": "Special economic zone “Technopolis”",
            "content": []
        },
        {
            "name": "Pilot testing of innovative solutions",
            "content": []
        },
        {
            "name": "Project “Vision Zero”",
            "content": []
        }
    ]

    return (
        <div className="goalDetailFrame">
            <div className="goalDetailColumn">
                {
                    subgoals.map((goal, index) => (<SubGoalCard subgoal={goal} key={index} />))
                }
            </div>
        </div>
    )
};

export default GoalDetailFrame;