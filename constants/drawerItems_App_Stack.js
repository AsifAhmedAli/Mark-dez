// import Navbarcomponent  from '../components/navbar';
import Expense from "../components/expense";
import Income from "../components/income/income";
import Student from "../components/student/student";
import Class from "../components/class/class";
import Logout_functionality from "../components/logout/logout";
export default [
  {
    name: "Expense",
    id: 1,
    cname: Expense,
  },
  {
    name: "Income",
    id: 2,
    cname: Income,
  },
  {
    name: "Student Information",
    id: 3,
    cname: Student,
  },
  {
    name: "Class Management",
    id: 4,
    cname: Class,
  },
  {
    name: "Logout",
    id: 5,
    cname: Logout_functionality,
  },
  // {
  //     name: "Section Management",
  //     id:3,
  //     cname: Section,
  // },
  // {
  //     name: "Expense"
  // },
  // {
  //     name: "Expense"
  // },
  // {
  //     name: "Expense"
  // }
];
