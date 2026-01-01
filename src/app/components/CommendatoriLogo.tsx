import logo from "../../assets/logo2.svg";

export function CommendatoriLogo() {
  return (
    <div className="flex items-center gap-6">
      <img src={logo} alt="Logo" style={{ height: 40 }} />
    </div>
  );
}
