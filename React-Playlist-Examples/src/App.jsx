import './App.css'
import TodoList from './components/useState-Functional-Update/todo-list'
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

function App() {

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

  return (
    <>
     <div>
      <TodoList/>
      {/* <Counter/> */}
      {/* <UserCard
          name={user.name}
          age="30"
          isActive={user.isActive}
          skills={user.skills}
          address={user.address}
          onViewProfile={handleViewProfile}
            /> */}
     </div>
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
