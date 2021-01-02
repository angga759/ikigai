import Client from '../client/Client';

export default <const>{
    REST: {
        NEKOBOT: 'https://nekobot.xyz/api/image?type=',
        NEKOS_LIFE: 'https://cdn.nekos.life/tits/tits',
        HASTEBIN_BASE: 'https://hasteb.in/',
        GENIUS_SEARCH: 'https://api.genius.com/search?q=',
        USELESSWEB: 'https://d33wubrfki0l68.cloudfront.net/js/78c014fd096b53b392b29be9b2c624047323e61f/js/uselessweb.js',
        DISCORD_EMOJI: 'https://cdn.discordapp.com/emojis/',
        REDDIT: 'https://www.reddit.com',
        JISHO: 'https://jisho.org/api/v1/search/words?keyword=',
        WHATANIME: 'https://trace.moe/api/search?url=',
        MAL: 'https://myanimelist.net',
        SPOTIFY: 'https://open.spotify.com',
        EITHER: 'http://either.io',
        DOGPILE: 'https://results.dogpile.com/serp?qc=images&q=',
        DAKIMAKURA: 'https://animedakimakurapillow.com/search.php?section=product&search_query=',
        TRIVIA: 'https://opentdb.com/api.php?amount=1&encode=url3986',
        COVID: 'https://disease.sh/v3/covid-19/',
        QR: 'https://api.qrserver.com/v1/read-qr-code/?fileurl=',
        FUNFACT: 'https://uselessfacts.jsph.pl/random.json?language=en',
        SOUNDCLOUD: 'https://soundcloud.com',
        TOP_GG: {
            POST: 'https://top.gg/api/bots/stats',
            SEARCH: 'https://top.gg/api/search?type=bot&q=',
            BOT: 'https://top.gg/api/bots/',
            HTML_BOT: 'https://top.gg/bot/',
            VOTED: 'https://top.gg/api/bots/check?userId=',
        },
        GITHUB: {
            HTML_BASE: 'https://github.com',
            BOT_REPO: '1s3k3b/ikigai',
            BOT_REPO_RAW: 'https://raw.githubusercontent.com/1s3k3b/ikigai/master/',
            REPO: 'https://api.github.com/repos/',
            USER: 'https://api.github.com/users/',
        },
        NHENTAI: {
            BASE: 'https://nhentai.net',
            RANDOM: 'https://nhentai.net/random',
            SEARCH: 'https://nhentai.net/search?q=',
            TAGS: 'https://nhentai.net/tags?page=',
            ARTISTS: 'https://nhentai.net/artists?page=',
            CHARACTERS: 'https://nhentai.net/characters?page=',
            PARODIES: 'https://nhentai.net/parodies?page=',
            GROUPS: 'https://nhentai.net/groups?page=',
        },
        DBL: {
            API: 'https://discordbotlist.com/api/v1/bots/',
            HTML: 'https://discordbotlist.com/bots/',
        },
        WAIFULIST: {
            SEARCH: 'https://mywaifulist.moe/api/waifu/search',
            WAIFU: 'https://mywaifulist.moe/api/waifu/',
            TOKEN: 'https://mywaifulist.moe/browse',
            SERIES: 'https://www.mywaifulist.moe/series/',
            DASH: 'https://mywaifulist.moe/dash',
            BASE: 'https://mywaifulist.moe',
        },
        WYPTB: {
            GET: 'https://api2.willyoupressthebutton.com/api/v2/dilemma/',
            URL: 'https://willyoupressthebutton.com/',
        },
        YOUTUBE: {
            SEARCH: 'https://www.youtube.com/results?q=',
            VIDEO: 'https://youtu.be/',
            BASE: 'https://youtube.com',
        },
        URBAN: {
            SEARCH: 'http://api.urbandictionary.com/v0/define?term=',
            RAND: 'http://api.urbandictionary.com/v0/random',
            URL: 'https://urbandictionary.com/',
            IMAGE: 'https://img.utdstc.com/icons/urban-dictionary-android.png:225',
        },
        OSU: {
            AUTH: 'https://osu.ppy.sh/oauth/token',
            USER_API: 'https://osu.ppy.sh/api/v2/users/',
            USER: 'https://osu.ppy.sh/users/',
            DEF_AVATAR: 'https://osu.ppy.sh/images/layout/avatar-guest.png',
        },
        TWDNE: {
            SNIPPET: 'https://www.thiswaifudoesnotexist.net/snippet-',
            IMAGE: 'https://www.thiswaifudoesnotexist.net/example-',
        },
        HANIME: {
            BRANDS: 'https://hanime.tv/browse/brands/',
            TAGS: 'https://hanime.tv/browse/tags/',
        },
        JIKAN: {
            ANIME: 'https://api.jikan.moe/v3/anime/',
            SEARCH: 'https://api.jikan.moe/v3/search/',
            SEASON: 'https://api.jikan.moe/v3/season/',
            USER: 'https://api.jikan.moe/v3/user/',
        },
        TPDNE: {
            BASE: 'https://thispersondoesnotexist.com',
            IMG: 'https://thispersondoesnotexist.com/image',
        },
        GOOGLE: {
            AUTOCOMPLETE: 'https://suggestqueries.google.com/complete/search?client=chrome&q=',
            SEARCH: 'https://google.com/search?q=',
        },
    },
    EMOJIS: {
        GITHUB: {
            FORKS: '<:fork:792516132472225802>',
            ISSUES: '<:issue:792514319527051294>',
            ICON: '<:gh:795002783634948116>',
        },
    },
    CONFIG: {
        PREFIX: 'i!',
        STATUS_INTERVAL: 60000,
        TOP_GG_POST_INTERVAL: 1800000,
        OWNER: '576083686055739394',
        CLIENT: '607498384718430208',
        SERVER: '784168554605445150',
        SERVER_INVITE: '47H5v7v65R',
        ACTIVITIES: (client: Client) => <const>[
            {
                name: `${module.exports.default.CONFIG.PREFIX}help`,
            },
            {
                name: `${module.exports.default.CONFIG.PREFIX}vote`,
            },
            {
                name: `${client.guilds.cache.size} servers | ${client.members} users`,
                type: 'WATCHING',
            },
            {
                name: `${client.guilds.cache.size} servers | ${module.exports.default.CONFIG.PREFIX}help`,
                type: 'WATCHING',
            },
            {
                name: `${client.commands.size} commands | ${module.exports.default.CONFIG.PREFIX}help`,
                type: 'WATCHING',
            },
        ],
    },
    STATUS_COLORS: {
        online: '#43b581',
        idle: '#faa61a',
        offline: '#747f8d',
        dnd: '#f04707',
    },
    ROMAN: {
        ARR: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        CONVERSION: <Record<string, number>>{
            M: 1000,
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1,
        },
    },
    JIKAN: {
        GENRES: <Record<string, string>>{
            'Action': '1',
            'Adventure': '2',
            'Cars': '3',
            'Comedy': '4',
            'Dementia': '5',
            'Demons': '6',
            'Mystery': '7',
            'Drama': '8',
            'Ecchi': '9',
            'Fantasy': '10',
            'Game': '11',
            'Hentai': '12',
            'Historical': '13',
            'Horror': '14',
            'Kids': '15',
            'Magic': '16',
            'Martial Arts': '17',
            'Mecha': '18',
            'Music': '19',
            'Parody': '20',
            'Samurai': '21',
            'Romance': '22',
            'School': '23',
            'Sci Fi': '24',
            'Shoujo': '25',
            'Shoujo Ai': '26',
            'Shounen': '27',
            'Shounen Ai': '28',
            'Space': '29',
            'Sports': '30',
            'Super Power': '31',
            'Vampire': '32',
            'Yaoi': '33',
            'Yuri': '34',
            'Harem': '35',
            'Slice Of Life': '36',
            'Supernatural': '37',
            'Military': '38',
            'Police': '39',
            'Psychological': '40',
            'Thriller': '41',
            'Seinen': '42',
            'Josei': '43',
        },
        RATINGS: <string[]>['g', 'pg', 'pg13', 'r17', 'r', 'r', 'rx'],
    },
};