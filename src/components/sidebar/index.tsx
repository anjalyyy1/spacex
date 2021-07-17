import { ImProfile, ImCross } from 'react-icons/im';
import { GrLogout } from 'react-icons/gr';
import {
  CrossIconWrapper,
  IconWrapper,
  LabelTitle,
  SideBarItem,
  SideBarWrapper,
} from './styles';

type Props = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const options = [
  {
    label: 'Profile',
    icon: <ImProfile />,
  },
  {
    label: 'Logout',
    icon: <GrLogout />,
  },
];

const SideBar: React.FunctionComponent<Props> = props => {
  const { setShowSidebar } = props;

  return (
    <SideBarWrapper>
      <CrossIconWrapper onClick={() => setShowSidebar(false)}>
        <ImCross />
      </CrossIconWrapper>
      {options.map(eachOption => {
        return (
          <SideBarItem>
            <IconWrapper>{eachOption.icon}</IconWrapper>
            <LabelTitle>{eachOption.label}</LabelTitle>
          </SideBarItem>
        );
      })}
    </SideBarWrapper>
  );
};

export default SideBar;
