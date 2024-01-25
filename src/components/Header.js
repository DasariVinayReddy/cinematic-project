import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [darkmode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };
  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
    if (!darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  const activeclass =
    "bg-gray-900 text-white bg-black rounded-md px-3 py-2 text-sm font-medium";
  const inActiveclass =
    "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium";

  const navactiveclass =
    "bg-gray-900 text-white bg-black block rounded-md px-3 py-2 text-base font-medium";
  const innavactiveclass =
    "text-gray-300   hover:bg-gray-700 hover:text-black block rounded-md px-3 py-2 text-base font-medium";
  return (
    <>
      <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-2 dark:bg-gray-900 dark:border-b-1 dark:border-gray-900">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                onClick={() => setHidden(!hidden)}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. Menu open: "hidden", Menu closed:
          "block" */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open. Menu open: "block", Menu closed:
          "hidden" */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center  sm:items-stretch ">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex text-center space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300
            hover:bg-gray-700 hover:text-white" */}
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeclass : inActiveclass
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/movie/popular"
                    className={({ isActive }) =>
                      isActive ? activeclass : inActiveclass
                    }
                  >
                    Popular
                  </NavLink>
                  <NavLink
                    to="/movie/top_rated"
                    className={({ isActive }) =>
                      isActive ? activeclass : inActiveclass
                    }
                  >
                    Top Rated
                  </NavLink>
                  <NavLink
                    to="/movie/upcoming"
                    className={({ isActive }) =>
                      isActive ? activeclass : inActiveclass
                    }
                  >
                    Upcoming
                  </NavLink>
                </div>
              </div>
            </div>
            <div id="mobile-nav">
              <button
                onClick={() => setDarkMode(!darkmode)}
                data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip"
                type="button"
                data-toggle-dark="light"
                className="flex items-center p-2 mr-2 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {darkmode ? (
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z" />
                  </svg>
                ) : (
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden relative md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    id="search-navbar"
                    name="search"
                    className="block p-2 pl-10  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder="Search..."
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className={`${hidden ? "hidden" : ""} sm:hidden`} id="mobile-menu">
          <div className="relative mt-3 md:hidden">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <form>
              <input
                type="text"
                id="search-navbar"
                name="search"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                autoComplete="off"
              />
            </form>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300
      hover:bg-gray-700 hover:text-white" */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? navactiveclass : innavactiveclass
              }
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              to="/movie/popular"
              className={({ isActive }) =>
                isActive ? navactiveclass : innavactiveclass
              }
            >
              Popular
            </NavLink>
            <NavLink
              to="/movie/top_rated"
              className={({ isActive }) =>
                isActive ? navactiveclass : innavactiveclass
              }
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/movie/upcoming"
              className={({ isActive }) =>
                isActive ? navactiveclass : innavactiveclass
              }
            >
              Upcoming
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
