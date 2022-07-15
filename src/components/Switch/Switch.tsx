import "./Switch.scss";

const Switch = () => {
  return (
    <div className="switch">
      <h1>devfinder</h1>
      <div className="switch__mode text-purple-200">
        <p>Light</p>
        <i className="fas fa-sun cursor-pointer"></i>
        {/* <p>Dark</p> */}
        {/* <i class="fas fa-moon"></i> */}
      </div>
    </div>
  );
};

export default Switch;
