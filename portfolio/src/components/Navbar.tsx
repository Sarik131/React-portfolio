import Button from "./Button";

export const Navbar = () => {
  const navBarListItems = [
    { key: "home", name: "Home" },
    { key: "service", name: "Service" },
    { key: "projects", name: "Projects" },
    { key: "testimonials", name: "Testimonials" },
  ];

  return (
    <nav className="flex items-center justify-between bg-black px-16 py-4 text-white">
      <h1 className="font-semibold">Shariq.com</h1>
      <ul className="flex items-center justify-between gap-6 text-xs">
        {navBarListItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <Button className="">LET'S TALK</Button>
    </nav>
  );
};
