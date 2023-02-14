import Table from 'rc-table';
import './Results.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import bg from '../../images/Backgrounds/bg2.webp';

interface TableRecord {
  name: string;
  date: string;
  type?: 'Local' | 'Global';
  place: string;
  link: string;
  info?: string;
  className?: string;
}

function Results() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 300,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: 100,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 80,
    },
    {
      title: 'Place',
      dataIndex: 'place',
      key: 'place',
      width: 200,
      render(place: string) {
        return <ReactMarkdown>{place}</ReactMarkdown>;
      },
    },
    {
      title: 'Bracket',
      dataIndex: 'link',
      key: 'link',
      width: 100,
      render(link: string) {
        return (
          <a href={link} target="_blank" rel="noreferrer">
            Link
          </a>
        );
      },
    },
    {
      title: 'Other info',
      dataIndex: 'info',
      key: 'info',
      width: 500,
      render(text: string) {
        return <ReactMarkdown className={'info-text'}>{text}</ReactMarkdown>;
      },
    },
  ];

  const data: TableRecord[] = [
    {
      name: 'Splatoon URC #1',
      date: '22.11.2020',
      type: 'Local',
      place: '*Probably last*',
      link: 'https://brackethq.com/b/bfcj/',
      info: 'Our first tournament. Was kind of painful.',
    },
    {
      name: 'Splatoon URC #2',
      date: '24.01.2021',
      type: 'Local',
      place: '4-5th place',
      link: 'https://brackethq.com/b/bfcj/',
      info: 'Lost 2:3 in the last round but it was great regardless!',
    },
    {
      name: 'The Cup of Tea',
      date: '27.03.2021',
      type: 'Local',
      place: '4-5th place',
      link: 'https://challonge.com/ru/TheCupOfTea',
      info:
        'The Cup of Tea was a 3-on-3 tournament which was pretty interesting! ' +
        'We were really close to getting 3rd place but lost both matches to secure it.',
    },
    {
      name: 'LUTI Season 11 Div 8',
      date: 'Spring 2021',
      type: 'Global',
      place: '4th',
      link: 'https://inkleagues.challonge.com/ru/S11D8W/groups',
      info: 'Our first experience in a worldwide tournament! In the end we almost made it to top cut.',
    },
    {
      name: 'Triton Cup 9',
      date: '02.07.2021',
      type: 'Global',
      place: '*Probably last*',
      link: 'https://challonge.com/ru/TriCup9',
      info: '*Playing against pro teams was a bit painful.*',
    },
    {
      name: 'Little Squid League 13',
      date: '10.07.2021',
      type: 'Global',
      place: '4th place in group -> **1st place in Emerald Bracket!**',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-13/60c99644e6119309d80baf66/info?infoTab=details',
      info: 'Our first LSL. It went quite well!',
    },
    {
      name: 'Low Ink July 2021',
      date: '24.07.2021',
      type: 'Global',
      place: '28th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-july-2021/60d9eabf680ff6397774b01d/stage/60fb8b5bba8e2f6fd9fd18e6/results',
      info: "Our first Low Ink. Unfortunately we didn't make it to day 2.",
    },
    {
      name: 'FLUTI Division C',
      date: '08.08.2021',
      type: 'Global',
      place: '3-5th place',
      link: 'https://inkleagues.challonge.com/ru/FLUTI1C/groups',
      info: '',
    },
    {
      name: 'Little Squid League 15',
      date: '18.09.2021',
      type: 'Global',
      place: '3rd place in group -> **2nd place in Silver Bracket!**',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-15/6121df700f2a734f30e83a83/info?infoTab=details',
      info: '',
      className: 'row-highlight',
    },
    {
      name: 'SuperJump',
      date: '25.09.2021',
      type: 'Global',
      place: '113th place',
      link: 'https://www.start.gg/tournament/superjump-1/events/splatoon-2/overview',
      info:
        'This tournament was really big. On day 1 we had 2 very close sets but lost both of them.' +
        " We didn't make it far on day 2 but it was a good experience regardless!",
    },
    {
      name: 'INKTAIL #1',
      date: '07.10.2021',
      type: 'Global',
      place: '*Last*',
      link: 'https://clubcashalot.challonge.com/ru/inktail1',
      info: '*Oof*',
    },
    {
      name: 'Low Ink October 2021',
      date: '23.10.2021',
      type: 'Global',
      place: '20th place in group -> 7th place in Gamma Bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-october-2021/6154a11821cea533c019c03e/info?infoTab=details',
      info: 'We made it to day 2, yay!',
    },
    {
      name: 'Little Squid League 16',
      date: '06.11.2021',
      type: 'Global',
      place: '2nd place in group -> last in top cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-16/614b7017d170f07e02483b3c/info?infoTab=details',
      info: 'Our first time in LSL in top cut!',
    },
    {
      name: 'URC x LoRule',
      date: '07.11.2021',
      type: 'Local',
      place: '**3rd place**',
      link: 'https://brackethq.com/b/1yhv/',
      info: 'Another 3-on-3 tournament. Our only loss was against the strongest team with some of the best players from our country!',
      className: 'row-highlight',
    },
    {
      name: 'Low Ink December 2021',
      date: '18.12.2021',
      type: 'Global',
      place: '42nd place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-december-2021/61a7b86e912b8c483bfef289/info?infoTab=details',
      info: 'Oof. At least our place number was cool.',
    },
    {
      name: 'Little Squid League 17',
      date: '16.01.2022',
      type: 'Global',
      place: '2nd place in group -> last in top cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-17/61c101911ad16a488d95df7e/info?infoTab=details',
      info: 'Same result as last time.',
    },
    {
      name: 'Low Ink January 2022',
      date: '22.01.2022',
      type: 'Global',
      place: '29th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-january-2022/61c8d1b20334365df3e89703/info?infoTab=schedule',
      info: '',
    },
    {
      name: 'Little Squid League 19',
      date: '27.02.2022',
      type: 'Global',
      place: '**1st place in group** -> last in top cut  ',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-19/61f8c16b376dea214be01074/info?infoTab=details',
      info: 'Moving forward little by little!',
    },
    {
      name: 'Low Ink March 2022',
      date: '19.03.2022',
      type: 'Global',
      place: '28th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-march-2022/621e76233f6dac1945388fff/info?infoTab=details',
      info: '',
    },
    {
      name: 'Splatalittle #3',
      date: '30.04.2022',
      type: 'Global',
      place: '**3rd place in Beta Bracket**',
      link: 'https://battlefy.com/splatalittle-tournaments/splatalittle-3/62558155872f5805d5f48f56/info?infoTab=details',
      info: 'Our first time here went pretty good!',
      className: 'row-highlight',
    },
    {
      name: 'Low Ink May 2022',
      date: '21.05.2022',
      type: 'Global',
      place: '22nd place in group -> 5th place in Gamma Bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-may-2022/626c9e15f4a14b17d11c0c01/info?infoTab=details',
      info: 'Our best Low Ink so far!',
    },
    {
      name: 'Little Squid League 20',
      date: '28.05.2022',
      type: 'Global',
      place: '19th place in group -> **1st place in Silver bracket!**',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-20/623b9a3915accf7571ebf562/info?infoTab=details',
      info:
        'Day 1 was a bit rough but on day 2 we played really well and won every set! ' +
        "It's also our first time getting a money prize.",
      className: 'row-highlight',
    },
    {
      name: 'Minnow Cup #14: Clam Blitz Edition',
      date: '11.06.2022',
      type: 'Global',
      place: '**4th place in group** -> last place in top cut',
      link: 'https://battlefy.com/mulloway-institute-of-turfing/minnow-cup-14-clam-blitz-edition/628a5df7d3f0f52fc103c63b/info?infoTab=details',
      info: 'The group stage was great for us but unfortunately we lost in the single elimination Top Cut R1.',
    },
    {
      name: 'Low Ink June 2022',
      date: '18.06.2022',
      type: 'Global',
      place: '27th place in group -> 9th place in Gamma Bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-june-2022/628ba468ab4cf43f09d24943/info?infoTab=details',
      info: '',
    },
    {
      name: 'Little Squid League 21',
      date: '25.06.2022',
      type: 'Global',
      place: '**1st place in group** -> 5th place in Top Cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-21/6297ef84beaa0d33b34d3e17/info?infoTab=details',
      info: 'Finally — we won R1 in Top Cut. *The curse is broken.*',
    },
    {
      name: 'From The Splatalittle Up',
      date: '09.07.2022',
      type: 'Global',
      place: '6th place in group stage -> 9th place in top cut.',
      link: 'https://battlefy.com/splatalittle-tournaments/from-the-splatalittle-up/62b9a4324ae5ae569aac9baa/info?infoTab=details',
      info: 'The group stage went better than expected, however other teams ended up being stronger than us.',
    },
    {
      name: 'Little Squid League 22',
      date: '16.07.2022',
      type: 'Global',
      place: '**1st place in group** -> 5th place in Top Cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-22/62be2e76e636b374a9863975/info?infoTab=details',
      info: 'Same result as last time.',
    },
    {
      name: 'Fight Club Week 3',
      date: '22.07.2022',
      type: 'Global',
      place: '**3rd place**',
      link: 'https://battlefy.com/splat-fight-club/fight-club-tournament-week-3/62cb10af7205422c7848f234/info?infoTab=details',
      info: 'Fight Club was a short and sweet tournament with only 8 teams. The format was a bit confusing but it went good overall!',
      className: 'row-highlight',
    },
    {
      name: 'SuperJump 2',
      date: '23.07.2022',
      type: 'Global',
      place: '81st place',
      link: 'https://www.start.gg/tournament/superjump-2/details',
      info: 'The last major Splatoon 2 tournament in which we participated! We hope SuperJump will return for Splatoon 3!',
    },
    {
      name: 'Little Squid League 23',
      date: '13.08.2022',
      type: 'Global',
      place: '2nd place in group -> **2nd place in Top Cut!**',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-23/62d9db5a78182b34ef310cc7/info?infoTab=details',
      info:
        'We were REALLY close to winning this LSL. Unfortunately we made too many mistakes and lost 3:4 to [CAKE]. ' +
        'Regardless this is our best LSL so far!',
      className: 'row-highlight',
    },
    {
      name: 'Последние дни в Инкополисе',
      date: '19.08.2022',
      type: 'Local',
      place: '**2nd place**',
      link: 'https://challonge.com/summertime_inking',
      info:
        'A small local tournament with double elimination. We managed to win every set except the one against ' +
        'the team with some of the best players from our country!',
      className: 'row-highlight',
    },
    {
      name: 'Йохохнем на дорожку?',
      date: '20.08.2022',
      type: 'Local',
      place: '**2nd place**',
      link: 'https://challonge.com/f3ou4aw4',
      info:
        'Another local tournament — now with more teams! We finished at the same place and lost to the same team ' +
        '(except they had an even stronger line-up)',
      className: 'row-highlight',
    },
    {
      name: 'Low Ink August 2022',
      date: '20.08.2022',
      type: 'Global',
      place: '28th place in group',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-august-2022/62ddc6ad132b551f11f3c285/info?infoTab=details',
      info:
        '*Oof. Playing two tournaments in a row is hard.*  \n' +
        'Low Ink will return in Splatoon 3 and I hope we will play in it!',
    },
    {
      name: 'The Семья — турнир по Splatoon 2',
      date: '28.08.2022',
      type: 'Local',
      place: '**2nd place**',
      link: 'https://challonge.com/thefamilysp2',
      info: 'Our last Splatoon 2 tournament — and the results are the same for us. See you in Splatoon 3!',
      className: 'row-highlight row-divider',
    },
    {
      name: 'Low Ink September 2022',
      date: '17.09.2022',
      type: 'Global',
      place: '21st place in group -> 5th place in Gamma Bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-september-2022/6303b07f783d3622ec0b2478/info?infoTab=details',
      info: 'Our first Splatoon 3 tournament went pretty good! One of the most known ru-players TidabiT subbed for us in day 2 and it was great!',
    },
    {
      name: 'Splatoon Sunday #2',
      date: '15.10.2022',
      type: 'Local',
      place: '**1st place!**',
      link: 'https://challonge.com/SplatoonSunday2',
      info:
        'Finally — our first win in local tournaments! Splatoon Sunday is a series of tournaments where new rules apply every time. Splatoon Sunday #2 was about randomized weapons — and ' +
        'we won every team in our way with these rules! Maybe random helped us a bit — who knows?',
      className: 'row-highlight',
    },
    {
      name: 'Low Ink October 2022',
      date: '23.10.2022',
      type: 'Global',
      place: '16th place in group -> **2nd place in Delta Bracket**',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-october-2022/63348d5f2fa97e2bc6635c56/info?infoTab=details',
      info:
        'This Low Ink was the biggest one — **170 teams**! Getting in Day 2 was a hard task and we barely managed to do it ' +
        'with 3-3 in Day 1 (every other team in group had at least 4-2). In Delta Bracket we had really good sets ' +
        'with Overtime!! and other teams and lost only in grand final. That is our best Low Ink so far!',
      className: 'row-highlight',
    },
    {
      name: 'LSL Invitational 3',
      date: '29.10.2022',
      type: 'Global',
      place: '2nd place in group -> lost in r1',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-invitational-3/6333542b627d0340fbb092d0/info?infoTab=details',
      info: 'First part was pretty good for us but unfortunately in Single Elim we lost 2:3 due to some mistakes. Well, good lesson for us.',
    },
    {
      name: 'Привет, Плюхтония!',
      date: '29.10.2022',
      type: 'Local',
      place: '2nd place',
      link: 'https://challonge.com/3yx0ygs2',
      info: 'Another local tournament and *another second place*. We were close to bracket reset but lost 2-3 in grand final.',
      className: 'row-highlight',
    },
    {
      name: 'Minnow Cup #17 — Rainmaker Edition',
      date: '05.11.2022',
      type: 'Global',
      place: '9th place',
      link: 'https://battlefy.com/mulloway-institute-of-turfing/minnow-cup-17-rainmaker-edition/633b0e373f23a64beb614363/info?infoTab=details',
      info:
        "We were really close to top-8 — well, it's all about coefficients because there were " +
        'a lot of teams with 3-2 in the end.',
    },
    {
      name: 'Little Squid League 25',
      date: '12.11.2022',
      type: 'Global',
      place: '1st place in group -> **3rd place in gold bracket**',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-25/6349be080f176511550710fd/info?infoTab=details',
      info: 'We collected every prize place except 1st. Well, I hope it will be soon!',
      className: 'row-highlight',
    },
    {
      name: 'Speed Ladder 10',
      date: '13.11.2022',
      type: 'Global',
      place: '260th place (?), 5-4 in general',
      link: 'https://www.start.gg/tournament/inkademy-speed-ladder-10/details',
      info: "Pretty good result. Don't look at place — smash gg ladder just works in a bit weird way.",
    },
    {
      name: 'Low Ink November 2022',
      date: '19.11.2022',
      type: 'Global',
      place: '**9th place in group** -> lost in R1 in Gamma Bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-november-2022/636141f93dd21d0b2088f5ec/info?infoTab=details',
      info:
        "Best group result in LI so far and first 4-2 in group stage! Unfortunately second day wasn't so good, " +
        'but overall — good result!',
      className: 'row-highlight',
    },
    {
      name: 'Splatoon Sunday #6',
      date: '20.11.2022',
      type: 'Local',
      place: '2nd place',
      link: 'https://challonge.com/ru/SplatoonSunday6',
      info: '',
    },
    {
      name: "Camp'Ink #1",
      date: '17.12.2022',
      type: 'Local',
      place: '2nd place',
      link: 'https://battlefy.com/ewsepia-urc/campink-1/637a217a6d36746256d36839/info?infoTab=details',
      info: 'Another Local tournament and *another second place*. Well, we are really close to win another one, right?',
    },
    {
      name: 'Ультраплюх #1',
      date: '25.12.2022',
      type: 'Local',
      place: '7th place',
      link: 'https://battlefy.com/splatsville/%D1%83%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BF%D0%BB%D1%8E%D1%85-%D0%B7%D0%B8%D0%BC%D0%B0-2023-1/639f76cf16618373a3e6e82f/stage/639f7772ecfc214cd8ba6307/bracket/',
      info: 'This is what happens when you go with an untrained comp...',
    },
    {
      name: 'Little Squid League 26',
      date: '07.01.2023',
      type: 'Global',
      place: '3rd place in group -> lost in R1',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-26/639a57df7d594370c3a86454/info?infoTab=details',
      info: 'Same thing as the last time',
    },
    {
      name: 'Splatoon Sunday #12',
      date: '08.01.2023',
      type: 'Local',
      place: '2nd place',
      link: 'https://challonge.com/ru/SplatoonSunday12',
      info: 'This one was finally good. *Comeback time.*',
    },
    {
      name: 'Ультраплюх #2',
      date: '14.01.2023',
      type: 'Local',
      place: '4th place',
      link: 'https://battlefy.com/splatsville/%D1%83%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BF%D0%BB%D1%8E%D1%85-%D0%B7%D0%B8%D0%BC%D0%B0-2023-2/63bc73550841346a84c182f8/info?infoTab=details',
      info: 'Better than previous one. Also we had emergency sub and this result is pretty good.',
    },
    {
      name: 'Little Squid League 26',
      date: '21.01.2023',
      type: 'Global',
      place: '21st place in group -> **2nd place in Epsilon Bracket!**',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-january-2023/63b1f24b2395cc75cdfa7da1/info?infoTab=details',
      info:
        'Due to coefs we almost entered day 2, but later someone dropped, so we could play in day 2 Epsilon Bracket... ' +
        'And we almost won this one! We even managed to start Bracket Reset!',
      className: 'row-highlight',
    },
    {
      name: 'Splatoon Sunday #15',
      date: '29.01.2023',
      type: 'Local',
      place: '2nd place',
      link: 'https://challonge.com/ru/SplatoonSunday15',
      info: 'Salmon Run Special! Only lost to team with epic guy with all VP 999.',
    },
    {
      name: 'Ультраплюх #3',
      date: '04.02.2023',
      type: 'Local',
      place: '**1st place**',
      link: 'https://battlefy.com/splatsville/%D1%83%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BF%D0%BB%D1%8E%D1%85-%D0%B7%D0%B8%D0%BC%D0%B0-2023-3/63d9a61734202e66355bcd80/stage/63d9a65c7b6f052e260bac05/bracket/',
      info: 'Finally! After a lot of tournaments we managed another first place!',
      className: 'row-highlight',
    },
    {
      name: 'Splatoon Sunday #16',
      date: '05.02.2023',
      type: 'Local',
      place: '**1st place**',
      link: 'https://challonge.com/ru/SplatoonSunday16',
      info:
        '*Two in a row!* This week was an interesting tourney theme where the further — the worse the weapon. ' +
        'Also, this is the last tournament for yaga...',
      className: 'row-highlight',
    },
  ];

  return (
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="table-container">
        <Table
          className="results-table"
          columns={columns}
          data={data.reverse()}
          rowKey={(record, i) => `row-${i}`}
          rowClassName={(record, i) =>
            record.className && record.className.length > 0 ? `row-${i} ${record.className}` : `row-${i}`
          }
          scroll={{ x: 750 }}
        />
      </div>
    </div>
  );
}

export default Results;
