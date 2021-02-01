import styled from "@emotion/styled";

import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconYoutube from "../../images/icon-youtube.svg";

import iconDown from "../../images/icon-down.svg";
import iconUp from "../../images/icon-up.svg";

import { kFormatter } from "../../utils/formatters";
interface iMediaData {
  platform: string;
  username: string;
  followersCount: number;
  todayFollowersCount: number;
}

interface iProps {
  data: iMediaData;
}

const SCard = styled.div<any>`
  width: 25.5rem;
  height: 21.6rem;
  margin-right: 4rem;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.4rem;
  padding-top: 3.5rem;

  @media (max-width: 375px) {
    width: 32.6rem;
    margin: 0 2rem;
  }

  background-color: ${(props) => props.theme.colors.bgSecondary};
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.bgTertiary};
  }

  .border {
    width: 100%;
    height: 4px;
    background: ${(props) =>
      props.platform
        ? props.theme.colors[props.platform]
        : props.theme.colors.bgPrimary};
    position: absolute;
    top: 0;
  }

  .username {
    display: flex;
    justify-content: center;
    align-items: center;
    &__icon {
      margin-right: 0.8rem;
    }
    &__text {
      font-weight: bold;
      color: ${(props) => props.theme.colors.fontPrimary};
    }
  }

  .followers {
    margin-top: 2.8rem;
    min-height: 4.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;

    &__count {
      font-size: 5.6rem;
      line-height: 4.8rem;
      color: ${(props) => props.theme.colors.fontSecondary};
    }
    &__text {
      font-weight: normal;
      letter-spacing: 0.5rem;
      color: ${(props) => props.theme.colors.fontPrimary};
      padding-top: 0.9rem;
    }
  }

  .today-count {
    margin-top: 2.5rem;
    color: ${(props) => props.theme.colors.limeGreen};
    font-weight: bold;
    display: flex;
    align-items: center;

    img {
      margin-right: 0.4rem;
    }

    &.down {
      color: ${(props) => props.theme.colors.brightRed};
    }
  }
`;

const SocialMediaCard: React.FC<iProps> = ({ data }) => {
  const isGrowing = data.todayFollowersCount > 0;
  let socialIcon = iconFacebook;
  if (data.platform === "instagram") {
    socialIcon = iconInstagram;
  } else if (data.platform === "twitter") {
    socialIcon = iconTwitter;
  } else if (data.platform === "youtube") {
    socialIcon = iconYoutube;
  }

  return (
    <SCard platform={data.platform}>
      <div className="border"></div>
      {/* TODO: logo */}
      <div className="username">
        <img className="username__icon" src={socialIcon} alt={data.platform} />
        <span className="username__text">{data.username}</span>
      </div>
      <div className="followers">
        <h2 className="followers__count">{kFormatter(data.followersCount)}</h2>
        <h3 className="followers__text">Followers</h3>
      </div>
      <p className={`today-count ${isGrowing ? "" : "down"}`}>
        {isGrowing && <img src={iconUp} alt="increased" />}
        {!isGrowing && <img src={iconDown} alt="decreased" />}
        {kFormatter(Math.abs(data.todayFollowersCount))} Today
      </p>
    </SCard>
  );
};

export default SocialMediaCard;
