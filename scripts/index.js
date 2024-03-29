const KNOWN_PAGES = ["home", "members", "videos", "podcast", "downloads", "server", "serverkeystone", "serveramplified", "404", "rules", "worlds", "creators"];


const members = [
	{
		"name": "mcpeachpies",
        "link": "https://www.youtube.com/mcpeachpies",
        "twitter": "https://twitter.com/mcpeachpies",
        "youtube": "https://youtube.com/mcpeachpies",
        "icon": "/images/creators/peach.jpg",
        "creator": true
	},
	{
		"name": "Isogravity",
		"link": "https://twitter.com/HeccinJake"
	},
	{
		"name": "Noahh__",
		"link": "https://www.youtube.com/channel/UCjlSCgWlJ_wtqcFjYbhAGFg",
	},
	{
		"name": "KSores",
		"link": "https://www.youtube.com/channel/UCh59oodOtwqWaY3LlvKhEnw"
	},
	{
		"name": "Miles Pernicious",
		"link": "https://twitter.com/milespernicious"
	},
	{
		"name": "ISean",
		"link": "https://twitter.com/ISeanCreations"
	},
	{
		"name": "DuoGetsRekt",
		"link": "https://twitter.com/DuoGetsRekt",
		"creator": true,
		"icon": "/images/creators/duo.png",
		"twitter": "https://twitter.com/DuoGetsRekt",
		"youtube": "https://www.youtube.com/channel/UCKE4ADQvPVszDoE1DA3bSWQ",
		"youtube-text": "DuoGetsRekt"
	},
	{
		"name": "SugarCaney",
        "link": "https://youtube.com/c/SugarCaney",
        "youtube": "https://youtube.com/c/SugarCaney",
        "twitter": "https://twitter.com/CaneyDearie",
        "icon": "/images/creators/caney.png",
        "creator": true
	},
	{
		"name": "Leeyum_exe",
		"link": "https://www.youtube.com/everythingexe"
	},
	{
		"name": "SkyTUM",
		"link": "https://www.youtube.com/SkyTheUnaccompaniedMiner"
	},
	{
		"name": "Acg 1000",
		"creator": true,
		"link": "https://twitter.com/Acg1000_",
		"icon": "/images/creators/acg.png",
		"twitter": "https://twitter.com/Acg1000_",
		"youtube": "https://www.youtube.com/acg1000",
		"twitch": "https://www.twitch.tv/acg1000"
    },
	{
		"name": "Zipix_",
		"link": "https://www.youtube.com/channel/UCxfkNkw2pKaPCHOypeGQLVg"
	},
	{
		"name": "ItsPurpleJay",
		"link": "https://www.youtube.com/ItsPurpleJay",
		"creator": true,
		"icon": "/images/creators/jay.jpg",
		"twitter": "https://twitter.com/ItsPurpleJay",
		"youtube": "https://youtube.com/ItsPurpleJay",
		"twitch": "https://twitch.tv/ItsPurpleJay"
	},
	{
		"name": "SBGamut",
		"link": "https://www.youtube.com/channel/UCGod1uD9sQzU4Vtinl6E7aw"
	},
	{
		"name": "OkiePlays",
		"link": "https://www.youtube.com/OkiePlays"
	},
	{
		"name": "Pineapple",
		"link": "https://www.youtube.com/user/TheOzyGamer"
	},
	{
		"name": "Naragath",
		"link": "https://www.youtube.com/Naragath"
	},
	{
		"name": "Kanelia",
		"link": "https://www.youtube.com/channel/UC5Z1SgEdt7XvA3JPpI38Zfg"
	},
	{
		"name": "Wafflestick",
		"link": "https://www.youtube.com/WaffleStick"
	},
	{
		"name": "IAmPhos",
		"link": "https://www.youtube.com/channel/UClqpK7O7KTqi9SRxZS3Jpbg"
	},
	{
		"name": "Chrismon",
		"link": "https://www.youtube.com/channel/UCoUFVNM5Mm3oD0vNsg0MAOw"
	},
	{
		"name": "Van",
		"link": "https://www.youtube.com/channel/UCmI1-YNmQmFRBF3jKbssMvg"
	},
	{
		"name": "TheMundane",
		"link": "https://www.youtube.com/channel/UCVazOx8bCNAx9rDCtHHQLmg"
	},
	{
		"name": "cSandmanTS1",
		"link": "https://www.youtube.com/channel/UC0M1Vn850zIqTWoBvP1UKpw"
	},
	{
		"name": "Telx",
		"link": "https://www.youtube.com/channel/UC3Y0lCyaMiLuU5W77gVjyYw",
		"icon": "/images/creators/telx.png",
		"creator": true,
		"twitter": "https://twitter.com/Telxy_",
		"twitch": "https://www.twitch.tv/telx",
		"youtube": "https://www.youtube.com/c/telxy"
	},
	{
		"name": "Yoglington",
		"link": "https://www.youtube.com/c/yoglington",
		"creator": true,
		"icon": "/images/creators/yog.jpg",
		"twitter": "https://twitter.com/Yoglington",
		"instagram": "https://instagram.com/Yoglington",
		"youtube": "https://youtube.com/c/Yoglington",
	},
	{
		"name": "TCMidnite",
		"link": "https://www.youtube.com/user/tcmidnite"
	},
	{
		"name": "Vanillaraccoon",
		"link": "https://www.youtube.com/channel/UC9TQiG8Jhc5iVisiCgv53ag"
	},
	{
		"name": "SomebodyToRemember",
		"link": "https://www.youtube.com/channel/UCzTmHdyJB0ZS2U7oQsXmEmQ"
	},
	{
		"name": "Noahh__",
		"link": "https://www.youtube.com/channel/UC4FpYZdkeNHW4U_l-srit8w",
		"creator": false,
		"icon": "/images/creators/noah.jpg",
		"twitch": "https://www.twitch.tv/noahlot",
		"twitter": "https://twitter.com/kindabland/"
	},
	{
		"name": "Dashleb",
		"link": "https://www.youtube.com/channel/UC7AUzukE2iWxmmEc7mkvdIg"
	},
	{
		"name": "Braden",
		"link": "https://www.youtube.com/channel/UCWM9wsUAMnXO1AGUG05jmRw"
	},
	{
		"name": "DelltaDragon",
		"link": "https://www.existencesmp.com/"
	},
	{
		"name": "iGalaxy",
		"link": "https://www.youtube.com/channel/UC62WYRrDRwINxIjzj-wJVkQ",
		"creator": true,
		"icon": "/images/creators/galaxy.png",
		"youtube": "https://link.igalaxy.dev/youtube",
		"youtube-text": "iGalaxy",
		"twitter": "https://link.igalaxy.dev/twitter",
		"twitter-text": "_iGalaxyYT",
		"twitch": "https://link.igalaxy.dev/twitch",
		"twitch-text": "igalaxyofficial"
	},
	{
		"name": "Diamondback88",
		"link": "https://www.youtube.com/Diamondbackplays"
	},
	{
		"name": "INeedHelp__",
		"link": "https://twitter.com/lNeedHeIp"
	},
	{
		"name": "Dr_Little",
		"creator": true,
		"icon": "/images/creators/dr_little.png",
		"link": "https://twitter.com/TheDrLittle",
		"twitter": "https://twitter.com/TheDrLittle",
		"youtube": "https://www.youtube.com/channel/UCeanN4HtvoqhGnLbNYV2L6A?view_as=subscriber",
		"youtube-text": "Dr. Little",
		"twitch": "https://www.twitch.tv/the_dr_little"
	},
	{
		"name": "kitkatw321",
		"creator": true,
		"icon": "/images/creators/kitkat.webp",
		"twitter": "https://twitter.com/KathrynWilks5",
		"instagram": "https://www.instagram.com/kitkatw321_/",
		"twitch": "http://twitch.tv/kitkatw321"
	},
	{
		"name": "LordOfTheUndead",
		"icon": "/images/creators/lord.png",
		"creator": true,
		"twitch": "https://twitch.tv/LotUDev",
		"twitter": "https://twitter.com/_UndeadGaming_"
	}
];


$(document).ready(function () {
    let year = (new Date()).getFullYear();
    $('#exi-year').html(year);

    let query = window.location.pathname.replace(/\//g, "").split("?")[0];
    if (location.search) query = window.location.search.split("?")[1];
    let page = "home";
    if (query.length > 1) {
        page = query;
    }

    console.log(query);
    console.log(page);

    let sanitized = page.replace(/[^a-z]/g, "");
    showPage(sanitized);
});

$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 332) {
        let nav = $('.exi-nav');
        nav.removeClass('exi-nav');
        nav.addClass('exi-nav-fixed');

        let mini = $('.exi-mini-logo-hidden');
        mini.removeClass('exi-mini-logo-hidden');
        mini.addClass('exi-mini-logo');
    }
    else {
        let nav = $('.exi-nav-fixed');
        nav.removeClass('exi-nav-fixed');
        nav.addClass('exi-nav');

        let mini = $('.exi-mini-logo');
        mini.removeClass('exi-mini-logo');
        mini.addClass('exi-mini-logo-hidden');
    }
});

function scrollToTop() {
    $('html, body').animate({
        scrollTop: 0,
    }, 300);
}

function showPage(pageWithoutExtension) {
    if (!KNOWN_PAGES.includes(pageWithoutExtension)) {
        pageWithoutExtension = "404"
    }

    $('#content').load('/' + pageWithoutExtension + '.html');

    let activeNavButton = $('.exi-active');
    let newNavButton = $('.button-' + pageWithoutExtension);
    activeNavButton.removeClass('exi-active');
    newNavButton.addClass('exi-active');
}