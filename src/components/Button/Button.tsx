import './Button.css';

interface ButtonProps {
  texto: string;
  type?: "button" | "submit" | "reset";
}

function Button({ texto, type = "button" }: ButtonProps) {
  return (
    <button className="btn" type={type}>
      {texto}
    </button>
  );
}

export default Button;