import '../../styles/components/Section.scss';

const Section = ({ id, title, children }) => {
  return (
    <section className="section" id={id}>
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
