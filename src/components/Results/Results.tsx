import Table from "rc-table";
import './Results.css';

interface TableRecord {
  name: string,
  date: string,
  type?: 'Local' | 'Global',
  place: string,
  placeItalic?: boolean,
  link: string,
  info?: string,
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
      width: 100,
      render (place: string, item: TableRecord) {
        if (item.placeItalic) {
          return <i>{place}</i>
        } else {
          return <span>{place}</span>
        }
      },
    },
    {
      title: 'Bracket',
      dataIndex: 'link',
      key: 'link',
      width: 100,
      render (link: string) {
        return <a href={link} target="_blank" rel="noreferrer">Link</a>;
      },
    },
    {
      title: 'Other info',
      dataIndex: 'info',
      key: 'info',
      width: 500,
    }
  ];

  const data: TableRecord[] = [
    {
      name: 'Splatoon URC #1',
      date: '22.11.2020',
      type: 'Local',
      place: 'Probably last',
      link: 'https://brackethq.com/b/bfcj/',
      info: 'Our first try in tournaments — kinda painful',
      placeItalic: true,
    },
    {
      name: 'Splatoon URC #2',
      date: '24.01.2021',
      type: 'Local',
      place: '4-5th place',
      link: 'https://brackethq.com/b/bfcj/',
      info: 'Lost 2:3 in last round, but it was great!',
    },
    {
      name: 'The Cup of Tea',
      date: '27.03.2021',
      type: 'Local',
      place: '4-5th place',
      link: 'https://challonge.com/ru/TheCupOfTea',
      info: 'It was 3-on-3 tournament, which is pretty interesting! ' +
        'We were really close to 3rd place but lost both place to secure it.',
    },
    {
      name: 'LUTI Season 11 Div 8',
      date: 'Spring 2021',
      type: 'Global',
      place: '4th',
      link: 'https://inkleagues.challonge.com/ru/S11D8W/groups',
      info: 'Our first worldwide tournament experience! In the end we almost entered top cut.'
    },
    {
      name: 'Triton Cup 9',
      date: '02.07.2021',
      type: 'Global',
      place: 'Probably last',
      link: 'https://challonge.com/ru/TriCup9',
      info: 'Playing against pro teams was a bit painful.',
      placeItalic: true
    },
    {
      name: 'Little Squid League 13',
      date: '10.07.2021',
      type: 'Global',
      place: '4th place in group -> 1th place in Emerald Bracket!',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-13/60c99644e6119309d80baf66/info?infoTab=details',
      info: 'Our first try in LSL — and with success!'
    },
    {
      name: 'Low Ink July 2021',
      date: '24.07.2021',
      type: 'Global',
      place: '28th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-july-2021/60d9eabf680ff6397774b01d/stage/60fb8b5bba8e2f6fd9fd18e6/results',
      info: 'First try in Low Ink, but unfortunately we didn\'t make to day 2.'
    },
    {
      name: 'FLUTI Division C',
      date: '08.08.2021',
      type: 'Global',
      place: '3-5th place',
      link: 'https://inkleagues.challonge.com/ru/FLUTI1C/groups',
      info: ''
    },
    {
      name: 'Little Squid League 15',
      date: '18.09.2021',
      type: 'Global',
      place: '3rd place in group -> 2nd place in Silver bracket!',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-15/6121df700f2a734f30e83a83/info?infoTab=details',
      info: ''
    },
    {
      name: 'SuperJump',
      date: '25.09.2021',
      type: 'Global',
      place: '113th place',
      link: 'https://www.start.gg/tournament/superjump-1/events/splatoon-2/overview',
      info: 'This tournament was really big. We tried our best and had 2 close rounds in day 1 but lost them. On second day we ' +
        'didn\'t make far but it was good experience!'
    },
    {
      name: 'INKTAIL #1',
      date: '07.10.2021',
      type: 'Global',
      place: 'Last',
      link: 'https://clubcashalot.challonge.com/ru/inktail1',
      info: 'Oof',
      placeItalic: true
    },
    {
      name: 'Low Ink October 2021',
      date: '23.10.2021',
      type: 'Global',
      place: '20th place in group -> 7th place in gamma bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-october-2021/6154a11821cea533c019c03e/info?infoTab=details',
      info: 'Yay, day 2!'
    },
    {
      name: 'Little Squid League 16',
      date: '06.11.2021',
      type: 'Global',
      place: '2nd place in group -> last in top cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-16/614b7017d170f07e02483b3c/info?infoTab=details',
      info: 'First time in LSL top bracket!'
    },
    {
      name: 'URC x LoRule',
      date: '07.11.2021',
      type: 'Local',
      place: '3rd place',
      link: 'https://brackethq.com/b/1yhv/',
      info: 'Another 3-on-3 tournament. We lost only to really strong team with one of the best country players!'
    },
    {
      name: 'Low Ink December 2021',
      date: '18.12.2021',
      type: 'Global',
      place: '42th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-december-2021/61a7b86e912b8c483bfef289/info?infoTab=details',
      info: 'Oof. At least place number is cool.'
    },
    {
      name: 'Little Squid League 17',
      date: '16.01.2022',
      type: 'Global',
      place: '2nd place in group -> last in top cut',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-17/61c101911ad16a488d95df7e/info?infoTab=details',
      info: 'Same result as last time.'
    },
    {
      name: 'Low Ink January 2022',
      date: '22.01.2022',
      type: 'Global',
      place: '29th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-january-2022/61c8d1b20334365df3e89703/info?infoTab=schedule',
      info: ''
    },
    {
      name: 'Little Squid League 19',
      date: '27.02.2022',
      type: 'Global',
      place: '1th place in group -> last in top bracket',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-19/61f8c16b376dea214be01074/info?infoTab=details',
      info: 'Going forward bit by bit!'
    },
    {
      name: 'Low Ink March 2022',
      date: '19.03.2022',
      type: 'Global',
      place: '28th place',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-march-2022/621e76233f6dac1945388fff/info?infoTab=details',
      info: ''
    },
    {
      name: 'Splatalittle #3',
      date: '30.04.2022',
      type: 'Global',
      place: '3rd place in Beta Bracket',
      link: 'https://battlefy.com/splatalittle-tournaments/splatalittle-3/62558155872f5805d5f48f56/info?infoTab=details',
      info: 'First try here was pretty good!'
    },
    {
      name: 'Low Ink May 2022',
      date: '21.05.2022',
      type: 'Global',
      place: '22th place in group -> 5th place in gamma bracket',
      link: 'https://battlefy.com/inkling-performance-labs/low-ink-may-2022/626c9e15f4a14b17d11c0c01/info?infoTab=details',
      info: 'Best LI so far!'
    },
    {
      name: 'Little Squid League 20',
      date: '28.05.2022',
      type: 'Global',
      place: '19th place in group -> 1st place in Silver bracket!',
      link: 'https://battlefy.com/little-squid-league/little-squid-league-20/623b9a3915accf7571ebf562/info?infoTab=details',
      info: 'First day was a bit rough but on the second day we played really good and won everyone in our way! Also it\'s ' +
        'first time we got money prize (80$).'
    },
    {
      name: 'Minnow Cup #14: Clam Blitz Edition',
      date: '11.07.2022',
      type: 'Global',
      place: '4th place in group -> last place in top cut',
      link: 'https://battlefy.com/mulloway-institute-of-turfing/minnow-cup-14-clam-blitz-edition/628a5df7d3f0f52fc103c63b/info?infoTab=details',
      info: 'Group stage was great for us but unfortunately we lost in Top Cut R1 - and it was Single Elimination.'
    },
  ];

  return (
    <div className="results-table" style={{width: '100%'}} >
      <Table
        className="results-table"
        columns={columns}
        data={data}
        rowKey={(record, i) => `row-${i}`}
        rowClassName={(record, i) => `row-${i}`}
      />
    </div>
  );
}

export default Results;