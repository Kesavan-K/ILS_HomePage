import { useState } from "react";

const BuildBB = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="p-2.5">
      <ul className="list-disc">
        <li>
          <span className="text-gray-700">
            ILS helps build better organizations, clearing a path through the
            jungle of complexity and giving you the internal systems, processes
            and skills required for growing and sustaining your business.
          </span>
        </li>
        <li>
          <span className="text-gray-700">
            Todays market is brutal: fierce competition, fast-changing products,
            long supply chains, and demanding lead times. Your company needs to
            be nimble to survive.
          </span>
        </li>
      </ul>

      <ul>
        <div>
          <li
            className="flex justify-between items-center border-b border-gray-800 py-2 px-4 cursor-pointer"
            onClick={() => handleItemClick(0)}
          >
            <span className="text-gray-700">Boosting Productivity</span>
            <i
              className={`fa-solid ${
                activeItem === 0 ? "fa-minus" : "fa-plus"
              } text-gray-800`}
            ></i>
          </li>
          <p
            className={`item-description ${
              activeItem === 0 ? "block" : "hidden"
            } border-l border-r border-b border-gray-800 text-black py-2 px-4 rounded-b-lg`}
          >
            Enhance productivity while upholding superior standards without
            compromise. Balancing quantity with uncompromised quality is
            paramount for sustained success and continual advancement in any
            undertaking.
          </p>
        </div>
        <div>
          <li
            className="flex justify-between items-center border-b border-gray-800 py-2 px-4 cursor-pointer"
            onClick={() => handleItemClick(1)}
          >
            <span className="text-gray-700">Enhancing Profitability</span>
            <i
              className={`fa-solid ${
                activeItem === 1 ? "fa-minus" : "fa-plus"
              } text-gray-800`}
            ></i>
          </li>
          <p
            className={`item-description ${
              activeItem === 1 ? "block" : "hidden"
            } border-l border-r border-b border-gray-800 text-black py-2 px-4 rounded-b-lg`}
          >
            Amplify your profitability and broaden your business horizons
            without conceding on any fronts. Accelerate your growth trajectory
            while staying true to your values and objectives, ensuring a
            seamless journey towards success.
          </p>
        </div>
        <div>
          <li
            className="flex justify-between items-center border-b border-gray-800 py-2 px-4 cursor-pointer"
            onClick={() => handleItemClick(2)}
          >
            <span className="text-gray-700">Engaging Employees</span>
            <i
              className={`fa-solid ${
                activeItem === 2 ? "fa-minus" : "fa-plus"
              } text-gray-800`}
            ></i>
          </li>
          <p
            className={`item-description ${
              activeItem === 2 ? "block" : "hidden"
            } border-l border-r border-b border-gray-800 text-black py-2 px-4 rounded-b-lg`}
          >
            Foster an environment that ignites peak performance among your team
            members. Cultivate a workplace culture that sparks creativity,
            drives innovation, and empowers individuals to reach their highest
            potential.
          </p>
        </div>
      </ul>
    </div>
  );
};

export default BuildBB;
