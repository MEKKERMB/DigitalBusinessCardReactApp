import profilePicture from "../assets/profilepicture.png";

export default function Header() {
  return (
    <header className="overflow-hidden">
      <img src={profilePicture} />
    </header>
  );
}
