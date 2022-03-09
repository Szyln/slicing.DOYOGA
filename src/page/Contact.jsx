import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2>聯絡我們</h2>
        <div className="row">
          <div className="col-md-10 offset-1 col-lg-7 offset-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58924.83338881918!2d120.28268582261876!3d22.623864631309715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e049783205c61%3A0xebaf934b04f62525!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A!5e0!3m2!1szh-TW!2stw!4v1646119895255!5m2!1szh-TW!2stw"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <h3>DOYOGA 教室位置</h3>
            <h4>高雄市苓雅區北信街 23 號 2 樓</h4>
            <ol>
              <li>
                搭乘捷運：紅線到正義站 3
                號出口，延正義路方向至北信街交叉口即可。
              </li>
              <li>
                搭乘公車：搭這些公車都可以抵達正義站 24B 25 33 50 76 77 77區 100
              </li>
              <li>開車前往北信街 32 號，教室旁有專屬停車場可以使用。</li>
            </ol>
          </div>
          <div className="col-md-10 offset-1 col-lg-5 offset-lg-0">
            <form className="bg-secondary-light rounded d-flex flex-column">
              <h3>意見回饋&問題詢問</h3>
              <label htmlFor="name" className="form-label">
                姓名
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="請輸入您的姓名"
                />
              </label>
              <label htmlFor="email" className="form-label">
                電子信箱
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email@example.com"
                />
              </label>
              <label htmlFor="phone" className="form-label">
                手機號碼
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="0912-345-678"
                />
              </label>
              <label htmlFor="feedback" className="form-label">
                意見回饋
                <textarea
                  type="text"
                  className="form-control"
                  id="feedback"
                  rows="9"
                />
              </label>
              <input type="submit" value="送出" className="btn btn-primary ms-auto"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
