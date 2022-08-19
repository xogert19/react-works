import "./Button.css";

const Button = ({ color, action, onClick, content, length }) => {
  return (
    <button
      className={`Button ${color || ""} ${length || ""}`}
      onClick={() => onClick({ action, content })}
    >
      {content}
    </button>
  );
};

export default Button;
