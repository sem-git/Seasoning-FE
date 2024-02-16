import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  bottom: 0;

  width: 24.375rem;
  height: 3.8125rem;

  display: flex;
  justify-content: center;
  gap: 3.56rem;

  background-color: white;

  .inactive {
    opacity: 0.3;
  }
  .active {
    opacity: 1;
  }

  z-index: 1000;
`;

const IconContainer = styled.div`
  width: 2rem;
  height: 100%;

  display: flex;
  align-items: center;
`;

const TabBar = () => {
  return (
    <Container>
      <NavLink
        to={`/home`}
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <IconContainer>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99984 25.3332H12.9229V17.487H19.0768V25.3332H23.9998V13.3332L15.9998 7.28193L7.99984 13.3332V25.3332ZM6.6665 26.6665V12.6665L15.9998 5.61523L25.3332 12.6665V26.6665H17.7434V18.8204H14.2562V26.6665H6.6665Z"
              fill="#1F1F1F"
            />
          </svg>
        </IconContainer>
      </NavLink>
      <NavLink
        to={`/collage`}
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <IconContainer>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.48733 26.6663C6.87366 26.6663 6.36127 26.4608 5.95016 26.0497C5.53905 25.6386 5.3335 25.1262 5.3335 24.5125V7.48684C5.3335 6.87317 5.53905 6.36079 5.95016 5.94967C6.36127 5.53856 6.87366 5.33301 7.48733 5.33301H24.513C25.1267 5.33301 25.6391 5.53856 26.0502 5.94967C26.4613 6.36079 26.6668 6.87317 26.6668 7.48684V24.5125C26.6668 25.1262 26.4613 25.6386 26.0502 26.0497C25.6391 26.4608 25.1267 26.6663 24.513 26.6663H7.48733ZM7.48733 25.333H11.9976V20.0022H6.66683V24.5125C6.66683 24.7518 6.74375 24.9484 6.8976 25.1022C7.05144 25.2561 7.24802 25.333 7.48733 25.333ZM13.3309 25.333H18.6694V20.0022H13.3309V25.333ZM20.0027 25.333H24.513C24.7523 25.333 24.9489 25.2561 25.1027 25.1022C25.2566 24.9484 25.3335 24.7518 25.3335 24.5125V20.0022H20.0027V25.333ZM6.66683 18.6689H11.9976V13.3304H6.66683V18.6689ZM13.3309 18.6689H18.6694V13.3304H13.3309V18.6689ZM20.0027 18.6689H25.3335V13.3304H20.0027V18.6689ZM6.66683 11.9971H11.9976V6.66634H7.48733C7.24802 6.66634 7.05144 6.74326 6.8976 6.89711C6.74375 7.05095 6.66683 7.24753 6.66683 7.48684V11.9971ZM13.3309 11.9971H18.6694V6.66634H13.3309V11.9971ZM20.0027 11.9971H25.3335V7.48684C25.3335 7.24753 25.2566 7.05095 25.1027 6.89711C24.9489 6.74326 24.7523 6.66634 24.513 6.66634H20.0027V11.9971Z"
              fill="#1F1F1F"
            />
          </svg>
        </IconContainer>
      </NavLink>
      <NavLink
        to={`/feed`}
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <IconContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <mask
              id="mask0_1923_3828"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="32"
              height="32"
            >
              <rect width="32" height="32" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1923_3828)">
              <path
                d="M3.37988 24.8199V22.8028C3.37988 22.1806 3.54099 21.6469 3.86322 21.2015C4.18544 20.7563 4.63355 20.4021 5.20755 20.1391C6.43584 19.585 7.60212 19.1497 8.70638 18.8332C9.81067 18.5166 11.1491 18.3584 12.7218 18.3584C14.2944 18.3584 15.6292 18.5166 16.726 18.8332C17.8229 19.1497 18.9912 19.585 20.2309 20.1391C20.7935 20.4021 21.2367 20.7563 21.5607 21.2015C21.8846 21.6469 22.0466 22.1806 22.0466 22.8028V24.8199H3.37988ZM12.7218 15.1738C11.6161 15.1738 10.6886 14.7992 9.93952 14.05C9.19036 13.3009 8.81578 12.3735 8.81578 11.2678C8.81578 10.1621 9.19036 9.23752 9.93952 8.49407C10.6886 7.75063 11.6161 7.37891 12.7218 7.37891C13.8275 7.37891 14.752 7.75063 15.4955 8.49407C16.239 9.23752 16.6107 10.1621 16.6107 11.2678C16.6107 12.3735 16.239 13.3009 15.4955 14.05C14.752 14.7992 13.8275 15.1738 12.7218 15.1738ZM4.50808 23.6917H20.9184V22.8028C20.9184 22.4615 20.8276 22.155 20.6461 21.8832C20.4647 21.6114 20.1571 21.3612 19.7235 21.1327C18.5987 20.5612 17.5067 20.144 16.4474 19.881C15.3881 19.6181 14.1463 19.4866 12.7218 19.4866C11.2973 19.4866 10.0545 19.6181 8.99358 19.881C7.9326 20.144 6.83973 20.5612 5.71495 21.1327C5.28133 21.3612 4.97178 21.6114 4.78632 21.8832C4.60083 22.155 4.50808 22.4615 4.50808 22.8028V23.6917ZM12.7132 14.0456C13.4899 14.0456 14.1456 13.7782 14.6803 13.2434C15.2151 12.7087 15.4825 12.053 15.4825 11.2763C15.4825 10.4997 15.2151 9.84399 14.6803 9.30924C14.1456 8.77448 13.4899 8.50711 12.7132 8.50711C11.9366 8.50711 11.2809 8.77448 10.7461 9.30924C10.2114 9.84399 9.94398 10.4997 9.94398 11.2763C9.94398 12.053 10.2114 12.7087 10.7461 13.2434C11.2809 13.7782 11.9366 14.0456 12.7132 14.0456Z"
                fill="#1F1F1F"
              />
              <path
                d="M23.2915 18.8332C22.6395 18.645 21.9034 18.5128 21.0833 18.4365L21.4929 18.7173C22.1027 19.1835 22.5911 19.7596 22.9579 20.4456C23.3249 21.1316 23.5083 21.9276 23.5083 22.8336V24.8199H28.612V22.8028C28.612 22.1806 28.45 21.6469 28.1261 21.2015C27.8022 20.7563 27.3589 20.4021 26.7963 20.1391C25.5566 19.585 24.3883 19.1497 23.2915 18.8332Z"
                fill="#1F1F1F"
              />
              <path
                d="M16.9333 14.8946C17.3959 15.0807 17.9027 15.1738 18.4539 15.1738C19.5596 15.1738 20.4842 14.7992 21.2276 14.05C21.9711 13.3009 22.3428 12.3735 22.3428 11.2678C22.3428 10.1621 21.9711 9.23752 21.2276 8.49407C20.4842 7.75063 19.5596 7.37891 18.4539 7.37891C17.8971 7.37891 17.3856 7.47315 16.9192 7.66165C17.2398 8.15322 17.5036 8.66865 17.7104 9.20794C17.9518 9.83701 18.0724 10.5254 18.0724 11.2732C18.0724 12.0209 17.9602 12.7219 17.7359 13.3762C17.5438 13.9365 17.2763 14.4427 16.9333 14.8946Z"
                fill="#1F1F1F"
              />
            </g>
          </svg>
        </IconContainer>
      </NavLink>
      <NavLink
        to={`/mypage`}
        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      >
        <IconContainer>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.513 28L13.031 24.1436C12.6053 24.0154 12.1451 23.8137 11.6502 23.5385C11.1553 23.2632 10.7344 22.9684 10.3873 22.6539L6.83095 24.1667L4.34375 19.8333L7.41812 17.5154C7.37881 17.2743 7.34633 17.0261 7.32068 16.7705C7.29504 16.5149 7.28222 16.2667 7.28222 16.0256C7.28222 15.8017 7.29504 15.5662 7.32068 15.3192C7.34633 15.0722 7.37881 14.794 7.41812 14.4846L4.34375 12.1667L6.83095 7.8846L10.3617 9.3718C10.76 9.04018 11.1908 8.74103 11.654 8.47437C12.1173 8.2077 12.5677 8.00171 13.0053 7.8564L13.513 4H18.4874L18.9694 7.88203C19.4805 8.06152 19.9322 8.26751 20.3246 8.5C20.7169 8.73247 21.1207 9.02307 21.5361 9.3718L25.1694 7.8846L27.6566 12.1667L24.4797 14.5615C24.5532 14.8368 24.5942 15.0893 24.6028 15.3192C24.6113 15.5491 24.6156 15.7761 24.6156 16C24.6156 16.2068 24.607 16.4252 24.59 16.6551C24.5728 16.885 24.5335 17.1632 24.472 17.4897L27.5976 19.8333L25.1105 24.1667L21.5361 22.6282C21.1207 22.9769 20.7028 23.2761 20.2822 23.5256C19.8617 23.7752 19.4241 23.9727 18.9694 24.118L18.4874 28H13.513ZM14.6669 26.6667H17.2746L17.7669 23.0564C18.4387 22.8786 19.0433 22.6346 19.5809 22.3244C20.1185 22.0141 20.666 21.5889 21.2233 21.0487L24.5489 22.4667L25.8746 20.2L22.9566 18.0077C23.0677 17.6282 23.1412 17.2791 23.1771 16.9603C23.213 16.6415 23.2309 16.3214 23.2309 16C23.2309 15.6615 23.213 15.3414 23.1771 15.0397C23.1412 14.738 23.0677 14.406 22.9566 14.0436L25.9258 11.8L24.6002 9.53333L21.1976 10.959C20.7942 10.5162 20.2639 10.1013 19.6066 9.7141C18.9493 9.32692 18.3275 9.07009 17.7412 8.9436L17.3335 5.33333H14.6746L14.2592 8.91793C13.5874 9.06153 12.9698 9.29273 12.4066 9.61153C11.8433 9.93033 11.2831 10.3684 10.7258 10.9256L7.40018 9.53333L6.07455 11.8L8.96685 13.959C8.85574 14.2581 8.77796 14.5829 8.73352 14.9333C8.68907 15.2838 8.66685 15.6479 8.66685 16.0256C8.66685 16.3641 8.68907 16.7 8.73352 17.0333C8.77796 17.3667 8.84719 17.6915 8.94122 18.0077L6.07455 20.2L7.40018 22.4667L10.7002 21.0667C11.2232 21.5949 11.7664 22.0184 12.3297 22.3372C12.8929 22.656 13.5275 22.9043 14.2335 23.0821L14.6669 26.6667ZM15.9643 19.3333C16.8942 19.3333 17.6822 19.0103 18.3284 18.3641C18.9745 17.7179 19.2976 16.9299 19.2976 16C19.2976 15.0701 18.9745 14.2821 18.3284 13.6359C17.6822 12.9897 16.8942 12.6667 15.9643 12.6667C15.0292 12.6667 14.2399 12.9897 13.5963 13.6359C12.9527 14.2821 12.6309 15.0701 12.6309 16C12.6309 16.9299 12.9527 17.7179 13.5963 18.3641C14.2399 19.0103 15.0292 19.3333 15.9643 19.3333Z"
              fill="#1F1F1F"
            />
          </svg>
        </IconContainer>
      </NavLink>
    </Container>
  );
};

export default TabBar;
