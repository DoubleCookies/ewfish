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
      info: 'Our first try in tournaments - kinda painful',
      placeItalic: true,
    },
    {
      name: 'Splatoon URC #2',
      date: '24.01.2021',
      type: 'Local',
      place: '4-5 place',
      link: 'https://brackethq.com/b/bfcj/',
      info: 'Lost 2:3 in last round, but it was great!',
    },
    {
      name: 'The Cup of Tea',
      date: '27.03.2021',
      type: 'Local',
      place: '4-5 place',
      link: 'https://challonge.com/ru/TheCupOfTea',
      info: 'It was 3-on-3 tournament, which is pretty interesting! ' +
        'We were really close to 3rd place but lost both place to secure it.',
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