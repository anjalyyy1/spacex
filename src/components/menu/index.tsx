import { MenuItem, MenuLabel, MenuWrapper } from './styles';

type Props = unknown;

const options = [
  {
    label: 'Menu 1',
  },
  {
    label: 'Menu 2',
  },
];

const MenuBar: React.FunctionComponent<Props> = props => {
  return (
    <MenuWrapper>
      {options.map(eachOption => {
        return (
          <MenuItem>
            <MenuLabel>{eachOption.label}</MenuLabel>
          </MenuItem>
        );
      })}
    </MenuWrapper>
  );
};

export default MenuBar;
