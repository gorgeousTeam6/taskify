type ButtonType =
  | 'login'
  | 'primary'
  | 'secondary'
  | 'delete'
  | 'add-column'
  | 'add-todo'
  | 'delete-dashboard'
  | 'pagenation'
  | 'add-board'
  | 'dashboard';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  isOwner?: boolean;
  children?: string;
}

interface ButtonChildrenProps extends ButtonProps {
  ActionIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

type ButtonSetType = 'primary' | 'pagenation';

interface ButtonSetProps {
  buttonSetType: ButtonSetType;
  orderReverse?: boolean;
  widthFill?: boolean;
  children: ReactElement<typeof Button> | ReactElement<typeof Button>[];
}

interface ButtonSetForPaginationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'large';
}
