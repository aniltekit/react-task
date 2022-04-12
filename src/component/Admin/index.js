import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";
import { Col, Row } from "react-bootstrap";
const AdminPage = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getTableDataUser = async (page) => {
    try {
      const response = await axios.get(
        `http://restapi.adequateshop.com/api/Tourist?page=${page}`
      );
      if (page === 1) {
        setUserData(response?.data?.data);
      } else {
        setUserData([...userData, ...response?.data?.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const infinteLoading = async () => {
    // setPage(page + 1);
    // getTableDataUser(page);
  };
  useEffect(() => {
    getTableDataUser(page);
  }, []);

  return (
    <div class="main_div">
      <div className="second_div">
        <div className="heading_div mt-3 ">
          <h2>Membership Plan</h2>
        </div>

        <div class="row">
          <div class="input-group col-md-4">
            <input class="form-control py-2" type="search" value="search" />
            <span class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class="fa fa-search bell "></i>
              </button>
            </span>
          </div>
        </div>

        <Row xs={2} md={4} lg={6}>
          <Col className="coloum">
            <p className="select_div1">Location:</p>
            <select class="custom-select custom-select-sm select_div1  ">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
          <Col className="coloum">
            <p className="select_div2">Status:</p>
            <select class="custom-select custom-select-sm select_div2 ">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Col>
        </Row>

        <div id="scrollableDiv" className="scrolldown">
          {userData.length ? (
            <table class="table table_container table-bordered table-hover scrollbar">
              <thead class="thead-dark ">
                <tr>
                  <th scope="col">Membership Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Location</th>
                  <th scope="col">Created</th>
                </tr>
              </thead>

              <tbody className="Scrolldiv">
                {userData &&
                  userData?.map((user, index) => {
                    return (
                      <tr>
                        <td>
                          {user?.tourist_name}{" "}
                          <i class="fa fa-regular fa-circle-exclamation"></i>
                        </td>
                        <td>{user?.tourist_email}</td>
                        <td>{user?.tourist_location}</td>

                        <td>
                          {moment(user?.createdat).format(
                            "DD MMM YYYY hh:mm a"
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          ) : (
            " not data"
          )}
        </div>
      </div>
    </div>
  );
};
export default AdminPage;
