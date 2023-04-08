import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Hearder = () => {
  return (
    <>
      <header class="header-top-strip py-3">
        <div class="container-xxl">
          <div class="row">
            <div class="col-6">
              <p className="text-white mb-0">Free shipping over $100 bill</p>
            </div>
            <div class="col-6">
              <p className="test-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel: 1800 6975">
                  {" "}
                  1800 6975{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header class="header-upper py-3">
        <div class="container-xxl">
          <div class="row">
            <div class="col-2">
              <h2>
                <Link className="text-white">Digitic</Link>
              </h2>
            </div>
            <div class="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for the product you want.."
                  aria-label="Search for the product you want..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div class="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hearder;
