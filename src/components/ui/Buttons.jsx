import "../../style/Button.scss";
export const ButtonMain = ({ text, handleClick, icon }) => {
  return (
    <>
      <div>
        <button onClick={handleClick} class="btn-style-one bg-theme-color2 ">
          <span className="flex justify-center w-full h-full">
            {text}
            <i className="m-1.5">{icon}</i>
          </span>
        </button>
      </div>
    </>
  );
};

export const ButtonRound = ({ icon, color }) => {
  return (
    <>
      <button className={`capitalize bg-${color} text-white rounded-full w-12 h-12 flex items-center justify-center transition hover:bg-white hover:text-black`}>{icon}</button>
    </>
  );
};

export const SimpleButton = ({text}) => {
  return (
      <button type="submit" className="py-3 px-10 bg-gray-500 text-white mt-10 font-bold text-[20px]">
        {text}
      </button>
  );
};
