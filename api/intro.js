import TwoColLayout from '../../layouts/two_col_layout';
import Body from '../typography/body';
import Heading from '../typography/heading';
import OneColLayout from '../../layouts/one_col_layout';
import CompanyRole from '../company_role';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__title">
        <OneColLayout>
          <Heading>
            Brand Design and Development. Crafting a health tech brand.
          </Heading>
        </OneColLayout>
      </div>
      <OneColLayout>
        <CompanyRole company="Joany Inc." role="Front-End Engineer" />
      </OneColLayout>
      <TwoColLayout
        left=<Body isParagraph={true}>
          I joined Joany in the May of 2016 to work on their brand and product
          as a Front-End and Design intern. I worked with two brilliant
          cofounders, Christine Carillo and Helen Lee, with a mission to make
          healthcare more human.
        </Body>
        right=<Body isParagraph={true}>
          It was critical for us to keep the product clean and simple. The more
          the user had to think about something, the less likely they were to
          trust Joany. For starters, our brand needed a fresh breath of air.
        </Body>
      />
      <div className="intro__subtitle">
        <OneColLayout>
          <Heading>Below are screenshots from the Joany style guide.</Heading>
        </OneColLayout>
      </div>
      <style jsx>{`
        .intro {
          margin-bottom: 1.25rem;
        }
        .intro__title {
          margin-bottom: 2.5rem;
        }
        .intro__subtitle {
          margin: 1.25rem auto 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default Intro;
