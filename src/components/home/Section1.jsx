import Image from "next/image";
import Link from "next/link";
import ConstraintedBox from "@/components/common/ConstraintedBox";
import ResponsiveBox from "@/components/common/ResponsiveBox";
import WrappedBox from "@/components/common/WrappedBox";
import Column from "@/components/common/Column";
import CircleBox from "@/components/common/CircleBox";
import Row from "@/components/common/Row";
import socialLinks from "@/data/socialLinks";

const HomeSection1 = () => {
  return (
    <ResponsiveBox classNames="bg-[var(--dialogColor)]">
      <ConstraintedBox classNames="p-4 pb-16 pt-8 sm:pt-16">
        <WrappedBox classes="justify-items-stretch">
          <Column classes="justify-center">
            <p className="max-w-sm">
              Hi 👋,{" "}
              <span className="text-[var(--primaryColor)]">My name is </span>
            </p>

            <h1 className="text-[var(--primaryColor)]">Littrisha Pillay</h1>

            <p className="font-semibold max-w-sm">
              Graphic Designer & Fullstack Web Developer
            </p>

            <p className="mt-8 max-w-sm">
            I am a Full Stack Web developer based in Pietermaritzburg, South Africa. 
            My expertise lies in building exceptional websites and applications while occasionally engaging in design aspects.
            
            As a developer, I am deeply passionate about finding elegant and effective solutions to complex problems. 
            My strong foundation in web development centers around key technologies such as HTML, CSS, and JavaScript. 
            I take great delight in working on both the front-end and back-end of applications, always on the lookout for opportunities to optimize performance, enhance user experience, and ensure top-notch code quality.
            Throughout my journey with Dev&apos;s bootcamp, I have worked on a wide range of projects, ranging from simple static websites to more advanced applications. 
            This experience has allowed me to become proficient in utilizing various development tools and frameworks, including React, next.js, Node.js, and Express.
            As an ardent learner, 
            I am continuously eager to explore new technologies and actively seek opportunities to improve my skills and knowledge in the ever-evolving field of web development.
            </p>

            <button
              name="talk-btn"
              type="button"
              className="app__filled_btn mt-10"
              href="ronellep.pillay@gmail.com"
            > 
              Let&apos;s Talk
            </button>

            <Column classes="mt-8">
              <p>Follow me here</p>
              <Row classes="mt-2">
                {socialLinks.map((link, index) => {
                  return (
                    <Link
                      key={`social-link-${index}`}
                      href={link.url}
                      target="_blank"
                      className="text-white bg-[var(--primaryColor)] p-2 rounded-full flex items-center justify-center mr-2 last:mr-0 hover:bg-[var(--primaryColor50)] transition duration-300 ease-in-out"
                    >
                      {link.icon}
                    </Link>
                  );
                })}
              </Row>
            </Column>
          </Column>

          <CircleBox classes="w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] pointer-events-none justify-self-center sm:justify-self-end">
            <Image
              src="/images/profile.jpg"
              alt="profile"
              width={400}
              height={400}
              sizes="100%"
              priority
              placeholder="blur"
              blurDataURL="/images/profile.jpg"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio: "1 / 1",
              }}
            />
          </CircleBox>
        </WrappedBox>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
