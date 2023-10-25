import Table from 'rc-table';
import './Results.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import bg from '../../images/Backgrounds/bg2.webp';
import data from './ResultsData';

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

  return (
    <div className="anim-bg-block" style={{ width: '100%', backgroundImage: `url(${bg})` }}>
      <div className="table-container">
        <Table
          className="results-table"
          columns={columns}
          data={data}
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
