import './SectionsDivider.css';

function SectionsDivider(props: {title: string}) {
  return (
    <div className="divider-block" style={{width: '100%'}}>
      <hr className="section-divider" />
        <h1 className="section-header" style={{margin: 4}}>
          {props.title}
        </h1>
      <hr className="section-divider" />
    </div>

  );
}

export default SectionsDivider;