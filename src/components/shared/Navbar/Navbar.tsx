import Cta from '../Cta/Cta';

const navItems = ['Home', 'Projects', 'About'];
function Navbar() {
  return (
    <nav className="py-3 border-b-[1.5px] border-backgroundLight">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-semibold">Md Rezaul</h1>
        <ul className="flex items-center gap-x-14 sm:text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
          <Cta text="Download CV" />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
