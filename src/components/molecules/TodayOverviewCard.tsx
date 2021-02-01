import styled from "@emotion/styled";

import SocialIcon from "../atoms/SocialIcon";
import iconDown from "../../images/icon-down.svg";
import iconUp from "../../images/icon-up.svg";

import { kFormatter } from "../../utils/formatters";
import { Platform } from "../../types/interfaces";

interface iMediaData {
  id: String;
  platform: Platform;
  title: string;
  count: number;
  offset: number;
}

interface iProps {
  data: iMediaData;
}

const STodayCard = styled.div<any>`
  max-width: 25.5rem;
  height: 12.5rem;
  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.bgSecondary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.4rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.bgTertiary};
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: ${(props) => props.theme.colors.fontPrimary};
  }

  .count {
    font-size: 3.2rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme.colors.fontSecondary};
    font-weight: bold;
  }

  .offset {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.limeGreen};
    font-weight: bold;

    &.down {
      color: ${(props) => props.theme.colors.brightRed};
    }
    &__arrow {
      margin-right: 0.4rem;
    }
  }
`;

const TodayOverviewCard: React.FC<iProps> = ({ data }) => {
  const isGrowing = data.offset > 0;

  return (
    <STodayCard platform={data.platform}>
      <div className="row">
        <p className="title">{data.title}</p>
        {/* TODO: platform name */}
        <SocialIcon platform={data.platform} />
      </div>
      <div className="row">
        <p className="count">{kFormatter(data.count)}</p>
        <p className={`offset ${isGrowing ? "" : "down"}`}>
          {isGrowing && (
            <img className="offset__arrow" src={iconUp} alt="increased" />
          )}
          {!isGrowing && (
            <img className="offset__arrow" src={iconDown} alt="decreased" />
          )}
          <span>{Math.abs(data.offset)}%</span>
        </p>
      </div>
    </STodayCard>
  );
};

export default TodayOverviewCard;
