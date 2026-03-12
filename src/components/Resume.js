import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Resume = () => {
  const [activePage, setActivePage] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [lang, setLang] = useState('vi');
  const totalPages = 2;

  const getPages = () => {
    return lang === 'en'
      ? [
          { num: 1, src: `${process.env.PUBLIC_URL}/Luong_The_Vinh_CV_1.png` },
          { num: 2, src: `${process.env.PUBLIC_URL}/Luong_The_Vinh_CV_2.png` },
        ]
      : [
          { num: 1, src: `${process.env.PUBLIC_URL}/Luong_The_Vinh_CV_vi_1.png` },
          { num: 2, src: `${process.env.PUBLIC_URL}/Luong_The_Vinh_CV_vi_2.png` },
        ];
  };

  const pages = getPages();

  const handleDownload = () => {
    const link = document.createElement("a");
    const fileName = lang === 'en' ? "Luong_The_Vinh_CV.pdf" : "Luong_The_Vinh_CV_vi.pdf";
    link.href = `${process.env.PUBLIC_URL}/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume" id="resume">
      <Container>
        <h2>Curriculum Vitae</h2>
        <p className="resume-subtitle">
          {lang === 'vi' 
            ? "Bản thiết kế chuẩn ATS — Xem trực tuyến hoặc tải về"
            : "ATS-friendly PDF resume — Preview online or download directly"}
        </p>

        {/* Language Toggle */}
        <div className="resume-lang-toggle">
          <button 
            className={`lang-btn ${lang === 'vi' ? 'active' : ''}`} 
            onClick={() => setLang('vi')}
          >
            Tiếng Việt
          </button>
          <button 
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
            onClick={() => setLang('en')}
          >
            English
          </button>
        </div>

        {/* Action Buttons */}
        <div className="resume-actions">
          <button
            className="resume-btn resume-btn-preview"
            onClick={() => setIsPreviewOpen(!isPreviewOpen)}
            id="resume-preview-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            {isPreviewOpen ? (lang==='vi' ? "Đóng Preview" : "Close Preview") : (lang==='vi' ? "Xem CV" : "Preview CV")}
          </button>
          <button
            className="resume-btn resume-btn-download"
            onClick={handleDownload}
            id="resume-download-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {lang === 'vi' ? "Tải File (PDF)" : "Download (PDF)"}
          </button>
        </div>

        {/* Preview Area */}
        {isPreviewOpen && (
          <div className="resume-preview-wrapper">
            {/* Page Navigation */}
            <div className="resume-page-nav">
              {pages.map((page) => (
                <button
                  key={page.num}
                  className={`resume-page-dot ${activePage === page.num ? "active" : ""}`}
                  onClick={() => setActivePage(page.num)}
                >
                  {lang === 'vi' ? `Trang ${page.num}` : `Page ${page.num}`}
                </button>
              ))}
              <span className="resume-page-indicator">
                {activePage} / {totalPages}
              </span>
            </div>

            {/* CV Image Preview */}
            <div className="resume-preview-container">
              <div className="resume-preview-card">
                <img
                  src={pages[activePage - 1].src}
                  alt={`CV Page ${activePage}`}
                  className="resume-preview-img"
                />
                <div className="resume-preview-overlay">
                  <button
                    className="resume-overlay-btn"
                    onClick={handleDownload}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    {lang === 'vi' ? "Tải xuống" : "Download PDF"}
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Tags */}
            <Row className="resume-features">
              <Col xs={6} md={3}>
                <div className="resume-feature">
                  <span className="resume-feature-icon">📄</span>
                  <span>ATS-Friendly</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="resume-feature">
                  <span className="resume-feature-icon">🔤</span>
                  <span>LaTeX Quality</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="resume-feature">
                  <span className="resume-feature-icon">📐</span>
                  <span>Pixel-Perfect</span>
                </div>
              </Col>
              <Col xs={6} md={3}>
                <div className="resume-feature">
                  <span className="resume-feature-icon">🌐</span>
                  <span>{lang==='vi' ? "2 Trang" : "2 Pages"}</span>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </section>
  );
};
