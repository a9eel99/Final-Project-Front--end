import "../componant_style/componant.css";
export default function AboutUsHero({title}) {
  return (
    <section
      className="section-top"
      style={{
        backgroundImage:"url(/image/section-bg-2.png)",
      }}
    >
      <div className="container">
        <div className="col-lg-10 offset-lg-1 text-center">
          <div
            className="section-top-title wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset="0"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.3s",
              animationName: "fadeInRight",
            }}
          >
            <h1>{title}</h1>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li> / {title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
