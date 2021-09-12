import Link from "@/components/Link";
const AboutMe = () => {
  return (
    <section>
      <h2 id="about" className="scroll-margin-nav">
        <Link className="text-3xl" href="#about">
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Ilham Shofa</b>, you can call me{" "}
        <b>Ilham</b> or <b>hame</b> for short. Yes, i changed my nickname haha,
        if you&apos;re my school/college friend you maybe know me as <b>Ilham</b>{" "}
        or <b>Shofa</b> but that&apos;s ok, you can call me anything you want as
        long as it&apos;s my name and not someone else <i>wkw</i>.
      </p>
      <p>
        I grew up in a small village located in{" "}
        <Link
          className="underline"
          isExternal
          href="https://www.google.com/search?q=magelang+jawa+tengah"
        >
          Magelang, Jawa Tengah
        </Link>
        . I now study at{" "}
        <Link
          className="underline"
          isExternal
          href="https://telkomuniversity.ac.id/"
        >
          SMAN 11 Semarang
        </Link>{" "}
        I also often study as an editor and web developer.
      </p>
      <p>
        Outside of software developing thingy, I love editing and  playing game.

        I often edit videos in adobe premiere pro or even make visual effects in adobe after effects.
      </p>
    </section>
  );
};

export default AboutMe;
