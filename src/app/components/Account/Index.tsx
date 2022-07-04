// Tooltips (by Tippy.JS)
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional

const Account = () => {
  return (
    <div className="flex justify-center md:justify-end gap-2">
      <Tippy content={"This doesn't work!"} placement="bottom" arrow={false} animation="fade" theme="translucent">
        <button className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300">
          Log In
        </button>
      </Tippy>
      <Tippy content={"It's just visuals!"} placement="bottom" arrow={false} animation="fade" theme="translucent">
        <button className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-300">
          Log Out
        </button>
      </Tippy>
    </div>
  );
};

export default Account;
