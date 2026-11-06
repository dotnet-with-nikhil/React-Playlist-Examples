import './App.css'
// import UseCallbackExample from './components/react-hooks/usecallback-example'
// import UseMemoExample from './components/react-hooks/usememo-example'
// import ReducerExample from './components/react-hooks/ReducerExample' 
// import Login from './components/react-hooks/RefExample'
// import Dashboard from './components/react-hooks/ContextExample';
// import { UserContext } from './components/react-hooks/UserContext';
// import Users from './components/react-hooks/useEffect-Example.jsx'
// import BasicHooks from './components/react-hooks/BasicHooks'
// import LoginForm from './components/event-submit/LoginForm'
// import UserForm from './components/events-click-change/UserForm'
// import products from './components/operator-list-dynamic-rendering/static-data';
// import OperatorListDynamicRendering from './components/operator-list-dynamic-rendering/operator-list-dynamic-rendering'
// import UserProfile from './components/conditional-rendering/UserProfile'
// import EmployeeManager from './components/multiple-state-objects-state-arrays/EmployeeManager'
// import TodoList from './components/useState-Functional-Update/todo-list'
// import Counter from './components/use-states-example/Counter'
// import UserCard  from './components/props-validation/UserCard';
// import CardChildren from './components/children-component/Card-Children'
// import ProductCardWithDestructuring from './components/props-destructuring/with-destructuring'
// import ProductCardWithoutDestructuring from './components/props-destructuring/without-destructuring'
// import UserCards from './components/props-examples/UserCards'
// import TaskList from './components/reusable-components/TaskList'
// import LandingPageInputType from './components/reusable-components/Landing-Page-InputType'
// import LandingPageIn from './components/reusable-components/LandingPage'
// import Dashboard from './components/component-composition/Dashboard'
// import UserProfile from './components/comments/UserProfile'
// import EmployeeCard from './components/fragements/EmployeeCard'
// import ProfileCard from './components/attributes/ProfileCard'
//import EmployeeCard from './components/expressions/EmployeeCard'
// import UserCard from './components/jsx-example/UserCard'
// import PreventDefaultExample from './components/prevent-default-event-bubling/prevent-default-ex'
// import EventBubblingExample from './components/prevent-default-event-bubling/event-bubling'
//  import UnControlledComponent from './components/controlled-uncontrolled-components/uncontrolled-components'
// import UserForm from './components/events-click-change/UserForm'
import EmployeeForm from './components/form-validation/EmployeeForm'
import UseCallbackUseMemoExamples from './components/reusable-components/useMemo-useCallback-Examples'
import RegistrationForm from './components/zod-validation/RegistrationForm'
import UserPreference from './components/custom-hook-example/UserPreference'
import { UserContext } from './components/contextAPI-example/UserContext'
import UserProfileContextAPI from './components/contextAPI-example/UserProfileContextAPI'
import Product from './components/redux-example/components/Product'
import Cart from './components/redux-example/components/Cart'
import Navbar from './components/routing-example/Navbar'
import { Routes, Route } from "react-router-dom";
// import Home from './components/routing-example/Home'
import About from './components/routing-example/About'
// import Contact from './components/routing-example/Contact'
import Home from './components/advanced-routing/pages/Home'
import Login from './components/advanced-routing/pages/Login'
import ProductDetails from './components/advanced-routing/pages/ProductDetails'
import DashboardLayout from './components/advanced-routing/layouts/DashboardLayout'
import Profile from './components/advanced-routing/pages/Profile'
import Settings from './components/advanced-routing/pages/Settings'
import { Navigate } from "react-router-dom";
function App() {
  const userName = "Nikhil";
  // const user = {
  //       name: "Nikhil",
  //       age: 30,
  //       isActive: true,
  //       skills: ["C#", ".NET", "React"],
  //       address: {
  //           city: "Pune",
  //           country: "India"
  //       }
  //   };

  //   const handleViewProfile = () => {
  //       alert("Profile clicked!");
  //   };

  // const user = {
  //   name: "John Doe",
  //   role: "Emp",
  //   isLoggedIn: false,
  //   isActive: true,
  // };

  // const user = {
  //       name: "Nikhil",
  //       role: "Admin"
  //   };
  const isLoggedIn = true;
  return (
    <>

       <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/products/:id"
                element={<ProductDetails />}
            />

            <Route
                path="/dashboard"
                element={
                    isLoggedIn
                        ? <DashboardLayout />
                        : <Navigate to="/login" replace />
                }
            >

                <Route
                    path="profile"
                    element={<Profile />}
                />

                <Route
                    path="settings"
                    element={<Settings />}
                />

            </Route>

        </Routes>



















     {/* <Navbar />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> */}




    {/* <div> */}

      {/* <h1>React Redux Example</h1>
      <Product />
      <Cart /> */}
      {/* <UserContext.Provider value={{ userName }}>
        <h1>ContextAPI Example - React</h1>
        <UserProfileContextAPI/>
      </UserContext.Provider> */}

      {/* <UserPreference/> */}
      {/* <RegistrationForm /> */}
    {/* </div> */}
     {/* <div> */}
      {/* <UseCallbackUseMemoExamples/> */}
    {/* <EmployeeForm/> */}
    {/* <UserForm/> */}

    {/* <UnControlledComponent/> */}

    {/* <PreventDefaultExample/> */}

    {/* <EventBubblingExample/> */}

    {/* <UnControlledComponent/> */}

          {/* <h1>React Hooks - Real-Time Examples</h1> */}
          {/* <BasicHooks /> */}
          {/* <Users/> */}
          {/* <UserContext.Provider value={user}>
              <Dashboard/>  
          </UserContext.Provider>       
         */}
          {/* <Login/> */}
        {/* <ReducerExample/> */}
        {/* <UseMemoExample/> */}
        {/* <UseCallbackExample/> */}
        
        {/* <h2>Submit Event Demo</h2>
        <LoginForm /> */}
      {/* <UserForm/> */}

      {/* <OperatorListDynamicRendering products = {products}/> */}


      {/* <h1>Conditional Rendering Demo</h1>

      <UserProfile user={user} /> */}
      {/* <EmployeeManager />; */}
      {/* <TodoList/> */}
      {/* <Counter/> */}
      {/* <UserCard
          name={user.name}
          age="30"
          isActive={user.isActive}
          skills={user.skills}
          address={user.address}
          onViewProfile={handleViewProfile}
            /> */}
     {/* </div> */}
        {/* <Dashboard /> */}
      {/* <div> */}
        {/* <h1>JSX Syntax Demo</h1>
        <UserCard /> */}

        {/* <h1>Expression in JSX Demo</h1>
        <EmployeeCard /> */}

        {/* <h1>JSX Attributes Demo</h1>
        <ProfileCard /> */}

        {/* <h1>Fragments in React</h1>
        <EmployeeCard/> */}

        {/* <h1>Comments in React</h1>  
        <UserProfile/> */}      

        {/* <LandingPage /> */}

        {/* <LandingPageInputType /> */}

        {/* <TaskList /> */}

          {/* <UserCards 
            name = "nikhil"
            age = {30}
            city = "Pune"
          />
          <UserCards 
            name = "dotnet interview hub"
            age = {20}
            city = "Pune"
          />
          <UserCards/> */}

            {/* <ProductCardWithoutDestructuring
              name="iPhone 15"
              price={69999}
              rating={4.5}
              city="Pune"
            />

            <ProductCardWithDestructuring
              name="iPhone 15"
              price={69999}
              rating={4.5}
            /> */}

             {/* <div> */}

            {/* <CardChildren>

                <h2>Children Component Example</h2>

                <p>
                    Learn React from Beginner to Advanced.
                </p>

            </CardChildren>

            <CardChildren>

                <button>

                    Buy Now

                </button>

            </CardChildren>

            <CardChildren>

                <img
                    src="https://via.placeholder.com/250"
                    alt="Placeholder"
                />

            </CardChildren> */}

        {/* </div>
      </div> */}
    </>
  )
}

export default App
