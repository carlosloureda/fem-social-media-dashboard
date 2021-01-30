import styled from "@emotion/styled";

import { kFormatter } from "../../utils/formatters";
interface iMediaData {
  type: string;
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

  @media (max-width: 375px) {
    width: 32.6rem;
    margin: 0 2rem;
  }

  background-color: ${(props) => props.theme.colors.bgSecondary};
  position: relative;

  .border {
    width: 100%;
    height: 4px;
    background: ${(props) =>
      props.type
        ? props.theme.colors[props.type]
        : props.theme.colors.bgPrimary};
    position: absolute;
    top: 0;
  }
`;

// linear-gradient(225deg, #DF4896 0%, #EE877E 50.91%, #FDC366 100%);
const SocialMediaCard: React.FC<iProps> = ({ data }) => {
  return (
    <SCard type={data.type}>
      <div className="border"></div>
      {/* TODO: logo */}
      <h1>{data.username}</h1>
      <h2>{kFormatter(data.followersCount)}</h2>
      <h2>Followers</h2>
      <h3>{data.todayFollowersCount}</h3>
    </SCard>
  );
};

export default SocialMediaCard;
