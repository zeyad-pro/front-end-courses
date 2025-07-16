// app/dashboard/loading.js
export default function Loading() {
  return (
    <div className="main-l h-dvh">

    <div className="flex justify-center items-center h-screen">
      <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40"></circle>
          <circle className="front" cx="43" cy="43" r="40"></circle>
          {/* <circle className="new" cx="43" cy="43" r="40"></circle> */}
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27"></circle>
          <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14"></circle>
          <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div className="text" style={{fontSize: 25}} data-text="loading..."></div>
      </div>
    </div>

    </div>
  );
}

