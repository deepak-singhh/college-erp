import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../Style/AdminHomeHelper.css";
import { CgProfile } from "react-icons/cg";
import {FaHome} from "react-icons/fa";
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {GiTeacher} from 'react-icons/gi'
import {BsPersonLinesFill} from 'react-icons/bs'

const Home = () => {
  const store = useSelector((store) => store);
  const [name, setName] = useState("");
  useEffect(() => {
    if (store.admin.admin.name) {
      setName(store.admin.admin.name);
    }
  }, [store.admin.admin.name]);
  
  

  return (
    <div className="container-fluid">
      <header className="header">
        <div className="profile">
          <div className="picture">
            <CgProfile />
          </div>
          <div className="card-body">
            <h5 className="card-title">{store.admin.admin.name}</h5>
          </div>
        </div>
      </header>
      <div className="navigation" id="navbarNav">
        <div className="card"></div>
        <nav className="navigation-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin">
                <li><FaHome  className="icon"/> HOME</li>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/addFaculty">
                <li><BsFillPersonPlusFill className="icon"/> ADD PROFESSOR</li>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/addStudent">
                <li><BsFillPersonPlusFill className="icon"/> ADD ALUNO</li>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/addAdmin">
                <li><BsFillPersonPlusFill className="icon"/>  ADD ADMIN</li>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/allFaculties">
                <li><GiTeacher className="icon"/>NOSSOS PROFESSORES</li>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" to="/admin/allStudents">
                <li><BsPersonLinesFill className="icon"/>NOSSOS ALUNOS</li>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
