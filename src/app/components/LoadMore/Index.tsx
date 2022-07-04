// Tooltips (by Tippy.JS)
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; // optional

const LoadMore = () => {
  return (
    <div className="mt-8 flex justify-center">
      <Tippy content={"Just visuals too!"} arrow={false} animation="fade" theme="translucent">
        <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
          Load More
        </div>
      </Tippy>
    </div>
  );
};

export default LoadMore;
