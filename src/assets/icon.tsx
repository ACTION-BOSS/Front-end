import React, { FC } from 'react';

interface IconProps {
  size?: number;
  color?: string;
  color2?: string;
  color3?: string;
}

export const BackIcon: FC<IconProps> = ({ size = 25, color = '#C2C8D6' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.8484 11.0077H8.46553C8.03832 11.0077 7.82946 10.4951 8.13325 10.2007L14.3896 3.94442L12.3769 1.93176L3.28292 11.0175C2.50127 11.7985 2.50099 13.0653 3.28228 13.8466L12.3674 22.9318L14.3801 20.9191L8.12376 14.6628C7.82946 14.3685 8.03832 13.8558 8.45604 13.8558H22.8389V11.0077H22.8484Z"
        fill={color}
      />
    </svg>
  );
};

export const CheckIcon: FC<IconProps> = ({
  size = 25,
  color = '#C2C8D6',
  color2 = '#FEFEFE',
  color3 = '#5782FA',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_328_5832)">
        <rect
          x="1.85767"
          y="1.93176"
          width="21"
          height="21"
          rx="2"
          fill={color}
        />
        <rect
          x="4.85767"
          y="4.93176"
          width="15"
          height="15"
          rx="2"
          fill={color2}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9431 14.017L6.04419 9.11816L3.92287 11.2395L8.82174 16.1384L8.82148 16.1386L10.9428 18.2599L10.9431 18.2597L10.9433 18.2599L13.0646 16.1386L13.0644 16.1384L20.8552 8.34758L18.7338 6.22626L10.9431 14.017Z"
          fill={color3}
        />
      </g>
      <defs>
        <clipPath id="clip0_328_5832">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.357666 0.431763)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CheckXIcon: FC<IconProps> = ({ size = 25, color = '#E0E3EB' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_328_5833)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.85767 1.93176C2.7531 1.93176 1.85767 2.82719 1.85767 3.93176V20.9318C1.85767 22.0363 2.7531 22.9318 3.85767 22.9318H20.8577C21.9622 22.9318 22.8577 22.0363 22.8577 20.9318V3.93176C22.8577 2.82719 21.9622 1.93176 20.8577 1.93176H3.85767ZM6.85767 4.93176C5.7531 4.93176 4.85767 5.82719 4.85767 6.93176V17.9318C4.85767 19.0363 5.7531 19.9318 6.85767 19.9318H17.8577C18.9622 19.9318 19.8577 19.0363 19.8577 17.9318V6.93176C19.8577 5.82719 18.9622 4.93176 17.8577 4.93176H6.85767Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_328_5833">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.357666 0.431763)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ClearSumIcon: FC<IconProps> = ({
  size = 131,
  color = '#F0F1F5',
  color2 = '#F0F1F5',
}) => {
  const size2 = size - 48;
  return (
    <svg
      width={size}
      height={size2}
      viewBox="0 0 131 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_416_7821)">
        <path
          d="M37.2969 62.8975V64.6729H29.5625V62.8975H32.3398V60.8936H34.5547V62.8975H37.2969ZM29.9316 69.1904C29.9316 66.9668 31.4258 65.4023 33.4648 65.3936C35.5127 65.4023 36.9717 66.9668 36.9805 69.1904C36.9717 71.4229 35.5127 73.0049 33.4648 73.0049C31.4258 73.0049 29.9316 71.4229 29.9316 69.1904ZM31.9004 69.1904C31.9004 70.4121 32.5332 71.1064 33.4648 71.1064C34.3613 71.1064 35.0029 70.4121 35.0117 69.1904C35.0029 67.9863 34.3613 67.2568 33.4648 67.2568C32.5332 67.2568 31.9004 67.9863 31.9004 69.1904ZM37.8945 75.7646V60.7705H39.9863V66.958H41.2871V60.4541H43.4141V76.4502H41.2871V68.751H39.9863V75.7646H37.8945ZM58.6191 60.4541V68.5049H56.3867V67.2744H52.7305V65.5693H56.3867V64.1631H52.9062C51.9131 66.5625 49.6279 68.1006 46.0859 68.874L45.3301 67.0459C48.9951 66.3252 50.6826 64.8047 50.9814 62.8799H46.2266V61.0693H53.4688C53.4688 61.5527 53.4336 62.0186 53.3633 62.458H56.3867V60.4541H58.6191ZM47.9844 70.8428V69.085H58.6191V73.4619H50.252V74.5166H58.9707V76.292H48.002V71.8096H56.3691V70.8428H47.9844ZM69.6582 61.1045C71.9961 61.1133 73.6748 62.4229 73.6836 64.3564C73.6748 65.9209 72.5322 67.1162 70.8184 67.4854V68.6543C72.0752 68.5752 73.3232 68.4609 74.4922 68.2939L74.668 69.9287C71.3721 70.5088 67.707 70.5879 65.0352 70.5791L64.8066 68.8037C65.9141 68.8037 67.2061 68.7949 68.5684 68.7598V67.5029C66.8018 67.1514 65.624 65.9473 65.6328 64.3564C65.624 62.4229 67.3027 61.1133 69.6582 61.1045ZM66.916 76.1514V71.5986H69.166V74.3584H78.1836V76.1514H66.916ZM67.7246 64.3564C67.707 65.332 68.5244 65.8945 69.6582 65.9033C70.8096 65.8945 71.5742 65.332 71.5742 64.3564C71.5742 63.3545 70.8008 62.8096 69.6582 62.792C68.5244 62.8096 67.707 63.3545 67.7246 64.3564ZM75.3887 72.6709V60.4717H77.6387V65.499H79.6777V67.3623H77.6387V72.6709H75.3887ZM95.041 72.8291V74.6748H80.3984V72.8291H84.1426V70.3857H82.0859V65.0068H91.1387V63.2842H82.0684V61.4912H93.3535V66.7998H84.3359V68.5752H93.7227V70.3857H91.4551V72.8291H95.041ZM86.3223 72.8291H89.2578V70.3857H86.3223V72.8291ZM99.5938 62.1064L99.3652 71.0186H97.1152L96.8867 62.1064H99.5938ZM96.7812 73.5146C96.7637 72.7061 97.4316 72.0469 98.2578 72.0557C99.04 72.0469 99.7168 72.7061 99.7168 73.5146C99.7168 74.332 99.04 74.9912 98.2578 74.9912C97.4316 74.9912 96.7637 74.332 96.7812 73.5146Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M65.0525 47.7774C76.857 47.7774 86.4265 38.3007 86.4265 26.6106C86.4265 14.9205 76.857 5.44385 65.0525 5.44385C53.2479 5.44385 43.6785 14.9205 43.6785 26.6106C43.6785 38.3007 53.2479 47.7774 65.0525 47.7774ZM54.3705 24.5495L60.9091 31.0247L75.7342 16.3433L80.0524 20.6197L65.2273 35.301L65.2278 35.3015L60.9096 39.5779L60.9091 39.5774L60.9085 39.5779L56.5903 35.3016L56.5909 35.301L50.0522 28.8258L54.3705 24.5495Z"
          fill={color2}
        />
      </g>
      <defs>
        <filter
          id="filter0_d_416_7821"
          x="-1.94727"
          y="0.420044"
          width={size}
          height={size2}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.160784 0 0 0 0 0.184314 0 0 0 0 0.239216 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_416_7821"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_416_7821"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export const ClearIcon: FC<IconProps> = ({ size = 25, color = '#F0F1F5' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3574 22.9318C18.1564 22.9318 22.8574 18.2308 22.8574 12.4318C22.8574 6.63277 18.1564 1.93176 12.3574 1.93176C6.55843 1.93176 1.85742 6.63277 1.85742 12.4318C1.85742 18.2308 6.55843 22.9318 12.3574 22.9318ZM7.10986 11.4093L10.322 14.6214L17.6048 7.33857L19.7261 9.45989L12.4433 16.7427L12.4435 16.743L10.3222 18.8643L10.322 18.864L10.3217 18.8643L8.20039 16.743L8.20065 16.7427L4.98854 13.5306L7.10986 11.4093Z"
        fill={color}
      />
    </svg>
  );
};

export const GPSIcon: FC<IconProps> = ({ size = 25, color = '#454554' }) => {
  const size2 = size - 1;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_244_4231)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7744 5.49042V6.34867H10.9411V5.49032C8.16556 6.05362 5.97931 8.23978 5.41588 11.0153H6.27409V13.8486H5.41585C5.97922 16.6241 8.1655 18.8104 10.9411 19.3737V18.5153H13.7744V19.3736C16.5498 18.8101 18.7358 16.624 19.2992 13.8486H18.4404V11.0153H19.2991C18.7357 8.23994 16.5497 6.05387 13.7744 5.49042ZM13.7744 2.61573C18.1173 3.23708 21.5525 6.67231 22.1737 11.0153H24.1071V13.8486H22.1737C21.5525 18.1915 18.1173 21.6268 13.7744 22.2481V24.1819H10.9411V22.2482C6.59786 21.6271 3.16242 18.1918 2.54118 13.8486H0.607422V11.0153H2.54118C3.16242 6.67209 6.59787 3.23674 10.9411 2.61564V0.682007H13.7744V2.61573Z"
          fill={color}
        />
        <circle cx="12.3574" cy="12.4318" r="2.5" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_244_4231">
          <rect
            width={size2}
            height={size2}
            fill="white"
            transform="translate(0.357422 0.431763)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HelpIcon: FC<IconProps> = ({ size = 25, color = '#C2C8D6' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3579 22.9318C18.1569 22.9318 22.8579 18.2308 22.8579 12.4318C22.8579 6.63277 18.1569 1.93176 12.3579 1.93176C6.55892 1.93176 1.85791 6.63277 1.85791 12.4318C1.85791 18.2308 6.55892 22.9318 12.3579 22.9318ZM12.3574 10.1611C13.3239 10.1611 14.1074 9.37763 14.1074 8.41113C14.1074 7.44463 13.3239 6.66113 12.3574 6.66113C11.3909 6.66113 10.6074 7.44463 10.6074 8.41113C10.6074 9.37763 11.3909 10.1611 12.3574 10.1611ZM10.9087 11.1611V18.2024H13.8058V11.1611H10.9087Z"
        fill={color}
      />
    </svg>
  );
};

export const MinusIcon: FC<IconProps> = ({ size = 25, color = '#454554' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1.35767" y="10.9318" width="22" height="3" fill={color} />
    </svg>
  );
};

export const MyDirectIcon: FC<IconProps> = ({
  size = 25,
  color = '#454554',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3527 17.0132C16.6827 17.0132 20.1928 13.5031 20.1928 9.17317C20.1928 4.84323 16.6827 1.33313 12.3527 1.33313C8.0228 1.33313 4.5127 4.84323 4.5127 9.17317C4.5127 13.5031 8.0228 17.0132 12.3527 17.0132ZM12.3525 13.1732C14.5617 13.1732 16.3525 11.3824 16.3525 9.17322C16.3525 6.96408 14.5617 5.17322 12.3525 5.17322C10.1434 5.17322 8.35254 6.96408 8.35254 9.17322C8.35254 11.3824 10.1434 13.1732 12.3525 13.1732Z"
        fill={color}
      />
      <path
        d="M14.119 22.5093C13.3666 23.9232 11.3403 23.9232 10.5879 22.5093L5.6844 13.2947L19.0225 13.2947L14.119 22.5093Z"
        fill={color}
      />
    </svg>
  );
};

export const PlusIcon: FC<IconProps> = ({ size = 25, color = '#454554' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8321 1.75684H10.8921V9.49684C10.8921 10.3068 10.2321 10.9668 9.42213 10.9668H1.68213V13.8968H9.42213C10.2321 13.8968 10.8921 14.5568 10.8921 15.3668V23.1068H13.8221V15.3668C13.8221 14.5568 14.4821 13.8968 15.2921 13.8968H23.0321V10.9668H15.2921C14.4821 10.9668 13.8221 10.3068 13.8221 9.49684V1.75684H13.8321Z"
        fill={color}
      />
    </svg>
  );
};

export const Plus2Icon: FC<IconProps> = ({ size = 25, color = '#5782FA' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_140_2947)">
        <path
          d="M13.8324 1.75684H10.8924V9.49684C10.8924 10.3068 10.2324 10.9668 9.42237 10.9668H1.68237V13.8968H9.42237C10.2324 13.8968 10.8924 14.5568 10.8924 15.3668V23.1068H13.8224V15.3668C13.8224 14.5568 14.4824 13.8968 15.2924 13.8968H23.0324V10.9668H15.2924C14.4824 10.9668 13.8224 10.3068 13.8224 9.49684V1.75684H13.8324Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_140_2947">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.357666 0.431763)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ToggleIcon: FC<IconProps> = ({ size = 25, color = '#454554' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3575 15.416L4.36351 7.422L2.24219 9.54332L10.9332 18.2344C11.326 18.6272 11.8416 18.8224 12.3565 18.8201C12.872 18.823 13.3884 18.6277 13.7818 18.2344L22.4728 9.54333L20.3515 7.42201L12.3575 15.416Z"
        fill={color}
      />
    </svg>
  );
};

export const Toggle2Icon: FC<IconProps> = ({
  size = 24,
  color = '#8A8FA8',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 9.01576L19.9939 17.0098L22.1152 14.8884L13.4242 6.19741C13.0314 5.80459 12.5158 5.60933 12.001 5.61164C11.4854 5.60879 10.969 5.80404 10.5756 6.1974L1.88459 14.8884L4.00591 17.0098L11.9999 9.01576Z"
        fill={color}
      />
    </svg>
  );
};

export const UncomBigIcon: FC<IconProps> = ({
  size = 25,
  color = '#FF005E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3579 22.4318C17.8808 22.4318 22.3579 17.9546 22.3579 12.4318C22.3579 6.90892 17.8808 2.43176 12.3579 2.43176C6.83506 2.43176 2.35791 6.90892 2.35791 12.4318C2.35791 17.9546 6.83506 22.4318 12.3579 22.4318ZM11.4054 7.79268H9.50065V10.6498H11.4054V7.79268ZM13.3106 7.79277H15.2154V10.6499H13.3106V7.79277ZM9.44171 13.52C8.66827 14.2934 8.23376 15.3424 8.23376 16.4363H9.73376C9.73376 15.7403 10.0102 15.0728 10.5024 14.5807C10.9945 14.0885 11.662 13.812 12.358 13.812C13.054 13.812 13.7214 14.0885 14.2136 14.5807C14.7057 15.0728 14.9822 15.7403 14.9822 16.4363H16.4822C16.4822 15.3424 16.0477 14.2934 15.2742 13.52C14.5008 12.7466 13.4518 12.312 12.358 12.312C11.2642 12.312 10.2152 12.7466 9.44171 13.52Z"
        fill={color}
      />
    </svg>
  );
};

export const UncomOrigIcon: FC<IconProps> = ({
  size = 25,
  color = '#F0F1F5',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3574 22.9318C18.1564 22.9318 22.8574 18.2308 22.8574 12.4318C22.8574 6.63277 18.1564 1.93176 12.3574 1.93176C6.55843 1.93176 1.85742 6.63277 1.85742 12.4318C1.85742 18.2308 6.55843 22.9318 12.3574 22.9318ZM11.3574 7.56067H9.35742V10.5607H11.3574V7.56067ZM13.3574 7.56067H15.3574V10.5607H13.3574V7.56067ZM8.99478 13.2737C8.10297 14.1655 7.60195 15.3751 7.60195 16.6363H9.60195C9.60195 15.9055 9.89225 15.2047 10.409 14.6879C10.9257 14.1712 11.6266 13.8809 12.3574 13.8809C13.0882 13.8809 13.789 14.1712 14.3057 14.6879C14.8225 15.2047 15.1128 15.9055 15.1128 16.6363H17.1128C17.1128 15.3751 16.6118 14.1655 15.72 13.2737C14.8281 12.3819 13.6186 11.8809 12.3574 11.8809C11.0962 11.8809 9.8866 12.3819 8.99478 13.2737Z"
        fill={color}
      />
    </svg>
  );
};

export const UncomSmallIcon: FC<IconProps> = ({
  size = 19,
  color = '#FF005E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29883 16.4318C13.1648 16.4318 16.2988 13.2978 16.2988 9.43176C16.2988 5.56577 13.1648 2.43176 9.29883 2.43176C5.43283 2.43176 2.29883 5.56577 2.29883 9.43176C2.29883 13.2978 5.43283 16.4318 9.29883 16.4318ZM8.63208 6.18412H7.29875V8.18412H8.63208V6.18412ZM9.96525 6.18404H11.2986V8.18404H9.96525V6.18404ZM7.29269 10.2286C6.76066 10.7606 6.46177 11.4822 6.46177 12.2346H7.46177C7.46177 11.7474 7.6553 11.2802 7.9998 10.9357C8.34429 10.5912 8.81152 10.3977 9.29871 10.3977C9.7859 10.3977 10.2531 10.5912 10.5976 10.9357C10.9421 11.2802 11.1357 11.7474 11.1357 12.2346H12.1357C12.1357 11.4822 11.8368 10.7606 11.3047 10.2286C10.7727 9.69657 10.0511 9.39768 9.29871 9.39768C8.54631 9.39768 7.82472 9.69657 7.29269 10.2286Z"
        fill={color}
      />
    </svg>
  );
};

export const WriteIcon: FC<IconProps> = ({ size = 25, color = '#454554' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.37744" y="20.3766" width="20" height="3" fill={color} />
      <rect
        x="13.1694"
        y="3.60828"
        width="3"
        height="7.05544"
        transform="rotate(-45 13.1694 3.60828)"
        fill={color}
      />
      <rect
        x="3.71143"
        y="13.0662"
        width="11.5767"
        height="7.05544"
        transform="rotate(-45 3.71143 13.0662)"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.97412 12.8033L2.39285 14.3846L2.40086 14.3926L2.38484 14.3926V17.7843H2.38389C2.38389 18.186 2.53217 18.553 2.77698 18.8337C3.06979 19.17 3.50107 19.3826 3.982 19.3826V19.3815H7.37383L7.37383 19.3656L7.3818 19.3736L8.96307 17.7923L3.97412 12.8033Z"
        fill={color}
      />
    </svg>
  );
};

export const XButtonBigIcon: FC<IconProps> = ({
  size = 33,
  color = '#C2C8D6',
}) => {
  const size2 = 32;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_140_2412)">
        <path
          d="M29.6813 5.86679L26.9139 3.09839L17.7317 12.284C16.9689 13.047 15.727 13.047 14.9643 12.284L5.7918 3.09839L3.02441 5.86679L12.2067 15.0524C12.9694 15.8154 12.9694 17.0578 12.2067 17.8208L3.02441 26.9967L5.7918 29.7651L14.9741 20.5794C15.7368 19.8164 16.9787 19.8164 17.7414 20.5794L26.9237 29.7651L29.6911 26.9967L20.5088 17.811C19.7461 17.048 19.7461 15.8057 20.5088 15.0426L29.6813 5.86679Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_140_2412">
          <rect
            width={size2}
            height={size2}
            fill="white"
            transform="translate(0.357666 0.431763)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const XButtonIcon: FC<IconProps> = ({
  size = 25,
  color = '#454554',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.3503 4.50806L20.2748 2.43176L13.3881 9.32098C12.816 9.89325 11.8846 9.89325 11.3126 9.32098L4.43321 2.43176L2.35767 4.50806L9.24435 11.3973C9.81641 11.9695 9.81641 12.9013 9.24435 13.4736L2.35767 20.3555L4.43321 22.4318L11.3199 15.5425C11.892 14.9703 12.8234 14.9703 13.3954 15.5425L20.2821 22.4318L22.3577 20.3555L15.471 13.4662C14.8989 12.894 14.8989 11.9622 15.471 11.3899L22.3503 4.50806Z"
        fill={color}
      />
    </svg>
  );
};

export const PingIcon = (currentOption: string) => {
  return currentOption === '해결순'
    ? 'https://res.cloudinary.com/dozkdbzkh/image/upload/v1692102437/nc0sornjf4xi7adwqml9.svg'
    : 'https://res.cloudinary.com/dozkdbzkh/image/upload/v1692102302/kilci9jvo8fxzrshdfbz.svg';
};
export const BigPingIcon = (currentOption: string) => {
  return currentOption === '해결순'
    ? 'https://res.cloudinary.com/dozkdbzkh/image/upload/v1692102441/l6cvbmmefjdc50sonkn0.svg'
    : 'https://res.cloudinary.com/dozkdbzkh/image/upload/v1692102445/ztckh2owqwlwd2sgjhq8.svg';
};
