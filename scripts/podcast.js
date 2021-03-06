const podcasts = [
    {
        name: 'Life behind the camera',
        description: 'The first episode where we talk about what content creation is like behind the camera and in real life.',
        url: 'https://www.youtube.com/watch?v=qv8KVGKd3Ls',
        date: '30 September 2017',
        members: ['mcpeachpies', 'Isogravity', 'Noahh__', 'KSores'],
    },
    {
        name: 'Better Together?',
        description: 'In this podcast we talk all about the Better Together update and the future of Minecraft and Minecraft: Java Edition.',
        url: 'https://www.youtube.com/watch?v=7cltxyhR0fM',
        date: '30 October 2017',
        members: ['SugarCaney', 'Miles Pernicious', 'ISean', 'DuoGetsRekt'],
    },
    {
        name: 'Update Aquatic & The Future of Minecraft',
        description: 'In this episode we talk all about the future of Minecraft including news from Minecon Earth and the evolution of Minecraft as a community. As well as welcoming new members and talking about the first episodes of the UHC.',
        url: 'https://www.youtube.com/watch?v=NaaDtuf2mKE',
        date: '1 December 2017',
        members: ['mcpeachpies', 'KSores', 'Isogravity', 'Leeyum_exe', 'Noahh__'],
    },
    {
        name: 'Video Making, Childhood memories, and Q&A',
        description: 'Today we talk about our time making videos during 2017, childhood memories and computer games, as well as answering some questions from fans.',
        url: 'https://www.youtube.com/watch?v=L-zW2qyHbPI',
        date: '31 December 2017',
        members: ['mcpeachpies', 'Leeyum_exe', 'SkyTUM'],
    },
    {
        name: 'The YT Partnership Program, 2018 plans, & Drones!',
        description: 'In this episode they discuss the new Youtube Partnership Program, their channel plans for 2018 as well as Existence\'s plans for 2018 followed by DJI Drone talk with Acg and mcpeachpies.',
        url: 'https://www.youtube.com/watch?v=5sfCoI2tovk',
        date: '31 January 2018',
        members: ['mcpeachpies', 'SkyTUM', 'Acg 1000', 'Noahh__'],
    },
    {
        name: 'Welcome New Members!',
        description: 'Topics including the new members and their future plans, events of February such as the Falcon Heavy launch and more!',
        url: 'https://www.youtube.com/watch?v=PGsbxmkNWH8',
        date: '28 February 2018',
        members: ['Zipix_', 'ItsPurpleJay', 'Acg 1000', 'SBGamut', 'Noahh__'],
    },
    {
        name: 'Reflecting on the past 2 years',
        description: 'A lot has happened in the past 2 years not only on the server, but in the lives of all the members over the years.',
        url: 'https://www.youtube.com/watch?v=Cl05FPDOPNQ',
        date: '31 March 2018',
        members: ['Leeyum_exe', 'mcpeachpies', 'Noahh__', 'DuoGetsRekt', 'OkiePlays', 'Pineapple'],
    },
    {
        name: 'What\'s really going on with Existence',
        description: 'Join Jay, Caney, Noah & Acg in episode 8 of the Existence podcast covering all the madness of April including the Minecon earth announcement, impacts of real life on content creation, what\'s been going on with Existence and more!',
        url: 'https://www.youtube.com/watch?v=J8UjQ1GtU4Y',
        date: '30 April 2018',
        members: ['SugarCaney', 'ItsPurpleJay', 'Acg 1000', 'Noahh__'],
    },
    {
        name: 'The evolution of the Minecraft Community ft. Waystone SMP',
        description: 'Peach and Pineapple are joined by a few members of Waystone SMP & discuss the upcoming UHC and how the Minecraft community has changed over the years and how it drives SMP communities.',
        url: 'https://www.youtube.com/watch?v=Nvg4vwuFlSY',
        date: '31 May 2018',
        members: ['mcpeachpies', 'Pineapple', 'Naragath', 'IAmPhos', 'Wafflestick', 'Kanelia'],
    },
    {
        name: 'School is confusing',
        description: 'School is confusing, but it only gets worse when you have 4 people all from different parts of the world trying to explain their systems to each other. Join mcpeachpies, Kyle, Duo, and Acg as they try their very best to understand different countries schooling systems.',
        url: 'https://www.youtube.com/watch?v=qB4tCpx2lvk',
        date: '1 July 2018',
        members: ['mcpeachpies', 'DuoGetsRekt', 'Acg 1000', 'KSores'],
    },
    {
        name: 'Why we haven\'t Updated to 1.13',
        description: 'Join mcpeachpies, Pineapple, SugarCaney and our latest member Chrismon to episode 11 of the Existence Podcast! This episode\'s topics including what we\'ve all been up to and why we haven\'t updated to the server to 1.13 or started a season 3.',
        url: 'https://www.youtube.com/watch?v=6anOfDsQM_w',
        date: '31 July 2018',
        members: ['mcpeachpies', 'SugarCaney', 'Chrismon', 'Pineapple'],
    },
    {
        name: 'The Beginning of Phase 2',
        description: '1.13 is here and the server has updated. We\'re neck deep in beginning work on \'Phase 2\' of season 2, but what actually is it? Join mcpeachpies, Zipix, Jay & Chrismon as they cover what the future holds for Existence.',
        url: 'https://www.youtube.com/watch?v=XBCJU0xjATg',
        date: '3 September 2018',
        members: ['mcpeachpies', 'ItsPurpleJay', 'Chrismon', 'Zipix_'],
    },
    {
        name: 'MINECON Eartch & New Phase 2 Members!',
        description: 'Join Chrismon, Caney, Yoglington and the new Phase 2 members as they cover all the news and updates to come from MINECON Earth 2018!',
        url: 'https://www.youtube.com/watch?v=XBCJU0xjATg',
        date: '30 September 2018',
        members: ['TheMundane', 'Van', 'Chrismon', 'SugarCaney', 'cSandmanTS1', 'Yoglington', 'Telx'],
    },
    {
        name: 'Our Minecraft 1.14 thoughts',
        description: 'Welcome back to another Existence SMP podcast, featuring a discussion on the upcoming Minecraft 1.14 update and its features, as well as Noah playing the recorder.',
        url: 'https://www.youtube.com/watch?v=vpNyU2S4TOA',
        date: '31 Oktober 2018',
        members: ['TheMundane', 'Noahh__', 'mcpeachpies', 'cSandmanTS1', 'Yoglington', 'TCMidnite'],
    },
    {
        name: 'Problems Behind the Scenes',
        description: 'It\'s been a busy month for Existence with all sorts happening, join Telx, SBGamut, TCmidnite, The Mundane, mcpeachpies and ItsPurpleJay as they recap some of the happenings from behind the scenes of Existence SMP.',
        url: 'https://www.youtube.com/watch?v=-f5bFJv1uQE',
        date: '30 November 2018',
        members: ['TheMundane', 'ItsPurpleJay', 'mcpeachpies', 'Telx', 'SBGamut', 'TCMidnite'],
    },
    {
        name: 'End of Year Wrap-up',
        description: 'Looking back on some of the times we\'ve had during 2018 and the past on Existence, as well as some of the latest 1.14 news, Hypixel Hytale, and plans for 2019. Join Noah, TC, Mundy and mcpeachpies in the last Existence podcast of 2018! Bring on the new year!',
        url: 'https://www.youtube.com/watch?v=h5NIEM_kvak',
        date: '31 December 2018',
        members: ['TheMundane', 'mcpeachpies', 'Noahh__', 'TCMidnite'],
    },
    {
        name: 'Season 3 Plans for Minecraft 1.14',
        description: 'With 1.14 coming up and Existence turning 3 in March, we\'ve been thinking a bit about Season 3. Join Yog, TC, Peach and Sandman as they discuss our ideas for a 3rd Season of Existence as well as the latest 1.14 news and how it effects the server',
        url: 'https://www.youtube.com/watch?v=f22iDK_Qs_k',
        date: '31 January 2019',
        members: ['Yoglington', 'mcpeachpies', 'cSandmanTS1', 'TCMidnite'],
    },
    {
        name: 'Approaching Next Season',
        description: 'With high hopes for 1.14; Season 3 development has begun! Join Sandman, TCMidnite, Telx and mcpeachpies in welcoming VanillaRaccoon and SomebodyToRemember to the Season 3 team',
        url: 'https://www.youtube.com/watch?v=DCHwlf46sVw',
        date: '28 February 2019',
        members: ['Vanillaraccoon', 'SomebodyToRemember', 'mcpeachpies', 'cSandmanTS1', 'Telx', 'TCMidnite'],
    },
    {
        name: 'Announcing The Patreon Server: Project Keystone',
        description: 'We are glad to finally announce the development of the Existence SMP Patreon server: Project Keystone. We\'re celebrating 3 years and discussing the future plans for Existence SMP.',
        url: 'https://www.youtube.com/watch?v=bgl-PdTajcI',
        date: '31 March 2019',
        members: ['Vanillaraccoon', 'TheMundane', 'mcpeachpies', 'cSandmanTS1', 'Noahh__', 'TCMidnite'],
    },
    {
        name: 'Welcome to Season 3!',
        description: 'Existence SMP Season 3 is here! Join mcpeachpies, The Mundane, Noah, Sandman, Vanillaraccoon and Yoglington in the newly designed Podcast #20 as they discuss playing on the New Season 3 world with the release of Minecraft 1.14!',
        url: 'https://www.youtube.com/watch?v=yLibiwUAINk',
        date: '30 April 2019',
        members: ['Vanillaraccoon', 'TheMundane', 'mcpeachpies', 'cSandmanTS1', 'Noahh__', 'Yoglington'],
    },
    {
        name: 'The TRUTH behind 1.14',
        description: 'There\'s a lot going on with Minecraft right now, 1.14 got off to a rough start, Minecraft turned 10 years old and Minecraft Earth was announced. Luckily our very own Vanillaraccoon recently visited Microsoft studios and has the inside scoop!',
        url: 'https://www.youtube.com/watch?v=xSXbvNG5OuE',
        date: '31 May 2019',
        members: ['KSores', 'Braden', 'TheMundane', 'mcpeachpies', 'Vanillaraccoon'],
    },
    {
        name: 'A YouTubers Insight',
        description: 'Vanillaraccoon is joined by TheMundane and Sandman with a collection of interesting questions he has received during his time as a Lyft driver and YouTuber',
        url: 'https://www.youtube.com/watch?v=Ew-_caPS4xI',
        date: '30 June 2019',
        members: ['cSandmanTS1', 'TheMundane', 'Vanillaraccoon'],
    },
    {
        name: 'Minecraft Earth vs Pokémon GO',
        description: 'Minecraft Earth has entered closed beta and we\'re finally getting a good look at the gameplay, but how does it compare to Pokémon GO?',
        url: 'https://www.youtube.com/watch?v=05T0EMT93Ns',
        date: '1 August 2019',
        members: ['Braden', 'cSandmanTS1', 'mcpeachpies', 'Vanillaraccoon', 'DuoGetsRekt', 'SugarCaney'],
    },
    {
        name: 'Great Odysseys & Bees!',
        description: 'Braden, Sandman, mcpeachpies & Vanillaraccoon are joined by returning host KSores to discuss our upcoming adventures and great odysseys planned for 2019, along with how we\'ve handled traveling in the past and meeting online friends for the first time. Also the covering our thoughts on the latest in Minecraft 1.15 bee related news!',
        url: 'https://www.youtube.com/watch?v=0LLRzg4_-eg',
        date: '31 August 2019',
        members: ['Braden', 'cSandmanTS1', 'mcpeachpies', 'Vanillaraccoon', 'KSores'],
    },
    {
        name: 'Everything MINECON 2019',
        description: 'Join the Existence SMP group with returning co-host KSores as they discuss all the latest news from Minecon LIVE 2019 including new features coming to Minecraft, The Nether Update, Minecraft Dungeons, some board game that everyone is very confused about, and much more!',
        url: 'https://www.youtube.com/watch?v=QN7Ay1FXDBA',
        date: '30 September 2019',
        members: ['Braden', 'cSandmanTS1', 'mcpeachpies', 'Dashleb', 'KSores'],
    },
    {
        name: 'We\'re going to Minecraft FESTIVAL!',
        description: '2020 is fast approaching and with it comes Minecraft Festival! Thanks to Past member TC Midnite, a group of Existence Community members plan on attending the festival and meeting up! Also get an look into Minecraft EARTH gameplay with mcpeachpies now that early access has been released in New Zealand',
        url: 'https://www.youtube.com/watch?v=S4BZKvMa0z8',
        date: '31 October 2019',
        members: ['cSandmanTS1', 'mcpeachpies', 'Wafflestick', 'TCMidnite'],
    },
    {
        name: 'Remember COPPA?',
        description: 'COPPA is continuing to confuse and unsettle many content creators and with YouTube Rewind 2019 on track to pass Justin Bieber\'s "Baby" as second most disliked video of all time, some people are starting to question what the future holds for the platform and its creators.',
        url: 'https://youtu.be/7qLyGaWJFhk',
        date: '9 December 2019',
        members: ['cSandmanTS1', 'mcpeachpies', 'Wafflestick', 'TCMidnite', 'Noahh__'],
    },
    {
        name: 'Plans for the Future',
        description: 'With 2020 underway, changes have started taking place within the Existence SMP Community plus more to come in the future.',
        url: 'https://youtu.be/WcLkvsSfUSM',
        date: '31 March 2020',
        members: ['DelltaDragon', 'mcpeachpies', 'SugarCaney', 'KSores'],
    },
	{
        name: 'RTX vs Java Shaders - What\'s the difference?',
        description: 'Minecraft RTX shaders are all the news lately but when it comes down to it, what actually is the difference compared to traditional Java Edition shaders? Minecraft has a lot of new things on the horizon with RTX for Bedrock Edition, Minecraft Dungeons, and the Nether Update!',
        url: 'https://youtu.be/eyIN0sRiqhc',
        date: '30 April 2020',
        members: ['DelltaDragon', 'mcpeachpies', 'ItsPurpleJay', 'iGalaxy'],
	},
	{
        name: 'Existence Reunion',
        description: 'Since Existence started back in 2016, a lot of people have been apart of the community and servers. This month we came together for an Reunion UHC event and caught up afterwards in episode 30 of the Existence Podcast',
        url: 'https://youtu.be/vnO3L8csMP4',
        date: '31 May 2020',
        members: ['mcpeachpies', 'DelltaDragon', 'SugarCaney', 'Diamondback88', 'DuoGetsRekt', 'Dashleb', 'INeedHelp__', 'ItsPurpleJay', 'TCMidnite'],
	},
	{
        name: 'Community Focus',
        description: 'With the Community Server now open; mcpeachpies, iGalaxy, KSores, & Noah cover everything that\'s happened on the new server so far and talk about some awesome plans going forward! As well as talk about the Minecraft mod \'Sodium\' and reminiscing about gaming.',
        url: 'https://youtu.be/si7XLuiLvew',
        date: '1 August 2020',
        members: ['mcpeachpies', 'iGalaxy', 'KSores', 'Noahh__'],
	},
    {
        name: 'First look at the CAVE UPDATE!',
        description: 'Minecraft LIVE 2020 brought HUGE news for the massively requested Cave Update! Join us in recapping Minecraft LIVE and the first look at what to expect with Minecraft 1.17, the Caves & Cliffs update',
        url: 'https://youtu.be/qejl1ICnc3Q',
        date: '5 October 2020',
        members: ['mcpeachpies', 'Acg 1000', 'kitkatw321', 'iGalaxy', 'ItsPurpleJay', 'Dr_Little', 'Telx']
    }
];

$(document).ready(function () {
    let result = '';

    for (let i = podcasts.length - 1; i >= 0; i--) {
        let podcast = podcasts[i];

        result += `
            <div class="exi-podcast-container" id="${i + 1}">
                <a href="${podcast.url}">
                    <img class="exi-podcast-thumbnail" src="/images/podcasts/exis-podcast-thumbnail-square-ep${i + 1}.jpg" height=128/>
                </a>

                <div class="exi-podcast-info">
                    <div class="exi-podcast-title">${podcast.name}</div>
                    <div class="exi-podcast-episode-number">Episode ${i + 1} &#8226; ${podcast.date}</div>
                    <a href="${podcast.url}" class="exi-podcast-url">${podcast.url}</a>
                    <div class="exi-podcast-description">${podcast.description}</div>

                    <div class="exi-podcast-featuring">`;

        for (let j = 0; j < podcast.members.length; j++) {
            let memberName = podcast.members[j];
            let info = members.find(function (contact) {
                return contact.name === memberName;
            });

            result += `
                        <div class="exi-chip" onclick="window.open('${info.link}');">
                            <div class="head"><img src="/images/members/${memberName}.png" onerror="this.src = 'https://mcpeachpies.com/tools/skin-viewer/assets/head.php/?s=20&u=${memberName}'"></div>
                            <div class="name">${memberName}</div>
                        </div>`;
        }

        result += '</div></div></div>';
    }

    $('.exi-podcast-list').html(result);
});