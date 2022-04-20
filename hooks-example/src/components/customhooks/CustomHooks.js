import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

function CustomHooks() {
  //Example#01
  const [name, setName] = useLocalStorage("name", "");

  const handleClick = () => {
    setName("ali");
    console.log(name);
  };
  //----------End Example#01

  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      <h3>
        Are you tired of having to duplicate your common hook functionality
        between components? We have all been there where we have our fetch logic
        duplicated across many different components which is messy and difficult
        to maintain. This is where custom hooks come in. They are amazing at
        grouping up common logic like fetching from APIs and they make it
        incredibly easy to use that logic anywhere in the application with no
        duplication.
      </h3>
      <ul>
        Use Cases of Custom Hooks:
        <li>useLocalStorage custom Hook</li>
        <li>useFetch custom Hook</li>
        <li>copyToClipBoard custom Hook</li>
      </ul>

      {/* Example#01 */}
      <p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <span>{name}</span>
        <button onClick={handleClick}>getLocalStorage</button>
      </p>
      {/* End Example#01 */}

      <p>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </p>
    </>
  );
}
export default CustomHooks;
