# Project Description
    This project is about understanding of REACT Hooks with some common Hooks. 

# What are Hooks?
    Hooks allow us to "hook" into React features such as state and lifecycle methods. Hooks were added to React in version 16.8. Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

# Some Common Hooks: 
    useState
    useEffect
    useRef
    useMemo
    useContext
    useCallBack
    useReducer  

# useState(): hook used to manage the state.
	5-usecases of useState hook:
        State Management
        Conditional Rendering
        Counter
        Toggle Flags
        Fetch Data from API & Store Local State.

# useEffect(): Effect Hook is used to handle side effects. 
    By default always take effect / run after every render. By using this hook you tell react what to perform after rendering. componentDidMount, componentDidUpdate, and componentWillUnmount.

    Basically, two types of side effects reside in the React component:
        1.	Effects Without Cleanup: Some of the most common examples of  effects that do not require clean-up are: Manual DOM Mutation, Network Requests, Logging. These operations do not prevent the screen from being changed by the browser.

        2.	Effects With Cleanup: Some effects need cleanup after a DOM update happens. If there is an update that creates Subscription on every change you must Clean that subscription before returning from useEffect or componentDidMount(); so that you can avoid Memory Leaks.

        6-useCases for useEffect Hooks:
            Running once on mount: fetch API data
            Running on state change: validating input field
            Running on state change: live filtering
            Running on state change: trigger any animation on new array value
            Running on props change: update some list on fetched API data update
            Running on props change: updating fetched API data to get some updated price
    
# useRef(): The useRef Hook allows you to persist values between renders.
        It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
    
        useState() vs useRef(): useState will re-render the component but useRef() will not.

        Use Cases for useRef() hooks:
            - If you want to count anything without re-render a component.
            - Get html element focused.
            - To access the DOM: <div ref={myRef} />
            - A value to be used in setTimeout / setInterval without re-rendering the component.
            - Track previous state values.
            
            It simply returns a plain JavaScript object with name as {current}. 
            
            const refObject = useRef(0)
            console.log(refObject) //{ current: 0 }
 
# useMemo(): It returns a memoized value. The primary purpose of this hook is "performance optimization". Use it sparingly to optimise the performance when needed. It accepts two arguments - "create" function (which should return a value to be memoized) and "dependency" array.

            useCase for useMemo():
            Optimise expensive calculations (e.g. operations on data like sort, filter, changing format etc.) while rendering.
# useCallback(): It returns a memoized function (or callback). It accepts two arguments - "function" and "dependency" array. It will return new i.e. re-created function only when one of the dependencies has changed, or else it will return the old i.e. memoized one.

            useCases of useCallback():
            Passing memoized functions to child components (that are optimized with React.memo or shouldComponentUpdate using shallow equal - Object.is) to avoid unnecessary rerender of child component due to functions passed as props.

