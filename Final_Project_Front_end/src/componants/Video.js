import "../componant_style/Video.css";

export default function Video() {
  return (
    <section
      className="vid_area section-padding"
      style={{
        backgroundImage:
          "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/video.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        position: "relative",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a
        href="https://www.youtube.com/watch?v=0KYxN1kJSb0"
        className="video-button"
      >
        <span className="play-icon"></span>
      </a>
    </section>
  );
}
