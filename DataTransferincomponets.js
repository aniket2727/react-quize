

// data is transporting from child to parents

//child componts
function ChildComponent(props) {
    return <p>{props.message}</p>;
  }


// parent componets componets  
function ParentComponent() {
    return <ChildComponent message="Hello, props!" />;
}




export default ParentComponent

