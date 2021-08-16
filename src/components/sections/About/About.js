import React from "react";
import styled from "styled-components";

import Text from "../../../utilities/Text";
import Spacer from "../../../utilities/Spacer";

import commImg from "../../../assets/commImg.svg";
import readingImg from "../../../assets/readingImg.svg";
import golfImg from "../../../assets/golfImg.svg";

const Container = styled.div`
  width: 100%;
  padding: 0 5rem;
  margin-bottom: 5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  column-gap: 4rem;

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ItemImage = styled.img`
  width: 25%;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  width: 75%;
`;

const About = () => {
  return (
    <Container>
      <ItemContainer>
        <ItemImage
          src={commImg}
          alt="Jeff giving a presentation in front of a screen with charts on it"
        />

        <ItemText>
          <Text type="heading5">Communicator</Text>
          <Text type="body" light>
            I’ve spent the majority of my career in positions leveraging all
            types of communications. I've generated content in print, digital,
            social media, photography, video. I'm also comfortable giving
            keynote presentations, training, and coaching teams to better their
            performance. I find so much joy in taking what I know and sharing it
            with others.
          </Text>
          <Spacer h="1rem" />
          <Text type="body" light>
            I plan to continue to leverage this skillset to take my programming
            abilities to the next level. I find the most satisfaction when I can
            take complex topics and simplify them so I can teach it to others.
          </Text>
        </ItemText>
      </ItemContainer>
      <ItemContainer>
        <ItemText>
          <Text type="heading5">Life-Long Learner</Text>
          <Text type="body" light>
            Learning has become a foundational value in my life. If I’m not
            learning and growing, I feel like a fish out of water. I love
            reading, listening to podcasts, and taking courses online. I like to
            explore topics ranging from economics and behavioral psychology to
            gardening and building furniture. This value has been one of the
            things that has excited me most about software. Given how much there
            is to learn and how it keeps evolving there seems to be an endless
            amount to learn. I also love getting recommendations for new things
            to check out so please feel free to share any of them with me in the
            contact section below.
          </Text>
        </ItemText>
        <ItemImage
          src={readingImg}
          alt="Jeff sitting in a chair reading a book under a lamp"
        />
      </ItemContainer>
      <ItemContainer>
        <ItemImage
          src={golfImg}
          alt="Jeff with his back turned hitting a golf shot on a golf course"
        />
        <ItemText>
          <Text type="heading5">Love to be active</Text>
          <Text type="body" light>
            Being active and staying healthy is another foundational value in my
            life. I love exercising outdoors, going for hikes, playing tennis,
            and taking my son to the park. My favorite sport is golf. It takes
            my love for learning and growing, being active outdoors, and testing
            my abilities to a whole new level. It is the most challenging sport
            I have ever played but it makes it that much more satisfying when
            things are going well on the course. To see all of the hardwork and
            dedication pay off is an unbelievable feeling.
          </Text>
        </ItemText>
      </ItemContainer>
    </Container>
  );
};

export default About;
