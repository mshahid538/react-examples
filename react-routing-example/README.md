# Overview:
    This is example project about react-router-dom V6. V6 has came up with some new improvements and improved algorithem to manage the routes.

# Whats new in react-router-dom V6?
    - Introduced <Routes> : <Switch> depricated.
    - Route prop component changed to element prop and child component also recommended to use as element(that for sure a jsx element): <Route path='/about' element={<About />} /> //inside element={} jsx can also be used.
    - exact prop depricated to match the routing schemes.
    - Use of <Link>

# How to run & use this example project
    - clone the project
    - run command: npm install to install all dependencies.
    - run command: npm react-router-dom@6 if you would like to install router dom V6 manually.
    - run command: npm start
    - Follwoing components have been created in the application and guide how to walk through this routing.
        -1st: Home that can be access while hitting the route "/" or "/home". This is public route.
        -2nd: is About that can be access while hiting the route "/about". This is public route.
        -3rd: there two more components Dashboard and Profile and defined as PrivateRoutes and can only be accessed if user is loggedin. To make this example project more functional there are two buttons designed Login / Logout. If you click Login button, user is supposed to loggedin and can access "/dashboard" and "/profile" routes that are defined as PrivateRoutes.
        - if user clicks on Logout button, user is supposed to Logout from the application and unable to access the route "/profile" or "/dashboard" that are private routes.
        -4th there is also a "/NotFound" route defined, incase user hit an udefined / unexpected route, the application will handle and redirect to Not Found page.



