import React from "react";

const Teachers = () => {
  return (
    <section className="bg-secondary-light">
      <div className="container">
        <div className="row">
          <div className="col d-none d-lg-block">
            <img
              src="../src/image/photo-1540206276207-3af25c08abc4.jpeg"
              alt="訓練場景"
              className="rounded-2"
            />
          </div>
          <div className="col">
            <h2>頂尖師資、專業教學</h2>
            <p>
              強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
            </p>
            <ul className="list-unstyled">
              <li>
                <div className="card mb-3">
                  <div className="d-flex align-items-center">
                    <div className="">
                      <img src="../src/image/teacher-1.png" alt="..." />
                    </div>
                    <div className="">
                      <div className="card-body">
                        <h5 className="card-title">Carol Tang 老師</h5>
                        <p className="card-text">
                          <small className="text-muted">教學經歷 10 年</small>
                        </p>
                        <p className="card-text">
                          瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
