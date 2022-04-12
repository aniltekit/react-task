import React from "react";
import setting from "../../../assets/icon/setting.svg";
import apoitment from "../../../assets/icon/apoitment.svg";
import deshabord from "../../../assets/icon/deshabord.svg";
import coustmer from "../../../assets/icon/coustmer.svg";
import order from "../../../assets/icon/order.svg";
import employ from "../../../assets/icon/employ.svg";
import membership from "../../../assets/icon/membership.svg";
import report from "../../../assets/icon/report.svg";

const Navbar = () => {
  return (
    <div class=" sidebar navbar-collapse " id="navbarTogglerDemo01 ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-light sidebar_div">
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={deshabord} />
          DASHBOARD{" "}
        </li>
        <li class="nav-item item_space  item_hover ">
          {" "}
          <img className="icon_navbar" src={apoitment} />
          APPOINTMENTS{" "}
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={coustmer} />
          CUSTOMERS{" "}
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={membership} />
          MEMBERSHIP{" "}
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={order} />
          ORDERS
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={employ} />
          EMPLOYEE
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={employ} />
          SCHEDULES{" "}
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={report} />
          REPORTS
        </li>
        <li class="nav-item item_space item_hover">
          {" "}
          <img className="icon_navbar" src={setting} />
          SETTINGS{" "}
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
