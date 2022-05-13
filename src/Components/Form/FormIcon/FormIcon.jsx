import * as AntIcon from '@ant-design/icons';
import tw, { css, styled } from 'twin.macro';
import { FaBed, FaClipboard } from 'react-icons/fa';

const {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PhoneOutlined,
  HomeOutlined,
  MailOutlined,
  CheckOutlined,
} = AntIcon;

const FormIcon = css`
  ${tw`text-sm absolute left[4%] top-1/2 -translate-y-1/2`}
`;

const FormBedOutline = styled(FaBed)`
  ${FormIcon}
`;

const FormHiOutlineClipboard = styled(FaClipboard)`
  ${FormIcon}
`;

const FormCheckOutlined = styled(CheckOutlined)`
  ${FormIcon}
  &.anticon {
    color: var(--color-primary);
    ${tw`left-auto right-[10%] w-0`}
  }
`;

const FormHomeOutlined = styled(HomeOutlined)`
  ${FormIcon}
`;

const FormPhoneOutlined = styled(PhoneOutlined)`
  ${FormIcon}
`;

const FormIconEyeShowPass = css`
  &.anticon {
    ${tw`text-sm absolute left-auto top-1/2 cursor-pointer z-50  -translate-y-1/2 right[5%]`}
  }
`;

const FormEyeOutlined = styled(EyeOutlined)`
  ${FormIconEyeShowPass}
`;

const FormEyeInvisibleOutlined = styled(EyeInvisibleOutlined)`
  ${FormIconEyeShowPass}
`;

const FormUserOutlined = styled(UserOutlined)`
  ${FormIcon}
`;
const FormLockOutlined = styled(LockOutlined)`
  ${FormIcon}
`;

const FormMailOutlined = styled(MailOutlined)`
  ${FormIcon}
`;

export const FormIconCSS = {
  FormIconEyeShowPass,
  FormEyeOutlined,
  FormEyeInvisibleOutlined,
  FormUserOutlined,
  FormLockOutlined,
  FormHomeOutlined,
  FormPhoneOutlined,
  FormMailOutlined,
  FormCheckOutlined,
  FormBedOutline,
  FormHiOutlineClipboard,
};
