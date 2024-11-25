import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-6">
              <h4>최신 뉴스 받아보기</h4>
              <p>뉴스레터를 구독하고 제품 및 서비스에 대한 최신 뉴스를 받아보세요!</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <span className="sitename">usefunnel</span>
            </a>
            <div className="footer-contact pt-3">
              <p>회사 상세 주소</p>
              <p>회사 도로명 주소</p>
              <p className="mt-3"><strong>대표자명:</strong> <span>권태우</span></p>
              <p><strong>Phone:</strong> <span>+82) 010-7662-1758</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>관련 사이트들</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>서비스</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>팔로우</h4>
            <p>다른 연락 수단</p>
            <div className="social-links d-flex">
              <a href=""><i className="bi bi-twitter-x"></i></a>
              <a href=""><i className="bi bi-facebook"></i></a>
              <a href=""><i className="bi bi-instagram"></i></a>
              <a href=""><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p> <span>Copyright</span> <strong className="px-1 sitename">usefunnel</strong> <span>All Rights Reserved</span></p>
      </div>
    </footer>
  );
};

export default Footer;
