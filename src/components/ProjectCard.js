import { Col } from "react-bootstrap";
import { Globe, GooglePlay, Apple, Newspaper, ChatDotsFill } from 'react-bootstrap-icons';

const getLinkIcon = (label, size=15) => {
  if (label.includes('Website') || label.includes('Xem chi tiết')) return <Globe size={size} style={{marginRight: '5px'}} />;
  if (label.includes('Google Play')) return <GooglePlay size={size} style={{marginRight: '5px'}}/>;
  if (label.includes('App Store')) return <Apple size={size} style={{marginRight: '5px', marginBottom: '2px'}}/>;
  if (label.includes('VnExpress')) return <Newspaper size={size} style={{marginRight: '5px'}}/>;
  if (label.includes('Zalo')) return <ChatDotsFill size={size} style={{marginRight: '5px'}}/>;
  return <Globe size={size} style={{marginRight: '5px'}}/>;
};

export const ProjectCard = ({ title, description, imgUrl, link, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {link && !links && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="proj-btn highlight-btn">
                  {getLinkIcon('Xem chi tiết')} Xem chi tiết
                </a>
            )}
            {links && links.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" className="proj-btn highlight-btn">
                  {getLinkIcon(l.label)} {l.label}
                </a>
            ))}
          </div>
        </div>
      </div>
    </Col>
  )
}
