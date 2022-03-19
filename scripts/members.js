const members = [
    {name: 'mcpeachpies', username: 'mcpeachpies', twitter: 'mcpeachpies', youtube: 'https://www.youtube.com/mcpeachpies'},
    {name: 'Yoglington', username: 'Yoglington', twitter: 'yoglington', youtube: 'https://www.youtube.com/c/yoglington'},
    {name: 'cSandmanTS1', username: 'cSandmanTS1', twitter: 'cSandmanTS1', youtube: 'https://www.youtube.com/cSandmanTS1'},
    {name: 'Dashleb', username: 'Dashleb', twitter: 'DashlebPlays', youtube: 'https://www.youtube.com/channel/UC9TQiG8Jhc5iVisiCgv53ag'},
    {name: 'Braden', username: 'I3raden', twitter: 'I3radn', youtube: 'https://www.youtube.com/I3raden'},
    {name: 'MatrixGolden', username: 'matrixgolden', twitter: 'MatrixGolden_YT', youtube: 'https://www.youtube.com/MatrixGolden'},
];

$(document).ready(function () {

    let cards = '';
    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        cards += makeMemberCard(member.name, "https://twitter.com/" + member.twitter, member.youtube);
    }
    $('.exi-members').html(cards);
    for (let i = 0; i < members.length; i++) {
        let member = members[i];
        changeMemberFace(member.name);
    }
});

function makeMemberCard(memberName, twitterLink, youtubeLink) {
    // Name
    let result = '<div class="exi-member-card exi-member-card-' + memberName + ' mdl-card mdl-shadow--2dp">';
    result += '<div class="mdl-card__title"><h2 class="mdl-card__title-text">';
    result += memberName;
    result += '</h2></div>';

    // Visit Channel
    result += '<div class="mdl-card__actions mdl-card--border"><a href="';
    result += youtubeLink;
    result +=
        '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Visit Channel HelloILoveYou</a></div>';

    // Social buttons
    result += '<div class="mdl-card__menu"><a href="';
    result += youtubeLink;
    result +=
        '"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><ion-icon name="logo-youtube"></ion-icon></button></a><a href="';
    result += twitterLink;
    result +=
        '"><button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"><ion-icon name="logo-twitter"></ion-icon></button></a></div></div>';

    return result;
}

function changeMemberFace(memberName) {
    let display = $('.exi-member-card-' + memberName + " .mdl-card__title");
    display.css('background', 'url(\'images/members/' + memberName + '.png\') center / cover');
}