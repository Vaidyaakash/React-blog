import { createContext, useState } from "react";

export const store = createContext()


const DetailB = (props) => {

    const [detail, setDetail] = useState([
        {
            "title": "Kerala attracts 3.8 mn domestic tourists",
            "image": "https://www.financialexpress.com/wp-content/uploads/2022/05/1-850.jpg",
            "description": "Overcoming the grim blow dealt by the COVID-19 pandemic, Kerala Tourism has bounced back clocking 3.8 million domestic tourists in the first quarter of 2022, on footfalls during the corresponding period of 2021, Tourism Minister P A Mohamed Riyas said on Wednesday.",
            "category": "Tourism",
            "date": "/December 27, 2021",
            "id": "0"
        },
        {
            "title": "India's Neeraj Chopra says virus restrictions hit Olympic hopes",
            "image": "https://exchange4media.gumlet.io/news-photo/114826-neeraj-chopra-122321.jpg?w=400&dpr=2.6",
            "description": "India's javelin star Neeraj Chopra said Wednesday that the lack of international competition because of coronavirus restrictions has badly hampered preparations for his first Olympic Games. Chopra, a farmer's son from a village outside of Delhi became a track .",
            "category": "Sports",
            "date": "/January 27, 2022",
            "id": "48"
        },
        {
            "title": "Best Tech News Mobile Apps For Android in 2022",
            "image": "https://i0.wp.com/itechviral.com/wp-content/uploads/2020/08/18-best-technology-apps-for-android-1.png?fit=436%2C333&ssl=1",
            "description": "Best Tech News Mobile Apps For Android in 2022Just like some browsers on your device will alluse, and also you can easily bookmark your favorite tech news article. These are some of the best Android apps to read tech news articles. Also, I’ll make it clear now on their popularity and user reviews.#1. Google News #2. Flipboard #3. Gadgets 360 #4. CNET #5. TechCrunch #6. Feedly ",
            "category": "Technology",
            "date": "/October 27, 2021",
            "id": "49"
        },
        {
            "title": "Indian gamers in tournament",
            "category": "Bollywood",
            "description": "New Delhi, October 27: While the World Esports Cup 2021 (WEC '21) is all set to showcase the best rivalries, star Bollywood actor Tiger Shroff will be cheering the Indian contingent as he announced his support for the Indian team, competing for the title and the enormous prize pool of $100k.",
            "image": "https://www.mykhel.com/img/2021/10/tigershroffxworldesportscup-1635324090.jpg",
            "date": "/October 27, 2021",
            "id": "11"
        },
        {
            "title": "Apple to launch RealityOS for AR/VR",
            "category": "Technology",
            "description": "Apple's RealityOS will power the VR headsets and will be in a state to offer a combination of VR and AR experiences, which will help the user to immerse in virtual content along with layering virtual elements over the real-world environments.  ",
            "image": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/05/vr-headset-freepik-1653918479.jpg",
            "date": "/January 21, 2022",
            "id": "111"
        },
        {
            "title": "Conjunctivitis to Dry eye Syndrome",
            "category": "Health",
            "description": "In summers, we see a rise in individuals walking to ophthalmologists with a red eye. The scorching sun brings a lot of discomfort to your body in many forms. A few types of issues may be more likely to develop. Here are some of the common problems that your eyes suffer from in the summers.",
            "image": "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/05/eyes-1653924529.jpg",
            "date": "/May 8, 2022",
            "id": "1111"
        },


        // Bollywood


        {
            "title": "Virat and Anushka appeal to paparazzi to not click their daughter’s picture",
            "category": "Bollywood",
            "description": "Mumbai, January 13: Actor-producer Anushka Sharma and her cricketer-husband Virat Kohli on Wednesday (January 13) urged paparazzi to not click photos of their newborn daughter. Kohli had announced the arrival of their first child on January 11, saying that both the baby and Sharma were healthy.",
            "image": "https://www.mykhel.com/img/2021/01/kohli-aushka-1610525810.jpg",
            "date": "/Feb 1, 2022",
            "id": "1"
        },
        {
            "title": "‘Commando 3’ song ‘Tera Baap Aaya’: Vidyut Jammwal starrer is all about attitude and swagger",
            "category": "Bollywood",
            "description": "After releasing the trailer around two weeks ago, the makers of the upcoming film Commando 3 have released the first song of the film today Titled Tera Baap Aaya the rapping number is all about attitude and sagger.",
            "image": "https://www.theindianwire.com/wp-content/uploads/2019/11/Commando-3-Poster.jpg",
            "date": "/December 12, 2021",
            "id": "2",
        },
        {
            "title": "What do you Want to Read in Tollywood News?",
            "category": "Bollywood",
            "description": "Tollywood is the second largest entertainment industry in the country. It comes after Bollywood but it is bigger than the Bollywood in terms of numbers of films produced and investment. To know about this movie industry, you should sign in for latest.",
            "image": "https://udayamtelugunews.files.wordpress.com/2020/11/tollywood-news.jpg",
            "date": "/January 21, 2022",
            "id": "3",
        },
        {
            "title": "Nagabhushan on ‘Honeymoon’: ‘A comedy for the family’",
            "category": "Bollywood",
            "description": "Kannada actor Nagabhushan has every reason to celebrate. His first film as a leading man, the 2021 comedy, Ikkat won him rave reviews. The actor returns with a web-series, Honeymoon, where he plays the lead, apart from writing the story and screenplay. Honeymoon is produced by Shri Muthu Cine Services.",
            "image": "https://www.thehindu.com/incoming/8ljfcm/article65460530.ece/alternates/FREE_1200/Honeymoon%2003.JPG",
            "id": "4",
            "date": "/june 15, 2021",
            "art": "https://www.thehindu.com/entertainment/movies/nagabhushan-on-honeymoon-a-comedy-for-the-family/article65460527.ece",
        },
        {
            "title": "‘F3’ movie review: Silly, but has its fun moments",
            "category": "Bollywood",
            "description": "F3: Fun and Frustration is more of a franchise than a sequel to F2: Fun and Frustration. Anil Ravipudi, who has written and directed the film, embarks on another fun ride with the characters from the first film, some of their character traits intact, in a different story. This is an unapologetic leave-your-brains-at-home-and-go-have-a-laugh film.",
            "image": "https://www.thehindu.com/incoming/cf5tc9/article65466468.ece/alternates/FREE_1200/F3%20%283%29.jpg",
            "id": "5",
            "date": "/May 21, 2021",
            "art": "https://www.thehindu.com/entertainment/reviews/f3-movie-review-silly-but-has-its-fun-moments/article65466465.ece"

        },
        {
            "title": "Rana, Sai Pallavi’s ‘Virata Parvam’ theatrical release preponed",
            "category": "Bollywood",
            "description": "Virata Parvam, the Telugu film directed by Venu Udugula and starring Rana Daggubati and Sai Pallavi in the lead, will now release on June 17 as opposed to the earlier scheduled date of July 1. Inspired by real events in Telangana of the 1990s, the romance drama set against the naxalite movement in the region, also stars Priyamani, Nandita Das, Eshwari Rao and Zareena Wahab.",
            "image": "https://www.thehindu.com/incoming/6p40yc/article65479507.ece/alternates/FREE_1200/virata%20parvam%20%284%29.JPG",
            "date": "/Feb 29, 2022",
            "id": "7",
            "art": "https://www.thehindu.com/entertainment/movies/rana-sai-pallavis-virata-parvam-theatrical-release-preponed/article65479503.ece"
        },
        {
            "title": "‘Anek’ movie review: Anubhav Sinha launches an incisive inquiry",
            "category": "Bollywood",
            "description": "Ayushmann Khurrana stars is a deeply-political film that asks why people of certain parts of India have to repeatedly prove their love for the country. Anubhav Sinha is like an intrepid reporter on ground zero who negotiates multiple points of view.",
            "image": "https://www.thehindu.com/entertainment/movies/p4cya4/article65466356.ece/alternates/FREE_1200/anek.jpeg",
            "id": "8",
            "date": "/May 14, 2022",
            "art": "https://www.thehindu.com/entertainment/movies/anek-movie-review-anubhav-sinha-launches-anincisive-inquiryinto-a-disturbing-truth/article65466338.ece"
        },
        {
            "title": "Vivek Athreya: ‘Ante Sundaraniki’ is Nani-Nazriya’s romance and a social commentary",
            "category": "Bollywood",
            "description": "Writer-director Vivek Athreya opens up on the Nani-Nazriya Telugu film ‘Ante Sundaraniki’, which he terms as a contemporary social commentary Vivek Athreya, the Telugu writer-director who debuted with the romance drama Mental Madhilo and followed it up with the black comedy Brochevarevarura, is one of the promising new voices of Telugu cinema.",
            "image": "https://www.thehindu.com/incoming/asu08v/article65479855.ece/alternates/FREE_1200/vivek%20athreya%20%281%29.jpg",
            "id": "9",
            "date": "/March 21, 2022",
            "art": "https://www.thehindu.com/entertainment/movies/vivek-athreya-ante-sundaraniki-is-nani-nazriyas-romance-and-a-social-commentary/article65479275.ece"
        },
        {
            "title": "‘Laal Singh Chaddha’ movie trailer: Aamir Khan channels Tom Hanks in ‘Forrest Gump’ remake",
            "category": "Bollywood",
            "description": "The film is directed by Advait Chandan, and adapted for Indian screens by Atul Kulkarni, from the original screenplay by Eric Roth. The trailer of Aamir Khan’s much-anticipated drama Laal Singh Chaddha was released on Sunday, during the IPL 2022 finale. The film is an official Hindi adaptation of the Academy Award-winning 1994 film Forrest Gump, which had Tom Hanks in the lead role. The other prominent cast members include Kareena Kapoor Khan, Mona Singh and Naga Chaitanya.",
            "image": "https://www.thehindu.com/entertainment/movies/2a8n5u/article65475497.ece/alternates/FREE_1200/laal.jpeg",
            "date": "/March 25, 2022",
            "id": "10",
            "art": "https://www.thehindu.com/entertainment/movies/laal-singh-chaddha-movie-trailer-aamir-khan-channels-tom-hanks-in-forrest-gump-remake/article65475484.ece"
        },

        // Health

        {
            "title": "India records 2,338 new COVID-19 cases, 19 deaths",
            "category": "Health",
            "description": "India's active coronavirus caseload increased by 185 in 24 hours India recorded 2,338 new COVID-19 infections in a day that took its case tally to 4,31,58,087 while the number of active cases rose to 17,883, according to Union Health Ministry data updated on May 31. The death toll climbed to 5,24,630 with 19 more people succumbing to the viral disease, the data updated at 8 a.m. stated.",
            "image": "https://www.thehindu.com/incoming/hjiazx/article65478503.ece/alternates/FREE_1200/IMG_INDIA-HEALTH-VIRUS-V_2_1_619QOKK6.jpg",
            "date": "/March 20, 2022",
            "id": "12",
            "art": "https://www.thehindu.com/news/national/india-records-2338-new-covid-19-cases-19-deaths/article65478493.ece"
        },
        {
            "title": "Argentina reports two cases of monkeypox",
            "category": "Health",
            "description": "Argentina now becomes the latest country to confirm cases of monkeypox as part of a global outbreak. Argentina reported two cases of the monkeypox virus on Friday in men who had recently arrived from Spain, marking the first time the presence of the virus has been confirmed in Latin America during this latest outbreak.Argentina's Health Mministry first confirmed a man from the province of Buenos Aires who had traveled to Spain has monkeypox.",
            "image": "https://www.thehindu.com/incoming/on57dg/article65446445.ece/alternates/FREE_1200/2022-05-19T160048Z_1340806971_RC2BAU9ASRI5_RTRMADP_3_HEALTH-MONKEYPOX.JPG",
            "id": "13",
            "date": "/April 11, 2022",
            "art": "https://www.thehindu.com/news/cities/bangalore/with-fewer-donations-states-only-skin-bank-unable-to-meet-high-demand/article65470693.ece"
        },
        {
            "title": "Monkeypox kills 9 in Congo; first death in Nigeria in 2022",
            "category": "Health",
            "description": "Nigeria has not had an outbreak of monkeypox since September 2017, but it continues to report sporadic cases of the disease Nine people have died of monkeypox in Congo in 2022 while Nigeria has recorded its first death from monkeypox this year in a patient with underlying medical conditions",
            "image": "https://www.thehindu.com/incoming/f958pd/article65476335.ece/alternates/FREE_1200/2022-05-29T212357Z_899971494_RC2BCU9ZBULG_RTRMADP_3_HEALTH-MONKEYPOX-WHO.JPG",
            "date": "/January 21, 2022",
            "id": "14",
            "art": "https://www.thehindu.com/news/international/monkeypox-kills-9-in-congo-first-death-in-nigeria-in-2022/article65476318.ece"
        },
        {
            "title": "The new laws relating to surrogacy and assisted reproduction, and related challenges",
            "category": "Health",
            "description": "A couple has moved the Bombay High Court in a case related to the Surrogacy Act enacted in December last year On May 18, the Bombay High Court sought Mumbai-based Hinduja Hospital’s reply after a couple moved the court seeking to complete a surrogacy procedure, which commenced before Parliament passed the Assisted Reproductive Technologies (ART) Act and the Surrogacy Act in December 2021.",
            "image": "https://www.thehindu.com/todays-paper/tp-opinion/6fevea/article28742321.ece/alternates/FREE_1200/29thvijaita-siGH067KTA83jpgjpg",
            "date": "/February 5, 2022",
            "id": "15",
            "art": "https://www.thehindu.com/news/national/explained-surrogacy-assisted-reproduction-in-india-laws-offence-problems/article65443258.ece"
        },
        {
            "title": "WHO: Monkeypox won't turn into pandemic, but many unknowns",
            "category": "Health",
            "description": "WHO’s monkeypox experts said they don’t expect the cases reported to date to turn into another pandemic, but acknowledged there are still many unknowns about the virus The World Health Organization's top monkeypox expert said she doesn't expect the hundreds of cases reported to date to turn into another pandemic, but acknowledged there are still many unknowns about the disease, including how exactly it's spreading and whether the suspension of mass smallpox",
            "image": "https://www.thehindu.com/incoming/4zc3cx/article65476240.ece/alternates/FREE_1200/WHO_Monkeypox_28964.jpg-da569.jpg",
            "id": "16",
            "date": "/January 9, 2022",
            "art": "https://www.thehindu.com/news/international/who-monkeypox-wont-turn-into-pandemic-but-many-unknowns/article65476210.ece"
        },
        {
            "title": "Five books for your well being",
            "category": "Health",
            "description": "Health books for May speak of yoga, immunity and matters of the mind that help us to live harmoniously The Immunity Diet: Fight off Infections and Live Your Best Life, By  Kavita Devgan, Rupa Publications Health Books for May: The Immunity Diet Health Books for May: The Immunity Diet Conversations around immunity have taken centre stage ever since Covid-19 hit us. Everybody now realises that a strong immune system and precautions are the best weapons against the pandemic. ",
            "image": "https://www.thehindu.com/incoming/nkfw98/article65462732.ece/alternates/FREE_1200/BooksMain%207.jpg",
            "id": "17",
            "date": "/June 4, 2022",
            "art": "https://www.thehindu.com/books/health-books-for-may-when-the-mind-fights-the-body-fights-better/article65462710.ece"
        },
        {
            "title": "Air pollution linked with more severe COVID-19, study finds",
            "category": "Health",
            "description": "The researchers modelled historical exposure to three common air pollutants before the pandemic - fine particulate matter, nitrogen dioxide and ground-level ozone Common air pollutants, such as small particulate matter and ground-level ozone.",
            "image": "https://www.thehindu.com/incoming/1cwfa4/article65456256.ece/alternates/FREE_1200/1224819216.jpg",
            "id": "18",
            "date": "/March 5, 2022",
            "art": "https://www.thehindu.com/sci-tech/health/air-pollution-linked-with-more-severe-covid-19-study/article65456211.ece"
        },
        {
            "title": "India logs 2,124 Covid cases in a day, 17 deaths",
            "category": "Health",
            "description": "The Health Ministry stressed that more than 70% of the deaths occurred due to comorbidities. India saw a single day rise of 2,124 new coronavirus infections, taking the infection tally to 4,31,42,192, while the active cases rose to 14,971, according to the Union health ministry data updated on Wednesday. The active cases comprised 0.03% of the total infections, while the national COVID-19 recovery rate was recorded at 98.75%, the Health Ministry said. An increase of 130 cases has been recorded in the active COVID-19 caseload in a span of 24 hours.",
            "image": "https://www.thehindu.com/incoming/rz35sg/article65459293.ece/alternates/FREE_1200/IMG_CORPORATION_HEALTH_S_2_1_RH9RL5D2.jpg",
            "id": "19",
            "date": "/April 2, 2022",
            "art": "https://www.thehindu.com/news/national/india-logs-2124-covid-cases-in-a-day-17-deaths/article65459287.ece"
        },
        {
            "title": "Govt plans to repurpose CoWIN for its Universal Immunisation Programme",
            "category": "Health",
            "description": "Under the Universal Immunisation Programme, the government provides shots for 12 vaccine-preventable diseases The Union government is planning to repurpose the Co-WIN platform for India's Universal Immunisation Programme and other national health programmes while continuing with its current function of recording Covid vaccination and issuing certificates. The vaccination record under the Universal Immunisation Programme (UIP) is now maintained manually.",
            "image": "https://www.thehindu.com/news/national/30fo2e/article38391462.ece/alternates/FREE_1200/vbk-cowin-portal-aadhaar-vijay-soneji",
            "id": "20",
            "date": "/May 10, 2022",
            "art": "https://www.thehindu.com/news/national/govt-plans-to-repurpose-cowin-for-its-universal-immunisation-programme/article65466300.ece"
        },
        {
            "title": "In first year of lockdown, more died of other respiratory diseases than COVID-19",
            "category": "Health",
            "description": "The medical certification of cause of death report says that 1,60,618 deaths in 2020 were due to COVID-19 which differs from government’s official toll of 1.49 lakh. The first year of COVID-19 lockdown saw the highest incidences of persons dying of respiratory illnesses in a decade, the 2020 report on medical certification of cause of death (MCCD) compiled by the Registrar General of India (RGI) says. In 2020, as many as 1,81,160 deaths occurred due to respiratory diseases such as pneumonia, asthma and bronchitis, higher than 1,52,311 such deaths reported in 2019. ",
            "image": "https://www.thehindu.com/incoming/fdgxx9/article65463408.ece/alternates/FREE_1200/IMG_9127_21-10-2020_19-4_2_1_QU9HISQ4.jpg",
            "id": "21",
            "date": "/April 6, 2022",
            "art": "https://www.thehindu.com/news/national/govt-plans-to-repurpose-cowin-for-its-universal-immunisation-programme/article65466300.ece"
        },
        {
            "title": "Revamped Ayushman Bharat Health Account mobile application launched",
            "category": "Health",
            "description": "ABHA app has a new user interface and added functionalities that enable individuals to access their health records anytime and anywhere The National Health Authority (NHA), under its flagship scheme of Ayushman Bharat Digital Mission (ABDM), on Tuesday announced the launch of a revamped Ayushman Bharat Health Account (ABHA) mobile application. The ABHA app, previously known as NDHM Health Records app, is available for download from Google Play Store and already has over four lakh downloads.",
            "image": "https://www.thehindu.com/news/national/vuir72/article65456099.ece/alternates/FREE_1200/abha%20app.jpg",
            "id": "22",
            "date": "/March 20, 2022",
            "art": "https://www.thehindu.com/sci-tech/health/nha-launches-revamped-ayushman-bharat-health-account-mobile-app/article65456076.ece"
        },

        // Technology

        {
            "title": "India’s hobbling 5G spectrum auction gait",
            "category": "Technology",
            "description": "Telecom operators must be ready to buy 5G compatible spectrum bands at competitive rates to ensure a boom of subscribers India’s 5G moment countries all over the world have rolled out their next generation mobile networks. It accompanies neighbours Pakistan, Afghanistan, Nepal, and Bangladesh to stay in the list of countries .",
            "image": "https://www.thehindu.com/incoming/9y72yl/article65475320.ece/alternates/FREE_1200/IMG_iStock-889321368_2_1_GB9S62G7.jpg",
            "id": "23",
            "date": "/June 21, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/indias-hobbling-5g-spectrum-auction-gait/article65479943.ece"
        },
        {
            "title": "Israeli private detective used Indian hackers in job for Russian oligarchs",
            "category": "Technology",
            "description": "Independent journalist Scott Stedman told a court in New York that jailed private detective Aviram Azari worked on surveillance and cyber-intelligence operations at the behest of Russian oligarchs.  a reporter said in a court filing late Wednesday.",
            "image": "https://www.thehindu.com/sci-tech/technology/d5pfq9/article65475331.ece/alternates/FREE_1200/isinaid.jpg",
            "id": "24",
            "date": "/Jan 21, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/israeli-private-detective-used-indian-hackers-in-job-for-russian-oligarchs/article65475322.ece"
        },
        {
            "title": "OnePlus Nord Buds review: Economical and efficient",
            "category": "Technology",
            "description": "With its comfortable fit, satisfactory sound, IP55 dust and water-resistanc faster than viruses capable of causing a pandemic. First, we get a regular version all this within one brand. OnePlus is one of the perpetrators of this overfeeding of smartphones.",
            "image": "https://www.thehindu.com/incoming/fbtxpp/article65475219.ece/alternates/FREE_1200/OnePlus%20Nord%20Earbuds.jpg",
            "id": "25",
            "date": "/March 29, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/gadgets/oneplus-nord-buds-review/article65475225.ece"
        },
        {
            "title": "Explained | What are the new rules for VPN providers?",
            "category": "Technology",
            "description": "On April 28, the Cert-In issued norms under which VPN providers have to record personal information of their customers, including purpose of using service, for five years The story so far. Amidst strong pushback from various corners, the Central government tells the companies to either comply with rules or exit from India. ",
            "image": "https://www.thehindu.com/incoming/tw7dnv/article65143614.ece/alternates/FREE_1200/IMG_bl02Sept_VPN_pix_2_1_MG8UG5GP.jpg",
            "id": "26",
            "date": "/May 31, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/explained-what-are-the-new-rules-for-vpn-providers-and-how-it-impacts-your-privacy/article65429398.ece"
        },
        {
            "title": "India Post delivers mail using drone in Gujarat under pilot project",
            "category": "Technology",
            "description": "It took the drone used by the Department of Posts 25 minutes for the parcel to reach it’s destination located 46 km from the originating pointThe Department Bhuj taluka to Ner village in Bhachau taluka of Kutch district by the postal department under the guidance of the Union Ministry of Communications, a release issued by the Press Information Bureau (PIB) in Ahmedabad said.",
            "image": "https://www.thehindu.com/news/national/c6hl02/article65473422.ece/alternates/FREE_1200/FT04gktUcAUpnjt.jpg",
            "id": "27",
            "date": "/March 4, 2022",
            "art": "https://www.thehindu.com/news/national/other-states/for-the-first-time-india-post-delivers-mail-using-drone-in-gujarat-under-pilot-project/article65473035.ece"
        },
        {
            "title": "Google said to be in talks to join open e-commerce network ONDC",
            "category": "Technology",
            "description": "Google’s talks with the Indian government to integrate its shopping services with the country's open e-commerce network ONDC follow the success of its payments business over UPI, the government’s initiative for financial transactions Alphabet Inc.'s.",
            "image": "https://www.thehindu.com/todays-paper/tp-international/g7ui2s/article31419875.ece/alternates/FREE_1200/Google-to-verifGHU7C8AL74jpgjpg",
            "id": "28",
            "date": "/May 11, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/google-said-to-be-in-talks-to-join-open-e-commerce-network-ondc/article65467478.ece"
        },
        {
            "title": "Musk sued by Twitter investors for delayed disclosure of stake",
            "category": "Technology",
            "description": "“Mr. Musk engaged in market manipulation and bought Twitter stock at an artificially low price.”Billionaire Elon Musk was sued by Twitter Inc investors for delayed disclosure of  He continued to buy stock after that, and ultimately disclosed in early April that he owned 9.2% of the company.",
            "image": "https://www.thehindu.com/incoming/4d007v/article65464605.ece/alternates/FREE_1200/AFP_329U7KB.jpg",
            "id": "29",
            "date": "/March 21, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/google-said-to-be-in-talks-to-join-open-e-commerce-network-ondc/article65467478.ece"
        },
        {
            "title": "IISc develops device to improve data encryption",
            "category": "Technology",
            "description": "IISc will provide better protection for sensitive digital data such as credit card details, passwords, A team at the Department of Electrical Communication Engineering (ECE), Indian Institute of Science (IISc) has developed a true random number generator (TRNG), which, the team says, can improve data encryption",
            "image": "https://www.thehindu.com/incoming/8qut24/article65467665.ece/alternates/FREE_1200/IMG_PO01_Laptop_2_1_6U8QT0M3.jpg",
            "id": "30",
            "date": "/April 5, 2022",
            "art": "https://www.thehindu.com/sci-tech/technology/google-said-to-be-in-talks-to-join-open-e-commerce-network-ondc/article65467478.ece"
        },

        // Sports

        {
            "title": "ISSF World Cup | Elavenil, Ramita and Shreya win gold in 10m air rifle team event",
            "category": "Sports",
            "description": "Elavenil Valarivan, Ramita and Shreya Agrawal outplayed Denmark 17-5 in the gold medal contest of the 10m air rifle team women’s event at the ISSF World Cup India opened their account at Shreya Agrawal claiming the gold medal in the 10m air rifle team women competition in Baku, Azerbaijan.",
            "image": "https://www.thehindu.com/incoming/i286my/article65479857.ece/alternates/FREE_1200/PTI05_31_2022_000098B.jpg",
            "id": "31",
            "date": "/February 10, 2022",
            "art": "https://www.thehindu.com/sport/other-sports/issf-world-cup-elavenil-ramita-and-shreya-win-gold-in-10m-air-rifle-team-event/article65479826.ece"
        },
        {
            "title": "Heartbreak for India, draw 4-4 with Korea to go out of Asia Cup title race",
            "category": "Sports",
            "description": "Malaysia's 5-0 win over Japan early in the day meant that an outright win became a pre-requisite impressive and fast-paced hockey in a Super 4s match against South Korea but an outright victory eluded them as a 4-4 draw pushed them out of the Asia Cup title race, in Jakarta on Tuesday.",
            "image": "https://www.thehindu.com/incoming/7evx0c/article65480709.ece/alternates/FREE_1200/PTI05_23_2022_000231A.jpg",
            "id": "32",
            "date": "/April 15, 2022",
            "art": "https://www.thehindu.com/sport/hockey/heartbreak-for-india-draw-4-4-with-korea-to-go-out-of-asia-cup-title-race/article65480591.ece"
        },
        {
            "title": "French Open | Rohan Bopanna makes first Grand Slam semifinal since 2015 Wimbledon",
            "category": "Sports",
            "description": "Rohan Bopanna and Matwe Middelkoop will face 12th seeds Marcelo Arevalo and Jean-Julien Roger on June 2 in the last four India’s Rohan Bopanna reached his first Grand Slam semifinal in seven years after he and his Dutch partner Matwe Middelkoop rallied to beat Lloyd Glasspool and a hard-fought contest on May 30 night.",
            "image": "https://www.thehindu.com/incoming/bttkdx/article65479626.ece/alternates/FREE_1200/Bopanna_GettyImages-1303098964.jpg",
            "id": "33",
            "date": "/May 25, 2022",
            "art": "https://www.thehindu.com/sport/tennis/rohan-bopanna-makes-first-grand-slam-semifinal-since-2015-wimbledon/article65479614.ece"
        },
        {
            "title": "Karthik excels, mixed bag for TN players ",
            "category": "Sports",
            "description": "R. Ashwin holds his own, Sai Kishore and Sai Sudharsan draw attention; Varun and Shahrukh disappoint He was a fireball at the end of an innings. The pocket powerhouse innovated, Royal Challengers Bangalore, Dinesh Karthik, superfit at 36, throbbed with life at the death, notching up a whopping 330 runs with whiplash hits at an astonishing strike rate of 183.33.",
            "image": "https://www.thehindu.com/incoming/ppbde1/article65481212.ece/alternates/FREE_1200/PTI05_25_2022_000237A.jpg",
            "id": "34",
            "date": "/June 1, 2022",
            "art": "https://www.thehindu.com/sport/karthik-excels-mixed-bag-for-tn-players/article65481199.ece"
        },
        {
            "title": "Asia Cup hockey | Malaysia holds India to draw but Sardar Singh's men inch closer to final",
            "category": "Sports",
            "description": "India had earlier defeated Japan 2-1 in their first match on Saturday. India almost clinched the title round berth before Razie Rahim turned out to be Malaysia's saviour with a hat-trick in an enthralling 3-3 draw in a 'Super 4' encounter of Asia Cup hockey tournament in Jakarta on Sunday.",
            "image": "https://www.thehindu.com/sport/hockey/vi1bkt/article65473592.ece/alternates/FREE_1200/India-Malaysia.JPG",
            "id": "35",
            "date": "/January 15, 2022",
            "art": "https://www.thehindu.com/sport/hockey/asia-cup-hockey-malaysia-holds-india-to-draw-but-sardar-singhs-men-inch-closer-to-final/article65473572.ece"
        },
        {
            "title": "Kiran quietly pulls off a quartermile stunner",
            "category": "Sports",
            "description": "Her recent 51.84s makes the 21-year-old the second fastest Asian this year. While everything seems to be quiet at the Indian quartermilers’ camp in Antalya, Turkey, there is a lot of fast-paced action happening back home. Another quartermiler Kiran Pahal has come up with an impressive time.",
            "image": "https://www.thehindu.com/incoming/qlcduc/article65481044.ece/alternates/FREE_1200/Kiran%20Pahal%2C%20chest%20No.%20231%20in%20yellow.jpg",
            "id": "36",
            "date": "/April 5, 2022",
            "art": "https://www.thehindu.com/sport/kiran-pahal/article65480972.ece"
        },
        {
            "title": "Neeraj Chopra wants to repeat Tokyo Olympics approach in World Championships",
            "category": "Sports",
            "description": "Chopra is currently training at Kuortane Olympic Training Centre in Finland, where he reached on Thursday after shifting base from Turkey. A World Championships medal is definitely in his mind, but star javelin thrower Neeraj Chopra which did the trick for him during the Tokyo Olympics.",
            "image": "https://www.thehindu.com/sport/athletics/cscay7/article65470443.ece/alternates/FREE_1200/IMG_1332883440.jpg_2_1_SV9Q4MUU.jpg",
            "id": "37",
            "date": "/Feb 5, 2022",
            "art": "https://www.thehindu.com/sport/athletics/no-taking-pressure-chopra-wants-to-repeat-tokyo-olympics-approach-in-world-championships/article65470431.ece"
        },
        {
            "title": "Champions League final kick-off delayed 'for security reasons'",
            "category": "Sports",
            "description": "Supporters tried to force their way through the first ticket checkpoint outside the stadium. The Champions League final between Liverpool and Real Madrid in Paris kicked off over half an hour later than scheduled having been delayed 'due to a security issue', UEFA said on Saturday. announcements in the ground said the hold up was caused by the 'late arrival' of supporters.",
            "image": "https://www.thehindu.com/incoming/xxa9lg/article65471555.ece/alternates/FREE_1200/1399792641.jpg",
            "id": "38",
            "date": "/May 1, 2022",
            "art": "https://www.thehindu.com/sport/football/champions-league-final-kick-off-delayed-for-security-reasons/article65471553.ece"
        },
        
        // Tourism
        
        {
            "title": "Exploring Northeast India: Top Things To Do In Dawki",
            "category": "Tourism",
            "description": "Located in the Northeast state of Meghalaya, a place filled with gushing waterfalls, azure rivers, rich wildlife, and most importantly a place close to the clouds, is a small hamlet named Dawki. The place is famous for its crystal clear Umngot River, which is touted as one of the cleanest rivers in Asia.",
            "image": "https://c.ndtvimg.com/2022-05/pvdd4sro_dawki-_625x300_23_May_22.jpg",
            "id": "39",
            "date": "/April 29, 2022",
            "art": "https://swirlster.ndtv.com/travel/exploring-northeast-india-top-things-to-do-in-dawki-3001282"
        },
        {
            "title": "Top Places To Visit In Idukki On Your Next Getaway To Kerala",
            "category": "Tourism",
            "description": "The alluring Idukki district serves as a promising getaway from the dreary city life and provides a shield in its quaint and naturalistic paradise amplified by splendid natural grandeur. Set amidst beautiful vistas of the rising sun, golden sandy coastline, alluring landscape, pleasant weather, swaying coconut trees",
            "image": "https://c.ndtvimg.com/2022-05/i4pakvg8_idukki-kerala_625x300_16_May_22.jpg",
            "id": "40",
            "date": "/February 17, 2022",
            "art": "https://swirlster.ndtv.com/travel/7-top-places-to-visit-in-idukki-on-your-next-getaway-to-kerala-2980993"
        },
        {
            "title": "Top Places To Visit In Ladakh In Summer 2022",
            "category": "Tourism",
            "description": "An enchanting town and popular vacation destination, there are many splendid places to visit in Ladakh in summer. In recent years, Ladakh has gained popularity as a vacation spot for all types of travelers, including adventure enthusiasts, nature lovers, history fanatics. The lap of Mother Nature.",
            "image": "https://c.ndtvimg.com/2022-04/775r5m_drass_625x300_29_April_22.jpg",
            "id": "41",
            "date": "/February 1, 2022",
            "art": "https://swirlster.ndtv.com/travel/top-5-places-to-visit-in-ladakh-in-summer-2022-2931950"
        },
        {
            "title": "Are The Mountains Calling? Head To These Hill Stations From Delhi To Avoid The Summer Heat",
            "category": "Tourism",
            "description": "Here's a list of hill stations you can visit from Delhi. Have the Delhi summers got you reaching for chilled water all day long? We can surely relate. With soaring temperatures reaching 40 degree Celsius, everyone is looking for an escape. It is time to use up those saved holidays and plan a summer trip! Plan a getaway and revitalise your mind",
            "image": "https://c.ndtvimg.com/2022-05/n98va0io_hill-stations_625x300_13_May_22.jpg",
            "id": "42",
            "date": "/November 17, 2022",
            "art": "https://swirlster.ndtv.com/travel/are-the-mountains-calling-head-to-these-hill-stations-from-delhi-to-avoid-the-summer-heat-2973871"
        },
        {
            "title": "32.79 Lakh Foreigners Visited India In 2020 - The Lockdown Year",
            "category": "Tourism",
            "description": "According to the annual report of the Ministry of Home Affairs for 2020-21, a total of 32,79,315 foreign nationals visited India between April 1, 2020 and December 31, 2020. New Delhi: More than 32.79 lakh foreigners, including over 61,000 Americans, visited India in 2020 when the country.",
            "image": "https://c.ndtvimg.com/2020-09/f451bf2g_odisha-tourism-generic-pixabay-650_625x300_27_September_20.jpg",
            "id": "43",
            "date": "/December 21, 2022",
            "art": "https://www.ndtv.com/india-news/32-79-lakh-foreigners-visited-india-in-2020-the-lockdown-year-2921198"
        },
        {
            "title": "Jaipur: A Voyage Through History And Royalty",
            "category": "Tourism",
            "description": "Major places to see in and around Jaipur speak out loud of the city's cultural heritage include the iconic Jal Mahal, enthralling Neemrana Palace, and Chhatris of Gaitore. The historical city of Jaipur is known to have scores of beautiful tourist places to rejuvenate you in a short span of time.",
            "image": "https://c.ndtvimg.com/2022-04/pttig4m_gaitore_625x300_13_April_22.jpg",
            "id": "44",
            "date": "/January 13, 2022",
            "art": "https://swirlster.ndtv.com/travel/jaipur-a-voyage-through-history-and-royalty-2884713"
        },
        {
            "title": "'Absolute Nonsense': Tourists Driving SUV Through Ladakh's Pangong Lake Angers Internet",
            "category": "Tourism",
            "description": "Some users demanded the police take action against the tourists who are seen smiling while driving on the Pangong Lakebed. Ladakh is a beautiful place. In fact, it is one of the most preferred tourist destinations in the country. But some tourists often leave the place dirty with their irresponsible behaviour.",
            "image": "https://c.ndtvimg.com/2022-04/lnv8tpog_ladakh-tourists-pangong-lake-driving-650_625x300_11_April_22.jpg",
            "id": "45",
            "date": "/January 28, 2022",
            "art": "https://www.ndtv.com/india-news/absolute-nonsense-tourists-driving-suv-through-ladakhs-pangong-lake-angers-internet-2878038"
        },
        {
            "title": "Omicron Hits Tourism Sector With 20% Cancellations: 5 Key Points",
            "category": "Tourism",
            "description": "Omicron threat: The travel and tourism sector is again seeing a rise in cancellations amid the COVID-19 pandemic. New Delhi: The tourism sector that was hit hard by the COVID-19 pandemic for a whole year in 2020 due to lockdowns and travel restrictions is yet again facing a possible crisis. Cancellations have increased during the holiday season, say tour operators.",
            "image": "https://c.ndtvimg.com/2021-12/visrfdc8_mumbai-airport-afp_625x300_03_December_21.jpg",
            "id": "46",
            "date": "/January 23, 2022",
            "art": "https://www.ndtv.com/india-news/20-cancellations-tourism-1st-economic-casualty-of-omicron-5-points-2635095"
        },
        {
           "title": "Nagaland Has No Tourist Office In Districts, Reveals House Panel Report",
            "category": "Tourism",
            "description": "This was revealed by a report of the Nagaland Legislative Assembly Committee on Estimates, which was tabled in the House during the winter session which was concluded on Friday. Kohima: The Nagaland Tourism Department, famous for hosting the annual Hornbill Festival which attracts a large number of domestic and international visitors.",
            "image": "https://c.ndtvimg.com/2020-04/9al6p5h8_nagaland-generic_625x300_12_April_20.jpg",
            "id": "47",
            "date": "/May 23, 2022",
            "art": "https://www.ndtv.com/india-news/scenic-nagaland-has-no-tourist-office-in-districts-house-panel-pulls-up-department-2627267"
        },


    ])

    return (
        <div>
            <store.Provider value={[detail, setDetail]}>
                {props.children}
            </store.Provider>
        </div>
    )
}
export default DetailB;
