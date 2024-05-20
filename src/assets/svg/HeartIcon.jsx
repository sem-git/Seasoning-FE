export default function HeartIcon({ on }) {
  return (
    <>
      {on ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"
            fill="#004A22"
          />
          <path
            d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"
            stroke="#004A22"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20.3269L10.8962 19.3346C9.23847 17.8308 7.86763 16.5384 6.78365 15.4577C5.69968 14.3769 4.84072 13.4151 4.20675 12.5721C3.57277 11.7291 3.12982 10.9602 2.8779 10.2654C2.62597 9.57051 2.5 8.86538 2.5 8.15C2.5 6.73078 2.97852 5.54265 3.93558 4.5856C4.89263 3.62855 6.08076 3.15002 7.49998 3.15002C8.37306 3.15002 9.19806 3.3542 9.97498 3.76255C10.7519 4.17088 11.4269 4.75646 12 5.51927C12.5731 4.75646 13.2481 4.17088 14.025 3.76255C14.8019 3.3542 15.6269 3.15002 16.5 3.15002C17.9192 3.15002 19.1073 3.62855 20.0644 4.5856C21.0214 5.54265 21.5 6.73078 21.5 8.15C21.5 8.86538 21.374 9.57051 21.1221 10.2654C20.8701 10.9602 20.4272 11.7291 19.7932 12.5721C19.1592 13.4151 18.3019 14.3769 17.2211 15.4577C16.1403 16.5384 14.7679 17.8308 13.1038 19.3346L12 20.3269ZM12 18.3C13.6 16.8603 14.9166 15.6263 15.95 14.5981C16.9833 13.5699 17.8 12.6766 18.4 11.9183C19 11.1599 19.4166 10.4865 19.65 9.89807C19.8833 9.30961 20 8.72692 20 8.15C20 7.15 19.6666 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7102 4.65 14.9804 4.87404 14.3106 5.32213C13.6407 5.77019 13.1102 6.39359 12.7192 7.19233H11.2808C10.8833 6.38719 10.3513 5.76218 9.6846 5.3173C9.01793 4.87243 8.28973 4.65 7.49998 4.65C6.50639 4.65 5.67466 4.98333 5.00478 5.65C4.33491 6.31667 3.99998 7.15 3.99998 8.15C3.99998 8.72692 4.11664 9.30961 4.34998 9.89807C4.58331 10.4865 4.99998 11.1599 5.59998 11.9183C6.19998 12.6766 7.01664 13.5683 8.04998 14.5933C9.08331 15.6183 10.4 16.8539 12 18.3Z"
            fill="black"
          />
        </svg>
      )}
    </>
  );
}
