import React from "react";
import LeftBar from "../../components/LeftBar";
import RightBar from "../../components/RightBar";
import { MdBookmarkAdd } from "react-icons/Md";
import { FaTelegram, FaFacebook } from "react-icons/Fa";
import { ImLinkedin } from "react-icons/Im";
import { FiLink } from "react-icons/Fi";
import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const cid = router.query;
  return (
    <div className="flex h-screen justify-between">
      <LeftBar from="" />
      <div className="w-11/12  mt-16 mx-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="bg-purple-400 w-20 h-20 rounded-full"></div>
            <div className="items-center">
              <div className="flex text-xl ">
                <div className="ml-3 mr-2 text-2xl font-bold">
                  Evans Crossby
                </div>
              </div>
              <div className="flex ml-1 w-full  items-center justify-between">
                <div className="flex text-lg items-center">
                  <span className="font-light pl-2"> May 26</span>
                  <div className="font-light mx-3"> . 12 min read</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-4xl flex  gap-5">
            <span className="text-gray-400 hover:text-gray-700">
              <FaTelegram />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <FaFacebook />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <ImLinkedin />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <FiLink />
            </span>
            <span className="text-gray-400 hover:text-gray-700">
              <MdBookmarkAdd />
            </span>
          </div>
        </div>
        <div className="font-bold my-10 text-4xl">
          Ten Principles for Growth as an Engineer
        </div>
        <div className="text-xl my-4">
          <p className="my-5">
            In February, an engineer I’d managed for over a year moved to a new
            team. In one of our last 1:1s, I mentioned that he’d recently done
            some good project management. He replied that he’d had an epiphany
            about self-direction; he’d decided that he needed to own everything
            about his work, not just his code, to make sure his projects
            succeeded. I was impressed with him and, instantly, disappointed in
            myself — I’d long considered ownership the most important thing for
            young engineers to learn, but I’d somehow left this engineer to
            discover that for himself.
          </p>
          <p className="my-5">
            I decided then to write up the practices that I think lift a newly
            minted software engineer from amateur to professional: the path from
            fixing bugs as an “Engineer 1” to leading major projects as a
            “Senior Engineer.”
          </p>
          <p className="my-5">
            I firmly believe that those skills can be taught, but for my part, I
            learned the ideas you’ll read below The Hard Way over ten years in
            Silicon Valley. I’ve covered some ground in that decade; I hacked on
            the kernel at a well known fruit company in Cupertino for six years,
            threw away everything I knew to pursue an interest in distributed
            systems, spent a year at a startup that became a Unicorn and was
            subsequently acquired (AppDynamics), became a manager, ended up
            managing over 20 people at Uber, and eventually returned to my roots
            as an programmer. I hope that reading this list, however incomplete
            it may be, saves you some of the mistakes that educated me; I sure
            wish someone had sent it to me when I was 22.
          </p>
          <ol className="mb-12">
            <li className="my-5">
              <b>Reason about business value: </b>
              Reason like a CEO. Understand the value of your work to your
              company and take responsibility for reasoning about quality,
              feature-richness, and speed. Your job isn’t just to write code;
              your job is to make good decisions and help your company succeed,
              and that requires understanding what really matters.
            </li>
            <li className="my-5">
              <b>Unblock yourself: </b>
              Learn to never, ever accept being blocked; find a way by
              persuasion, escalation, or technical creativity. Again, your job
              isn’t just to write the code and wait for everything else to fall
              into place; your job is to figure out how to create value with
              your efforts.
            </li>
            <li className="my-5">
              <b>Take initiative: </b>
              The most common misconception in software is that there are
              grown-ups out there who are on top of things. Own your team’s and
              company’s mission. Don’t wait to be told; think about what needs
              doing and do it or advocate for it. Managers depend on the
              creativity and intelligence of their engineers, not figuring it
              all out themselves.
            </li>
            <li className="my-5">
              <b>Improve your writing: </b>
              Crisp technical writing eases collaboration and greatly improves
              your ability to persuade, inform, and teach. Remember who your
              audience is and what they know, write clearly and concisely, and
              almost always include a tl;dr above the fold.
            </li>
            <li className="my-5">
              <b>Own your project management: </b>
              Understand the dependency graph for your project, ensure key
              pieces have owners, write good summaries of plans and status, and
              proactively inform stakeholders of plans and progress. Practice
              running meetings! All this enables you to take on much bigger
              projects and is great preparation for leadership.
            </li>
            <li className="my-5">
              <b>Own your education: </b>
              Pursue mastery of your craft. Your career should be a journey of
              constant growth, but no one else will ensure that you grow. Find a
              way to make learning part of your daily life (even 5 minutes/day);
              get on mailing lists, find papers and books that are worth
              reading, and read the manual cover to cover for technologies you
              work with. Consistency is key; build habits that will keep you
              growing throughout your career.
            </li>
          </ol>
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Article;
