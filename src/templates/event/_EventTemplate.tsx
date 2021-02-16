import React from 'react';

interface EventTemplateProps {
  pageContext: { event: any };
  location: any;
  data: any;
}

export default function EventTemplate2({ pageContext }: EventTemplateProps) {
  const { event } = pageContext;
  const eventData = {
    ...event.frontmatter,
    image: undefined,
    thumbnail: event.frontmatter.image.childImageSharp.fluid
  };

  return (
      <>
        <div style={{ background: '#0097A7', padding: '0 25px 20px' }}>
          <div>
            <i className="fas fa-arrow-left"/>
          </div>
          <h2 style={{ color: 'white' }}>{eventData.title}</h2>
        </div>
        <div style={{
          marginTop: '-20px',
          background: '#eeeded',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px',
          minHeight: '200px'
        }}>
          <p>dupa</p>
        </div>

      </>
  );
}
